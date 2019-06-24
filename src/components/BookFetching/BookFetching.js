import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import Icon from 'react-native-vector-icons/FontAwesome';

const propTypes = {
  navigation: PropTypes.object,
  searchCancellation: PropTypes.func,
};

const BookFetching = ({ navigation, searchCancellation }) => {
  const handleCancellation = () => {
    searchCancellation();
    navigation.navigate('Camera');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#4b7bec' }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View
            style={{
              width: '100%',
              paddingHorizontal: 20,
              paddingVertical: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <TouchableOpacity onPress={handleCancellation}>
              <Icon name="times" size={27} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3, width: '100%' }}>
            <MaterialIndicator color="#fff" size={150} />
          </View>
          <View
            style={{
              flex: 1,

              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
              Recognizing...
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

BookFetching.propTypes = propTypes;

export default BookFetching;
