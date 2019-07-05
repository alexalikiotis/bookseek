import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'ramda';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  Left,
  Right,
  Body,
  Button,
  Title,
  Text as NativeBaseText,
  Icon as NativeBaseIcon,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Toast from 'react-native-root-toast';

import BookPreview from '@/components/BookPreview';
import { saveBook } from '@/models/library/actions';
import { sortedBooksSelector } from '@/models/books/selectors';
import { libraryEntitiesSelector } from '@/models/library/selectors';

// import testBook from './book.json'; // Only for development tests

const propTypes = {
  navigation: PropTypes.object,
  results: PropTypes.array,
  storage: PropTypes.object,
  saveBook: PropTypes.func,
};

const Books = ({ navigation, results, storage, saveBook }) => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  const handleGoBack = () => navigation.dismiss();

  const handleSaveToLibrary = () => {
    if (results[swiperIndex]) {
      saveBook(results[swiperIndex]);
      Toast.show('Book saved in library', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header>
        <Left>
          <Button transparent onPress={handleGoBack}>
            <NativeBaseIcon name="arrow-back" />
            <NativeBaseText>Back</NativeBaseText>
          </Button>
        </Left>
        <Body>
          <Title>Books</Title>
        </Body>
        <Right>
          {storage[results[swiperIndex].id] !== undefined ? (
            <NativeBaseIcon
              name="ios-checkmark-circle"
              style={{ color: '#27ae60' }}
            />
          ) : (
            <Button transparent onPress={handleSaveToLibrary}>
              <NativeBaseIcon name="md-download" />
            </Button>
          )}
        </Right>
      </Header>
      {showMessage && (
        <View style={styles.messageWrapper}>
          <View>
            <Text style={styles.messageText}>Is this not your book ?</Text>
            <Text style={styles.messageText}>Swipe right for more results</Text>
          </View>
          <TouchableOpacity onPress={() => setShowMessage(false)}>
            <Icon name="md-close" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
      )}
      <SafeAreaView style={{ flex: 1 }}>
        <Swiper
          loop={false}
          showsPagination={false}
          onIndexChanged={i => setSwiperIndex(i)}
        >
          {results.map(item => (
            <BookPreview key={item.id} item={item} />
          ))}
        </Swiper>
      </SafeAreaView>
    </View>
  );
};

Books.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messageWrapper: {
    backgroundColor: '#2e86de',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  messageText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  results: sortedBooksSelector(state),
  storage: libraryEntitiesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  saveBook: bindActionCreators(saveBook, dispatch),
});

export default compose(
  withNavigation,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Books);
