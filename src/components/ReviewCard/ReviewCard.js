import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet } from 'react-native';

const propTypes = {
  item: PropTypes.object,
};

const ReviewCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: item.source_logo }}
          style={styles.sourceImage}
          resizeMode="cover"
        />
        <View style={styles.headerInfo}>
          <Text style={styles.sourceText}>{item.source}</Text>
          <Text style={styles.sourceRating}>{item.star_rating} / 5</Text>
        </View>
      </View>
      <View style={styles.snippet}>
        <Text>{item.snippet}</Text>
      </View>
    </View>
  );
};

ReviewCard.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sourceImage: {
    width: 50,
    height: 50,
  },
  headerInfo: {
    marginLeft: 10,
  },
  sourceText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  sourceRating: {
    fontWeight: 'bold',
    color: 'gray',
  },
  snippet: {
    marginTop: 10,
  },
});

export default ReviewCard;
