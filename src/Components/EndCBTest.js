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

const EndCBTest = (props) => {
  const [Butt, setButt] = useState(0);

  return (
    <View style={styles.keystyle}>
      <TouchableOpacity
        onPress={() => {
          setButt(props.num);
          props.nextFunct(props.nav);
        }}>
        <Text style={styles.num}> {props.num} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  keystyle: {
    height: 45,
    width: 85,
    borderRadius: 10,
    backgroundColor: '#f9b64e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  num: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default EndCBTest;
