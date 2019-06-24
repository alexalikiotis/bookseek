import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchCancellation } from '../models/book/actions';
import BookFetchingComp from '../components/BookFetching';

// eslint-disable-next-line react/prop-types
const BookFetching = ({ searchCancellation, ...restProps }) => {
  return (
    <BookFetchingComp searchCancellation={searchCancellation} {...restProps} />
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  searchCancellation: bindActionCreators(searchCancellation, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookFetching);
