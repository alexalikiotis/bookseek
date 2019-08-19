import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import { compose } from 'ramda';

import { setOffset } from '@/models/swiper/actions';
import { searchRequest } from '@/models/results/actions';
import { settingsSelector } from '@/models/settings/selectors';

const propTypes = {
  navigation: PropTypes.object,
  cameraRef: PropTypes.object,
  settings: PropTypes.object,
  setOffset: PropTypes.func,
  searchRequest: PropTypes.func,
};

const CameraFooter = ({
  navigation,
  cameraRef,
  settings,
  setOffset,
  searchRequest,
}) => {
  const [onCapture, setOnCapture] = useState(false);

  const handleCameraButtonPress = async () => {
    // if (cameraRef && !onCapture) {
    //   setOnCapture(true);
    //   const picture = await cameraRef.current.takePictureAsync({
    //     base64: true,
    //     quality: settings.pictureQuality,
    //     doNotSave: true,
    //     pauseAfterCapture: settings.pauseAfterCapture,
    //     skipProcessing: settings.skipProcessing, // Android only
    //   });

    //   searchRequest(picture);
    //   cameraRef.current.resumePreview();
    //   navigation.navigate('Results');

    //   // Enabling recapture 1 sec after navigation changed
    //   setTimeout(() => setOnCapture(false), 1000);
    // }
    searchRequest();
    navigation.navigate('Results');
  };

  return (
    <View style={styles.container}>
      <Icon
        name="md-bookmarks"
        color="#fff"
        size={35}
        onPress={() => setOffset(-1)}
      />
      <TouchableOpacity onPress={handleCameraButtonPress}>
        <Icon name="md-radio-button-off" color="#fff" size={80} />
      </TouchableOpacity>
      <Icon
        name="ios-settings"
        color="#fff"
        size={35}
        onPress={() => setOffset(1)}
      />
    </View>
  );
};

CameraFooter.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
});

const mapStateToProps = state => ({
  settings: settingsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setOffset: bindActionCreators(setOffset, dispatch),
  searchRequest: bindActionCreators(searchRequest, dispatch),
});

export default compose(
  withNavigation,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CameraFooter);
