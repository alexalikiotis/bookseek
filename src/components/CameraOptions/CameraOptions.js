import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as bookService from '../../services/book';

import styles from './styles';

const propTypes = {
  cameraRef: PropTypes.object,
};

const CameraOptions = ({ cameraRef }) => {
  const handleTakePicture = async () => {
    if (cameraRef) {
      const picture = await cameraRef.current.takePictureAsync({
        base64: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="book" size={27} color="#fff" />
      <TouchableOpacity onPress={handleTakePicture}>
        <Icon name="circle-thin" size={75} color="#fff" />
      </TouchableOpacity>
      <Icon name="cog" size={27} color="#fff" />
    </View>
  );
};

CameraOptions.propTypes = propTypes;

export default CameraOptions;
