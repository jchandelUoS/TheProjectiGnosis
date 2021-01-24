import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {color} from 'react-native-reanimated';

const Numkey = (props) => {
  return (
    <View style={styles.keystyle}>
      <TouchableOpacity
        onPress={() => {
          props.testFunct(props.num);
        }}>
        <Text style={styles.num}> {props.num} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  keystyle: {
    height: 50,
    width: 65,
    borderRadius: 15,
    backgroundColor: '#f9b64e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  num: {
    fontSize: 47,
    fontWeight: 'bold',

    color: '#FFFFFF',
  },
});

export default Numkey;
