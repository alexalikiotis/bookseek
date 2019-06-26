import React, { useRef } from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

import CameraHeader from '../components/CameraHeader';
import CameraFooter from '../components/CameraFooter/CameraFooter';

const Camera = () => {
  const cameraRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={{ flex: 1 }}
        captureAudio={false}
      >
        <SafeAreaView style={styles.cameraContainer}>
          <CameraHeader />
          <CameraFooter />
        </SafeAreaView>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default Camera;
