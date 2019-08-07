import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
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

import ReviewCard from '@/components/ReviewCard';

import reviewsData from '@/demo-assets/reviews.json';

const Reviews = () => {
  const item = reviewsData.reviews[0];

  console.log(item);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header>
        <Left>
          <Button transparent>
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
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Reviews by idreambooks.com</Text>
          {reviewsData.reviews.map((item, index) => (
            <ReviewCard item={item} key={index} />
          ))}
          <Text style={styles.readMore}>Read More...</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
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

export default Reviews;
