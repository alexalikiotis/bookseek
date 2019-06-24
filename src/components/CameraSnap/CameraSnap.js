import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const propTypes = {
  cameraRef: PropTypes.object,
};

const CameraSnap = ({ cameraRef }) => {
  const handleTakePicture = async () => {
    if (cameraRef) {
      const picture = await cameraRef.current.takePictureAsync({
        base64: true,
      });

      console.log(picture);
    }
  };

  return (
    <TouchableOpacity onPress={handleTakePicture}>
      <Icon name="circle-thin" size={75} color="#fff" />
    </TouchableOpacity>
  );
};

CameraSnap.propTypes = propTypes;

export default CameraSnap;
