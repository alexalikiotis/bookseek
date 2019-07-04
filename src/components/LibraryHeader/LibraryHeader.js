import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { setOffset } from '@/models/swiper/actions';

const propTypes = {
  setOffset: PropTypes.func,
};

const LibraryHeader = ({ setOffset }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Library</Text>
      <Icon
        name="md-arrow-round-forward"
        style={styles.headerIcon}
        size={35}
        color="#bdc3c7"
        onPress={() => setOffset(1)}
      />
    </View>
  );
};

LibraryHeader.propTypes = propTypes;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerIcon: {
    position: 'relative',
    top: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setOffset: bindActionCreators(setOffset, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryHeader);
