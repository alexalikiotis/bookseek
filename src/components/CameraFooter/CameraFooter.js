import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import { compose } from 'ramda';

import { setOffset } from '../../models/swiper/actions';

const propTypes = {
  navigation: PropTypes.object,
  setOffset: PropTypes.func,
};

const CameraFooter = ({ navigation, setOffset }) => {
  return (
    <View style={styles.container}>
      <Icon
        name="md-bookmarks"
        color="#fff"
        size={35}
        onPress={() => setOffset(-1)}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Results')}>
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

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setOffset: bindActionCreators(setOffset, dispatch),
});

export default compose(
  withNavigation,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CameraFooter);
