import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const propTypes = {
  cameraRef: PropTypes.object,
  navigation: PropTypes.object,
  searchRequest: PropTypes.func,
};

const CameraSnap = ({ cameraRef, navigation, searchRequest }) => {
  const handleTakePicture = async () => {
    // if (cameraRef) {
    //   const picture = await cameraRef.current.takePictureAsync({
    //     base64: true,
    //   });

    //   searchRequest(picture);
    //   navigation.navigate('Book');
    // }
    searchRequest();
    navigation.navigate('Book');
  };

  return (
    <TouchableOpacity onPress={handleTakePicture}>
      <Icon name="circle-thin" size={75} color="#fff" />
    </TouchableOpacity>
  );
};

CameraSnap.propTypes = propTypes;

export default CameraSnap;
