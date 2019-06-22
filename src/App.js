import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Permissions from 'react-native-permissions';

import CameraScreen from './screens/CameraScreen';

const App = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  const requestCameraPermission = async () => {
    const status = await Permissions.request('camera');
    setHasCameraPermission(status === 'authorized' ? true : false);
  };

  useEffect(() => {
    requestCameraPermission();
  });

  return (
    <View style={{ flex: 1 }}>
      {hasCameraPermission ? (
        <CameraScreen />
      ) : (
        <Text>No access to camera</Text>
      )}
    </View>
  );
};

export default App;
