import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swiper from 'react-native-swiper';

import { setOffset } from '../models/swiper/actions';

import CameraScreen from '../screens/Camera';
import SettingsScreen from '../screens/Settings';
import LibraryScreen from '../screens/Library';

const propTypes = {
  offset: PropTypes.number,
  setOffset: PropTypes.func,
};

const CameraSwiper = ({ offset, setOffset }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef && offset !== 0) {
      swiperRef.current.scrollBy(offset);
      setOffset(0);
    }
  }, [offset]);

  return (
    <Swiper
      ref={swiperRef}
      index={1}
      showsPagination={false}
      loop={false}
      loadMinimal={true}
    >
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

CameraSwiper.propTypes = propTypes;

const mapStateToProps = state => {
  const offset = state.swiper.offset;
  return {
    offset,
  };
};

const mapDispatchToProps = dispatch => ({
  setOffset: bindActionCreators(setOffset, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraSwiper);
