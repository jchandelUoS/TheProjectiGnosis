import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const TestMenu = ({navigation}) => {
  return (
    <ScrollView style={styles._container}>
      <TouchableOpacity onPress={() => navigation.navigate('Colour')}>
        <Image
          style={styles._image}
          resizeMode="contain"
          source={require('../screens/assets/iColour.jpg')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Amsler')}>
        <Image
          style={styles._image}
          resizeMode="contain"
          source={require('../screens/assets/i-Amsler.jpg')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('iBlur')}>
        <Image
          style={styles._image}
          resizeMode="contain"
          source={require('../screens/assets/iVision.jpg')}
        />
      </TouchableOpacity>
     
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  _image: {
    height: 150,
    width: null,
    margin: 10,
    marginTop: 35,
    borderRadius: 5,
    marginBottom: 5,
  },

  text1: {
    fontSize: 25,
    marginHorizontal: 50,
    top: 50,
  },
  _container: {
    backgroundColor: '#f9b64e',
  },
});
export default TestMenu;
