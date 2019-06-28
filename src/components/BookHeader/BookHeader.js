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

const propTypes = {
  title: PropTypes.string,
};

const BookHeader = ({ title }) => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name="arrow-back" />
          <Text>Back</Text>
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

BookHeader.propTypes = propTypes;

export default BookHeader;
