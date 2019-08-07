import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { compose } from 'ramda';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
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

import ReviewCard from '@/components/ReviewCard';
import {
  loadingSelector,
  reviewLinkSelector,
  reviewsSelector,
} from '@/models/reviews/selectors';

const propTypes = {
  navigation: PropTypes.object,
  loading: PropTypes.bool,
  reviewLink: PropTypes.string,
  reviews: PropTypes.array,
};

const Reviews = ({ navigation, loading, reviewLink, reviews }) => {
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
          <Title>Reviews</Title>
        </Body>
        <Right />
      </Header>
      <SafeAreaView style={styles.safeArea}>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator />
            <Text style={styles.loadingText}>Please Wait</Text>
          </View>
        ) : (
          <React.Fragment>
            {reviews.length === 0 ? (
              <View style={styles.error}>
                <Icon
                  name="ios-alert"
                  size={50}
                  color="#000"
                  style={styles.errorIcon}
                />
                <Text style={styles.errorText}>Oops!</Text>
                <Text style={styles.errorSubText}>
                  We could not find reviews for this book :(
                </Text>
              </View>
            ) : (
              <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>Reviews by idreambooks.com</Text>
                {reviews.map((item, index) => (
                  <ReviewCard item={item} key={index} />
                ))}
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(reviewLink);
                  }}
                >
                  <Text style={styles.readMore}>Read More...</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </React.Fragment>
        )}
      </SafeAreaView>
    </View>
  );
};

Reviews.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
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
  title: {
    fontSize: 15,
    opacity: 0.5,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  readMore: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 25,
    color: '#2e86de',
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  loading: loadingSelector(state),
  reviewLink: reviewLinkSelector(state),
  reviews: reviewsSelector(state),
});

export default compose(
  withNavigation,
  connect(mapStateToProps)
)(Reviews);
