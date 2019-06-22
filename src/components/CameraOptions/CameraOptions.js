import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const propTypes = {
  cameraRef: PropTypes.object,
};

const CameraOptions = ({ cameraRef }) => {
  async function takePicture() {
    if (cameraRef) {
      const picture = await cameraRef.current.takePictureAsync({
        quality: 0.7,
      });
      console.log(picture);
    }
  }

  return (
    <View style={styles.container}>
      <Icon name="book" size={27} color="#fff" />
      <TouchableOpacity onPress={takePicture}>
        <Icon name="circle-thin" size={75} color="#fff" />
      </TouchableOpacity>
      <Icon name="cog" size={27} color="#fff" />
    </View>
  );
};

CameraOptions.propTypes = propTypes;

export default CameraOptions;
