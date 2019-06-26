import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PermissionsDenied = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Camera Access</Text>
      <Text>Bookseek requires camera access</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PermissionsDenied;
