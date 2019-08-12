import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet } from 'react-native';

import NoImageAvailable from '@/assets/no-image-available.jpg';

const propTypes = {
  item: PropTypes.object,
};

const ReviewCard = ({ item }) => {
  return (
    <View style={styles.container} onPress={() => console.log('Works!')}>
      <View style={styles.header}>
        {item.source_logo ? (
          <Image
            source={{ uri: item.source_logo }}
            style={styles.sourceImage}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={NoImageAvailable}
            style={styles.sourceImage}
            resizeMode="cover"
          />
        )}

        <View style={styles.headerInfo}>
          <Text style={styles.sourceText}>{item.source}</Text>
          <Text style={styles.sourceRating}>{item.star_rating} / 5</Text>
        </View>
      </View>
      <Text style={styles.snippet}>{item.snippet}</Text>
      {item.review_date && (
        <Text
          style={{
            marginTop: 10,
            color: '#7f8c8d',
            fontSize: 12,
          }}
        >
          Published on{' '}
          {item.review_date
            .split('-')
            .reverse()
            .join('/')}
        </Text>
      )}
    </View>
  );
};

ReviewCard.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#f1f2f6',
    borderColor: '#dfe4ea',
    borderWidth: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sourceImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
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
    color: '#7f8c8d',
  },
  snippet: {
    marginTop: 10,
  },
});

export default ReviewCard;
