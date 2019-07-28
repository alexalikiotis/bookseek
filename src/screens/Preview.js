import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {
  Header,
  Left,
  Right,
  Body,
  Button,
  Title,
  Text as NativeBaseText,
  Icon as NativeBaseIcon,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { compose } from 'ramda';

import BookPreview from '@/components/BookPreview';
import { bookPreviewSelector } from '@/models/results/selectors';

const propTypes = {
  navigation: PropTypes.object,
  item: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

const Preview = ({ navigation, item, loading, error }) => {
  const handleGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header>
        <Left>
          <Button transparent onPress={handleGoBack}>
            <NativeBaseIcon name="arrow-back" />
            <NativeBaseText>Back</NativeBaseText>
          </Button>
        </Left>
        <Body>
          <Title>Preview</Title>
        </Body>
        <Right />
      </Header>
      <SafeAreaView style={styles.safeAreaView}>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator />
            <Text style={styles.loadingText}>Please Wait</Text>
          </View>
        ) : (
          <React.Fragment>
            {error ? (
              <View style={styles.error}>
                <Icon
                  name="ios-alert"
                  size={50}
                  color="#000"
                  style={styles.errorIcon}
                />
                <Text style={styles.errorText}>Oops, something happened!</Text>
                <Text style={styles.errorSubText}>Please try again :(</Text>
              </View>
            ) : (
              <BookPreview key={item.id} item={item} />
            )}
          </React.Fragment>
        )}
      </SafeAreaView>
    </View>
  );
};

Preview.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  safeAreaView: {
    flex: 1,
  },
  loading: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 20,
    opacity: 0.5,
  },
  error: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorIcon: {
    opacity: 0.5,
  },
  errorText: {
    marginTop: 20,
    fontWeight: 'bold',
    opacity: 0.5,
  },
  errorSubText: {
    marginTop: 5,
    fontWeight: 'bold',
    opacity: 0.5,
  },
});

const mapStateToProps = state => ({
  item: bookPreviewSelector(state),
  loading: state.results.loading,
  error: state.results.error,
});

export default compose(
  withNavigation,
  connect(mapStateToProps)
)(Preview);
