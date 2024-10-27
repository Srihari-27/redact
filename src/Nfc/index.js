import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonGroup from '../components/ButtonGroup';

const Nfc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <ButtonGroup />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Nfc;
