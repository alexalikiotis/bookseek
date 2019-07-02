import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base';
import { withNavigation } from 'react-navigation';

const propTypes = {
  navigation: PropTypes.object,
};

const BookHeader = ({ navigation }) => {
  const handleGoBack = () => navigation.dismiss();

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
      <Right />
    </Header>
  );
};

BookHeader.propTypes = propTypes;

export default withNavigation(BookHeader);
