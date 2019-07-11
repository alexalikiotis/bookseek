import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { compose } from 'ramda';

import LibraryHeader from '@/components/LibraryHeader';
import BookSnippet from '@/components/BookSnippet';

import { libraryBooksSelector } from '@/models/library/selectors';
import { removeBookRequest } from '@/models/library/actions';

const propTypes = {
  books: PropTypes.array,
  removeBookRequest: PropTypes.func,
  showActionSheetWithOptions: PropTypes.func,
};

const Library = ({ books, removeBookRequest, showActionSheetWithOptions }) => {
  const handleLongPress = bookId => {
    const options = ['Delete', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex == 0) {
          removeBookRequest(bookId);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <LibraryHeader />
        {books.length === 0 ? (
          <View style={styles.emptyLibrary}>
            <Icon name="ios-folder-open" color="#ecf0f1" size={150} />
            <Text style={styles.emptyLibraryTitle}>Hmmm,</Text>
            <Text style={styles.emptyLibraryText}>
              looks like your library is empty
            </Text>
          </View>
        ) : (
          <ScrollView style={styles.scrollView}>
            <View style={styles.libraryContent}>
              {books.map((item, index) => (
                <BookSnippet
                  key={index}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  authors={item.authors}
                  handleLongPress={() => handleLongPress(item.id)}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
};

Library.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  emptyLibrary: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyLibraryTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#bdc3c7',
    marginVertical: 20,
  },
  emptyLibraryText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#bdc3c7',
  },
  scrollView: {
    flex: 1,
  },
  libraryContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 5,
  },
});

const mapStateToProps = state => ({
  books: libraryBooksSelector(state),
});

const mapDispatchToProps = dispatch => ({
  removeBookRequest: bindActionCreators(removeBookRequest, dispatch),
});

export default compose(
  connectActionSheet,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Library);
