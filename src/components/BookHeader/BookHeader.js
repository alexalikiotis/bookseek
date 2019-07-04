import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Header,
  Left,
  Right,
  Body,
  Button,
  Title,
  Text,
  Icon,
} from 'native-base';
import Toast from 'react-native-root-toast';

import { saveBook } from '@/models/library/actions';

const propTypes = {
  navigation: PropTypes.object,
  currentBook: PropTypes.object,
  entities: PropTypes.object,
  saveBook: PropTypes.func,
};

const BookHeader = ({ navigation, currentBook, entities, saveBook }) => {
  const handleGoBack = () => navigation.dismiss();

  const handleSaveBook = () => {
    if (currentBook) {
      saveBook(currentBook);
      Toast.show('Book saved in library', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
    }
  };
  return (
    <Header>
      <Left>
        <Button transparent onPress={handleGoBack}>
          <Icon name="arrow-back" />
          <Text>Back</Text>
        </Button>
      </Left>
      <Body>
        <Title>Books</Title>
      </Body>
      <Right>
        {entities[currentBook.id] !== undefined ? (
          <Icon name="ios-checkmark-circle" style={{ color: '#27ae60' }} />
        ) : (
          <Button transparent onPress={handleSaveBook}>
            <Icon name="md-download" />
          </Button>
        )}
      </Right>
    </Header>
  );
};

BookHeader.propTypes = propTypes;

const mapStateToProps = state => ({
  entities: state.library.entities,
});

const mapDispatchToProps = dispatch => ({
  saveBook: bindActionCreators(saveBook, dispatch),
});

export default compose(
  withNavigation,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookHeader);
