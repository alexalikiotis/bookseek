import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { settingsUpdate } from '@/models/settings/actions';
import { settingsSelector } from '@/models/settings/selectors';

const propTypes = {
  settings: PropTypes.object,
  settingsUpdate: PropTypes.func,
};

const CameraHeader = ({ settings, settingsUpdate }) => {
  const toggleFlash = () => {
    settingsUpdate({
      flash: !settings.flash,
    });
  };

  return (
    <View style={styles.container}>
      <Icon
        name={settings.flash ? 'flash' : 'flash-off'}
        onPress={toggleFlash}
        color="#fff"
        size={32}
      />
    </View>
  );
};

CameraHeader.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

const mapStateToProps = state => ({
  settings: settingsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  settingsUpdate: bindActionCreators(settingsUpdate, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraHeader);
