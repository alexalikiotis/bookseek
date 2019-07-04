import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';

const propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.any,
};

const BookSnippet = ({ thumbnail, title, authors }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: thumbnail }}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author} numberOfLines={1}>
          {authors.reduce(
            (str, name, index) =>
              index !== authors.length - 1
                ? str.concat(name + ', ')
                : str.concat(name),
            ''
          )}
        </Text>
      </View>
    </View>
  );
};

BookSnippet.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    width: '33.3%',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  thumbnail: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  content: {
    marginTop: 10,
    width: '95%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  author: {
    color: 'grey',
    fontSize: 12,
  },
});

export default BookSnippet;
