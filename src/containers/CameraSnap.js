import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchRequest } from '../models/book/actions';
import CameraSnap from '../components/CameraSnap';

// eslint-disable-next-line react/prop-types
const CameraSnapContainer = ({ searchRequest, ...restProps }) => (
  <CameraSnap searchRequest={searchRequest} {...restProps} />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  searchRequest: bindActionCreators(searchRequest, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraSnapContainer);
