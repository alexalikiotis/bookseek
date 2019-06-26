import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const CameraHeader = () => {
  return (
    <View style={styles.container}>
      <Icon name="ios-search" color="#fff" size={32} />
      <Input
        placeholder="Search ISBN"
        placeholderTextColor="#fff"
        style={styles.input}
      />
      <Icon name="ios-flash" color="#fff" size={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});

export default CameraHeader;
