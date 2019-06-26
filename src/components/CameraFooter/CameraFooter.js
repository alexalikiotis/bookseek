import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setOffset } from '../../models/swiper/actions';

const propTypes = {
  setOffset: PropTypes.func,
};

const CameraFooter = ({ setOffset }) => {
  return (
    <View style={styles.container}>
      <Icon
        name="md-bookmarks"
        color="#fff"
        size={35}
        onPress={() => setOffset(-1)}
      />
      <Icon name="md-radio-button-off" color="#fff" size={80} />
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

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setOffset: bindActionCreators(setOffset, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraFooter);
