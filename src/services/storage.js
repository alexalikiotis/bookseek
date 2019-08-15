import AsyncStorage from '@react-native-community/async-storage';

export const save = async book => {
  try {
    const bookList = (await AsyncStorage.getItem('bsLocal__library')) || '[]';
    const bookListParsed = JSON.parse(bookList);
    const newBookList = [...bookListParsed, book];
    await AsyncStorage.setItem('bsLocal__library', JSON.stringify(newBookList));
    return book;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const load = async () => {
  try {
    const bookList = (await AsyncStorage.getItem('bsLocal__library')) || '[]';
    return JSON.parse(bookList);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const remove = async bookId => {
  try {
    const bookList = (await AsyncStorage.getItem('bsLocal__library')) || '[]';
    const bookListParsed = JSON.parse(bookList);
    const newBookList = bookListParsed.filter(item => item.id != bookId);
    await AsyncStorage.setItem('bsLocal__library', JSON.stringify(newBookList));
    return bookId;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const loadSettings = async () => {
  try {
    const settings = await AsyncStorage.getItem('bsLocal__settings');
    const settingsParsed = JSON.parse(settings);
    if (!settings) {
      throw new Error('No settings saved');
    }
    return settingsParsed;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const saveSettings = async settings => {
  try {
    await AsyncStorage.setItem('bsLocal__settings', JSON.stringify(settings));
    return;
  } catch (err) {
    throw new Error(err.message);
  }
};
