import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import BookFetching from '../containers/BookFetching';

const Book = props => {
  if (props.fetching) {
    return <BookFetching navigation={props.navigation} />;
  } else {
    if (!props.error) {
      return (
        <View>
          <Text>This is not a screen</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>This is not a screen</Text>
        </View>
      );
    }
  }
};

const mapStateToProps = state => {
  const fetching = state.book.fetching;
  const data = state.book.data;
  const error = state.book.error;

  return {
    fetching,
    data,
    error,
  };
};

export default connect(mapStateToProps)(Book);
