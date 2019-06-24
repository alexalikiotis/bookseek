import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const propTypes = {
  name: PropTypes.string,
};

const CameraIcon = ({ name }) => {
  return <Icon name={name} size={27} color="#fff" />;
};

CameraIcon.propTypes = propTypes;

export default CameraIcon;
