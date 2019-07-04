import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import BookSnippet from '@/components/BookSnippet';

const books = [
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of hearts',
    authors: ['Kimmery Martin'],
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The deathly hallow',
    authors: ['Kimmery Martin'],
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'Jeez for the win',
    authors: ['Kimmery Martin'],
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The vimpire diaries',
    authors: ['Kimmery Martin'],
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    authors: ['Kimmery Martin'],
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    authors: ['Kimmery Martin'],
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    authors: ['Kimmery Martin'],
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    authors: ['Kimmery Martin'],
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    authors: ['Kimmery Martin'],
  },
  {
    thumbnail: 'https://images.penguinrandomhouse.com/cover/9780399585050',
    title: 'The Queen of England',
    authors: ['Kimmery Martin'],
  },
];

const Library = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Library</Text>
          <Icon
            name="md-arrow-round-forward"
            style={styles.headerIcon}
            size={35}
            color="#bdc3c7"
          />
        </View>
        {books.length === 0 ? (
          <View style={styles.emptyLibrary}>
            <Icon name="ios-folder-open" color="#ecf0f1" size={150} />
            <Text style={styles.emptyLibraryTitle}>Hmmm,</Text>
            <Text style={styles.emptyLibraryText}>
              looks like your library is empty
            </Text>
          </View>
        ) : (
          <FlatList
            data={[{}]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={() => (
              <View style={styles.libraryContent}>
                {books.map((item, index) => (
                  <BookSnippet
                    key={index}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    authors={item.authors}
                  />
                ))}
              </View>
            )}
          />
        )}
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
  emptyLibrary: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyLibraryTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#bdc3c7',
    marginVertical: 20,
  },
  emptyLibraryText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#bdc3c7',
  },
  libraryContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 5,
  },
});

export default Library;
