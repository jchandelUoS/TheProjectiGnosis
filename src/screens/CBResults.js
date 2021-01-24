import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Name from '../Components/Name';
import Button2 from '../Components/Button2';
import AsyncStorage from '@react-native-community/async-storage';

const CBResults = ({navigation}) => {
  const [value, changeValue] = useState('');
  useEffect(() => {
    // Update the document title using the browser API

    _getData();
  });

  _getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Result');

      console.log('Get Value', value);
      changeValue(value);
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.textdp}> Your Results {value}</Text>

      <Button2 navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  textdp: {fontSize: 30, marginHorizontal: 5, margin: 15, color: '#f9b64e'},

  backgroundStyle: {
    backgroundColor: '#06127f',
  },
  inputStyle: {
    borderColor: 'black',
    fontSize: 17,
    marginTop: 30,
    backgroundColor: '#f1d6ac',
  },
  _image: {
    height: 333,
    width: null,

    marginTop: 15,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default CBResults;
