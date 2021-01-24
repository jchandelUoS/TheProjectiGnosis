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

const KeyBut1 = (props) => {
  const [But1, setBut1] = useState(0);

  return (
    <View style={styles.keystyle}>
      <TouchableOpacity
        onPress={() => {
          setBut1(props.num);
          props.nextFunct(props.arr);
          props.next2funct && props.next2funct();
        }}>
        <Text style={styles.num}> {props.num} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  keystyle: {
    height: 50,
    width: 120,
    borderRadius: 10,
    backgroundColor: '#f9b64e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  num: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default KeyBut1;
