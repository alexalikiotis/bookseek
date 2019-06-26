import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeIndex } from '../../models/swiper/actions';

const propTypes = {
  changeIndex: PropTypes.func,
};

const CameraFooter = ({ changeIndex }) => {
  return (
    <View style={styles.container}>
      <Icon
        name="md-bookmarks"
        color="#fff"
        size={35}
        onPress={() => changeIndex(0)}
      />
      <Icon name="md-radio-button-off" color="#fff" size={80} />
      <Icon
        name="md-settings"
        color="#fff"
        size={35}
        onPress={() => changeIndex(2)}
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
  changeIndex: bindActionCreators(changeIndex, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraFooter);
