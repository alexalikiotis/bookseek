import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import Permissions from 'react-native-permissions';

const propTypes = {
  navigation: PropTypes.object,
};

const PermissionsPending = ({ navigation }) => {
  const requestCameraPermission = async () => {
    const status = await Permissions.request('camera');
    navigation.navigate(status === 'authorized' ? 'App' : 'PermissionsDenied');
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator />
    </View>
  );
};

PermissionsPending.propTypes = propTypes;

export default PermissionsPending;
