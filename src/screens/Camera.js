import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';

import CameraHeader from '@/components/CameraHeader';
import CameraFooter from '@/components/CameraFooter/CameraFooter';

import { settingsSelector } from '@/models/settings/selectors';

const propTypes = {
  settings: PropTypes.object,
};

const Camera = ({ settings }) => {
  const cameraRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        flashMode={
          settings.flash
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        style={{ flex: 1 }}
        captureAudio={false}
      >
        <SafeAreaView style={styles.cameraContainer}>
          <CameraHeader />
          <CameraFooter cameraRef={cameraRef} />
        </SafeAreaView>
      </RNCamera>
    </View>
  );
};

Camera.propTypes = propTypes;

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => ({
  settings: settingsSelector(state),
});

export default connect(mapStateToProps)(Camera);
