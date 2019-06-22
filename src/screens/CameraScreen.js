import React, { useRef } from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

import SearchField from '../components/SearchField';
import CameraOptions from '../components/CameraOptions';

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
        autoFocus
      >
        <SafeAreaView style={styles.safeArea}>
          <View>
            <SearchField />
          </View>
          <View style={{ flex: 1 }}>
            <CameraOptions cameraRef={cameraRef} />
          </View>
        </SafeAreaView>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    display: 'flex',
    flex: 1,
  },
});

export default Camera;
