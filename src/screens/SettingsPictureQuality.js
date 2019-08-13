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
} from 'native-base';
import { compose } from 'ramda';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPictureQuality } from '@/utils/formatters';
import { settingsUpdate } from '@/models/settings/actions';
import { settingsSelector } from '@/models/settings/selectors';

const propTypes = {
  navigation: PropTypes.object,
  settings: PropTypes.object,
  settingsUpdate: PropTypes.func,
};

const SettingsPictureQuality = ({ navigation, settings, settingsUpdate }) => {
  const handleGoBack = () => {
    navigation.pop();
  };

  const handleOnPress = value => {
    if (settings.pictureQuality === value) return;

    settingsUpdate({
      pictureQuality: value,
    });
  };

  const options = [0.25, 0.5, 0.75, 1];

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
          <Title style={styles.title}>Picture Quality</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <View style={styles.group}>
          {options.map((value, index) => (
            <ListItem noIndent key={index} onPress={() => handleOnPress(value)}>
              <Left>
                <Text>{formatPictureQuality(value)}</Text>
              </Left>
              <Right>
                {settings.pictureQuality === value && (
                  <Icon name="md-checkmark" style={styles.icon} />
                )}
              </Right>
            </ListItem>
          ))}
        </View>
      </Content>
    </View>
  );
};

SettingsPictureQuality.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    width: 150,
  },
  group: {
    marginVertical: 20,
  },
  icon: {
    fontSize: 15,
    color: '#3498db',
  },
});

const mapStateToProps = state => ({
  settings: settingsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  settingsUpdate: bindActionCreators(settingsUpdate, dispatch),
});

export default compose(
  withNavigation,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SettingsPictureQuality);
