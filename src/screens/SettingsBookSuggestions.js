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

import { settingsUpdate } from '@/models/settings/actions';
import { settingsSelector } from '@/models/settings/selectors';

const propTypes = {
  navigation: PropTypes.object,
  settings: PropTypes.object,
  settingsUpdate: PropTypes.func,
};

const SettingsBookSuggestions = ({ navigation, settings, settingsUpdate }) => {
  const handleGoBack = () => {
    navigation.pop();
  };

  const handleOnPress = value => {
    if (settings.bookSuggestions === value) return;

    settingsUpdate({
      bookSuggestions: value,
    });
  };

  const options = [1, 3, 5];

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
          <Title style={styles.title}>Book Suggestions</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <View style={styles.group}>
          {options.map((value, index) => (
            <ListItem noIndent key={index} onPress={() => handleOnPress(value)}>
              <Left>
                <Text>{value}</Text>
              </Left>
              <Right>
                {settings.bookSuggestions === value && (
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

SettingsBookSuggestions.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    width: 180,
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
)(SettingsBookSuggestions);
