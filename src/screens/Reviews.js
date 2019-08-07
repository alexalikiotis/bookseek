import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
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
          {reviewsData.reviews.map((item, index) => (
            <ReviewCard item={item} key={index} />
          ))}
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
  scrollView: {
    flex: 1,
  },
});

export default Reviews;
