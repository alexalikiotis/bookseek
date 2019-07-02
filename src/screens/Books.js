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
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

import BookHeader from '@/components/BookHeader';
import BookAttribute from '@/components/BookAttribute';

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
                        <Text style={styles.authors}>{item.authors}</Text>
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
                      <Button full style={styles.button}>
                        <Text style={styles.buttonText}>Book Reviews</Text>
                        <Icon name="ios-arrow-forward" size={30} color="#fff" />
                      </Button>
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
  button: {
    borderRadius: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

const mapStateToProps = state => {
  const entities = state.books.entities;

  return {
    entities,
  };
};

export default connect(mapStateToProps)(Books);
