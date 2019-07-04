import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

import BookHeader from '@/components/BookHeader';
import BookAttribute from '@/components/BookAttribute';

import { sortedBooksSelector } from '@/models/books/selectors';

const propTypes = {
  entities: PropTypes.array,
};

const Books = ({ entities }) => {
  // const [swiperIndex, setSwiperIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  return (
    <View style={styles.container}>
      <BookHeader />
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
          // onIndexChanged={newIndex => setSwiperIndex(newIndex)}
        >
          {entities.map(entity => (
            <View key={entity.id} style={{ flex: 1 }}>
              <FlatList
                data={[entity]}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <View style={{ flex: 1 }}>
                    <View style={styles.infoContainer}>
                      <Image
                        source={{
                          uri: `http://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=2`,
                        }}
                        style={styles.thumbnail}
                        resizeMode="cover"
                      />
                      <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.authors}>
                          {item.authors.reduce(
                            (str, name, index) =>
                              index !== item.authors.length - 1
                                ? str.concat(name + ', ')
                                : str.concat(name),
                            ''
                          )}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.descriptionWrapper}>
                      <Text style={styles.description}>{item.description}</Text>
                      <View style={styles.attributesWrapper}>
                        <View style={styles.attributesBox}>
                          <BookAttribute name="Pages" value={item.pageCount} />
                          <BookAttribute
                            name="Categories"
                            value={item.categories}
                          />
                          <BookAttribute
                            name="Language"
                            value={item.language}
                          />
                          <BookAttribute
                            name="Published Date"
                            value={item.publishedDate}
                          />
                          <BookAttribute
                            name="Publisher"
                            value={item.publisher}
                          />
                        </View>
                      </View>
                      <View style={styles.footerContainer}>
                        <Button
                          style={{
                            ...styles.footerButton,
                            backgroundColor: '#2e86de',
                          }}
                        >
                          <Icon name="ios-chatbubbles" color="#fff" size={25} />
                          <Text style={styles.footerButtonText}>Reviews</Text>
                        </Button>
                        <Button
                          style={{
                            ...styles.footerButton,
                            backgroundColor: '#d63031',
                          }}
                          onPress={() =>
                            Linking.openURL(
                              `https://play.google.com/store/books/details?id=${item.id}`
                            )
                          }
                        >
                          <Icon name="md-appstore" color="#fff" size={25} />
                          <Text style={styles.footerButtonText}>
                            Buy Online
                          </Text>
                        </Button>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
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
  infoContainer: {
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: 180,
    height: 280,
    alignSelf: 'center',
    marginTop: 30,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  authors: {
    fontWeight: 'bold',
    color: '#7f8c8d',
    fontSize: 15,
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
  },
  description: {
    paddingHorizontal: 25,
    fontSize: 15,
  },
  attributesWrapper: {
    paddingHorizontal: 25,
    paddingVertical: 50,
  },
  attributesBox: {
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#fff',
    borderColor: '#dfe4ea',
    padding: 20,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 25,
  },
  footerButton: {
    flex: 1,
    backgroundColor: '#2e86de',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 5,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

const mapStateToProps = state => ({
  entities: sortedBooksSelector(state),
});

export default connect(mapStateToProps)(Books);
