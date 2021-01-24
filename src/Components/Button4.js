import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button4 = ({navigation}) => {
  return (
    <View style={styles.backgroundStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.TextStyle}> FINISH</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop:10,
    paddingTop:2,
    paddingBottom:2,
    marginLeft:40,
    marginRight:40,
    backgroundColor:'#f9b64e',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    
  },

  TextStyle: {
    fontSize: 45,
    alignSelf: 'center',
    marginHorizontal: 5,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Button4;
