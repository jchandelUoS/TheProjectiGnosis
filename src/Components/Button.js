import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Button = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon style={styles.iconStyle} name="search" size={27} color="#bf1333" />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#cfd2d4',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    borderColor: 'black',
    fontSize: 17,
    flex: 1,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default Button;
