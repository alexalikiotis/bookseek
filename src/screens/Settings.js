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
import { settingsUpdate } from '@/models/settings/actions';
import { settingsSelector } from '@/models/settings/selectors';

import { formatPictureQuality } from '@/utils/formatters';

const propTypes = {
  settings: PropTypes.object,
  setOffset: PropTypes.func,
  settingsUpdate: PropTypes.func,
};

const Settings = ({ settings, setOffset, settingsUpdate }) => {
  const handleGoBack = () => {
    setOffset(-1);
  };

  const handleSwitch = (key, value) => {
    settingsUpdate({
      [key]: value,
    });
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
              <Button style={styles.activeButton}>
                <Icon active name="ios-flash" />
              </Button>
            </Left>
            <Body>
              <Text>Flash</Text>
            </Body>
            <Right>
              <Switch
                value={settings.flash}
                onValueChange={value => handleSwitch('flash', value)}
              />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={styles.button}>
                <Icon active name="ios-eye" />
              </Button>
            </Left>
            <Body>
              <Text>Picture Quality</Text>
            </Body>
            <Right>
              <Text>{formatPictureQuality(settings.pictureQuality)}</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={styles.button}>
                <Icon active name="ios-color-wand" />
              </Button>
            </Left>
            <Body>
              <Text>Skip Processing</Text>
            </Body>
            <Right>
              <Switch
                value={settings.skipProcessing}
                onValueChange={value => handleSwitch('skipProcessing', value)}
              />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={styles.button}>
                <Icon active name="ios-pause" />
              </Button>
            </Left>
            <Body>
              <Text>Pause On Capture</Text>
            </Body>
            <Right>
              <Switch
                value={settings.pauseOnCapture}
                onValueChange={value => handleSwitch('pauseOnCapture', value)}
              />
            </Right>
          </ListItem>
        </View>
        <View style={styles.group}>
          <ListItem icon>
            <Left>
              <Button style={styles.button}>
                <Icon active name="ios-search" />
              </Button>
            </Left>
            <Body>
              <Text>Book Suggestions</Text>
            </Body>
            <Right>
              <Text>{settings.bookSuggestions}</Text>
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
  activeButton: {
    backgroundColor: '#FF9501',
  },
  button: {
    backgroundColor: '#007AFF',
  },
});

const mapStateToProps = state => ({
  settings: settingsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setOffset: bindActionCreators(setOffset, dispatch),
  settingsUpdate: bindActionCreators(settingsUpdate, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
