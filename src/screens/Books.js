import React from 'react';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base';

const Books = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
        </Left>
        <Body>
          <Title>Books Screen</Title>
        </Body>
        <Right />
      </Header>
    </Container>
  );
};

export default Books;
