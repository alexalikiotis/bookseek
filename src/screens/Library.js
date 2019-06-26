import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Library = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
  },
});

export default Library;
