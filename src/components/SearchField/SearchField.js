import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import styles from './styles';

const SearchField = () => {
  return (
    <Input
      placeholder="Search ISBN..."
      placeholderTextColor="#fff"
      leftIcon={
        <Icon name="search" size={22} color="#fff" style={styles.searchIcon} />
      }
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
    />
  );
};

export default SearchField;
