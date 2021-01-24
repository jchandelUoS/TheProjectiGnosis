import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const TextInp = ({label}) => {
  console.log(label);

  return (
    <View>
      <Text style={styles.input}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f7efcd',
    width: 100,
    height: 50,
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default TextInp;
