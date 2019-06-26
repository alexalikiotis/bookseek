import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import CameraScreen from './Camera';
import SettingsScreen from './Settings';
import LibraryScreen from './Library';

const propTypes = {
  index: PropTypes.number,
  changeIndex: PropTypes.func,
};

const RootSwiper = ({ index }) => {
  return (
    <Swiper index={index} showsPagination={false} loop={false}>
      <View style={{ flex: 1 }}>
        <LibraryScreen />
      </View>
      <View style={{ flex: 1 }}>
        <CameraScreen />
      </View>
      <View style={{ flex: 1 }}>
        <SettingsScreen />
      </View>
    </Swiper>
  );
};

RootSwiper.propTypes = propTypes;

const mapStateToProps = state => {
  const index = state.swiper.index;
  return {
    index,
  };
};

export default connect(mapStateToProps)(RootSwiper);
