import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Name = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon style={styles.iconStyle} name="search" size={27} color="#bf1333" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Your Name"
        onEndEditing={onNameSubmit}
      />
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
    top: 20,
    marginBottom: 25,
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

export default Name;
