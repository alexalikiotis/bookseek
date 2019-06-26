import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
  navigation: PropTypes.object,
};

const ResultsLoading = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
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

ResultsLoading.propTypes = propTypes;

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

export default ResultsLoading;
