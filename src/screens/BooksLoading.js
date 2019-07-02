import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MaterialIndicator } from 'react-native-indicators';
import Icon from 'react-native-vector-icons/Ionicons';

import { searchCanceled } from '@/models/books/actions';

const propTypes = {
  navigation: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  searchCanceled: PropTypes.func,
};

const BooksLoading = ({ navigation, loading, error, searchCanceled }) => {
  const [canceled, setCanceled] = useState(false);
  useEffect(() => {
    if (!loading && !canceled) {
      navigation.navigate(error ? 'BooksError' : 'Books');
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              setCanceled(true);
              searchCanceled();
              navigation.pop();
            }}
          >
            <Icon name="md-close" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 4 }}>
          <MaterialIndicator size={120} color="#fff" />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Recognizing...</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

BooksLoading.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e86de',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 2,
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

const mapStateToProps = state => {
  const loading = state.books.loading;
  const error = state.books.error;

  return {
    loading,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  searchCanceled: bindActionCreators(searchCanceled, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksLoading);
