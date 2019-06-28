import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const propTypes = {
  name: PropTypes.string,
  value: PropTypes.any, // Could be string or array
};

const BookAttribute = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.attributeName}>{name}</Text>
      <Text>{value}</Text>
    </View>
  );
};

BookAttribute.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  attributeName: {
    fontWeight: 'bold',
  },
});

export default BookAttribute;
