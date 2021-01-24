import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button3 = (props) => {
  const [name, changeName] = useState('00');

  return (
    <View style={StyleSheet.containerHeight}>
      <TouchableOpacity
        style={styles.backgroundStyle}
        onPress={() => {
          changeName('TttrytName');
          props.testFunct(name);
        }}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'red',
    height: 45,
    width: 80,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Button3;
