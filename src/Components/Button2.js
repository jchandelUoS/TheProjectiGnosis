import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button2 = ({navigation}) => {
  return (
    <View style={styles.backgroundStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.TextStyle}> Continue to take the test</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#06127f',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextStyle: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 15,
    color: '#f9b64e',
  },
});

export default Button2;
