
import React from 'react';
import { View,Text,StatusBar, TouchableOpacity } from 'react-native';
import ScreenB from '../Components/ScreenB';
const ScreenA = ({navigation}) => {
  return (
    <View>
        <Text>Hello World Now</Text>
    
        <TouchableOpacity onPress={() => navigation.navigate('testscrB')}>
      <Text>Go to WelcomePage</Text>
      </TouchableOpacity>
      
      </View>
  );
};
export default ScreenA;