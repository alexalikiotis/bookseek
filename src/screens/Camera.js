import React, { useRef, useEffect, useState } from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Permissions from 'react-native-permissions';

import IsbnSearchInput from '../components/IsbnSearchInput';
import CameraIcon from '../components/CameraIcon';
import CameraSnap from '../components/CameraSnap';

const Camera = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const cameraRef = useRef(null);

  const requestCameraPermission = async () => {
    const status = await Permissions.request('camera');
    setHasCameraPermission(status === 'authorized' ? true : false);
  };

  useEffect(() => {
    requestCameraPermission();
  });

  if (!hasCameraPermission) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No Access to camera</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={{ flex: 1 }}
        captureAudio={false}
        autoFocus
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <IsbnSearchInput />
            <View style={styles.bottomIcons}>
              <CameraIcon name="book" />
              <CameraSnap cameraRef={cameraRef} />
              <CameraIcon name="cog" />
            </View>
          </View>
        </SafeAreaView>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  bottomIcons: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
});

export default Camera;
