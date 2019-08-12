import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import {
  Header,
  Left,
  Right,
  Body,
  Button,
  Title,
  Text,
  Icon,
  Content,
  ListItem,
  Switch,
} from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setOffset } from '@/models/swiper/actions';

const propTypes = {
  setOffset: PropTypes.func,
};

const Settings = ({ setOffset }) => {
  const handleGoBack = () => {
    setOffset(-1);
  };

  return (
    <View style={styles.container}>
      <Header>
        <Left>
          <Button transparent onPress={handleGoBack}>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
        </Left>
        <Body>
          <Title>Settings</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <View style={styles.group}>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#FF9501' }}>
                <Icon active name="ios-flash" />
              </Button>
            </Left>
            <Body>
              <Text>Flash</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
                <Icon active name="ios-eye" />
              </Button>
            </Left>
            <Body>
              <Text>Picture Quality</Text>
            </Body>
            <Right>
              <Text>Very High</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
                <Icon active name="ios-color-wand" />
              </Button>
            </Left>
            <Body>
              <Text>Skip Processing</Text>
            </Body>
            <Right>
              <Switch value={true} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
                <Icon active name="ios-pause" />
              </Button>
            </Left>
            <Body>
              <Text>Pause On Capture</Text>
            </Body>
            <Right>
              <Switch value={true} />
            </Right>
          </ListItem>
        </View>
        <View style={styles.group}>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
                <Icon active name="ios-search" />
              </Button>
            </Left>
            <Body>
              <Text>Book Suggestions</Text>
            </Body>
            <Right>
              <Text>3</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </View>
      </Content>
    </View>
  );
};

Settings.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group: {
    marginVertical: 20,
  },
});

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setOffset: bindActionCreators(setOffset, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
