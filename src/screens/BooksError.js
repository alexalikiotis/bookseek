import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
  navigation: PropTypes.object,
};

const BooksError = ({ navigation }) => {
  const handleGoBack = () => navigation.dismiss();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon name="md-close" size={35} color="#2e86de" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Icon
            name="ios-alert"
            size={90}
            color="#2e86de"
            style={styles.alertIcon}
          />
          <Text style={styles.title}>No Results</Text>
          <Text style={styles.secondaryText}>
            Sorry, We did not recognize that
          </Text>
          <Button style={styles.button} onPress={handleGoBack}>
            <Text style={styles.buttonText}>TRY AGAIN</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

BooksError.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertIcon: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#2e86de',
    fontSize: 30,
    marginBottom: 10,
  },
  secondaryText: {
    fontWeight: 'bold',
    color: '#7f8c8d',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#2e86de',
    paddingHorizontal: 70,
    alignSelf: 'center',
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BooksError;
