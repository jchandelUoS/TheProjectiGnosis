import React, {useState} from 'react';
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
import PaintScreen from './PaintScreen';

const WelcomeScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [DeviceId, setDeviceId] = useState('');

  function onNameEnter(value) {
    setName(value);
  }

  return (
    <View style={styles.backgroundStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('ResultsD')}>
        <View style={{padding: 5}}>
          <Text style={{color: '#f9b64e', fontSize: 25}}>_</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={{color: '#f9b64e', marginLeft: 10, marginTop: 20, fontSize: 25}}>
        Hello {name}
      </Text>

      

      <TouchableOpacity onPress={() => navigation.navigate('ImageCalib')}>
        <View style={{padding: 5, borderColor: 'green'}}>
          <Text style={{color: '#f9b64e', fontSize: 25}}>Calibrate</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ScanD')}>
        <View style={{padding: 5}}>
          <Text style={{color: '#f9b64e', fontSize: 25}}>
            Register Environment
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CB')}>
        <View style={{padding: 5}}>
          <Text style={{color: '#f9b64e', fontSize: 25}}>Result Page</Text>
        </View>
      </TouchableOpacity>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Please enter your Name here"
        value={name}
        onChangeText={(text) => onNameEnter(text)}
      />

      <Image
        style={styles._image}
        source={require('../screens/assets/home.jpg')}
      />
      <Button2 navigation={navigation} />
    </View>
  );

  /** 
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.textdp}>Hello {name},</Text>

      <TouchableOpacity onPress={() => navigation.navigate('ImageCalib')}>
        <Text style={styles.textdp}>Calibrate</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ScanD')}>
        <Text style={styles.textdp}>Register Environment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CB')}>
        <Text style={styles.textdp}>Results Page</Text>
      </TouchableOpacity>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Please enter your Name here"
        value={name}
        onChangeText={(text) => onNameEnter(text)}
      />
<TouchableOpacity onPress={() => navigation.navigate('Paint')}>
        <View style={{padding: 5, borderColor: 'green'}}>
          <Text style={{color: '#f9b64e', fontSize: 25}}>Amsler</Text>
        </View>
      </TouchableOpacity>
      <Image
        style={styles._image}
        source={require('../screens/assets/home.jpg')}
      />
      <Button2 navigation={navigation} />
    </View>
  );

  **/
};

const styles = StyleSheet.create({
  textdp: {fontSize: 20, marginHorizontal: 5, top: 5, bottom:20, color: '#f9b64e'},
  textdd: {fontSize: 30, color: '#f9b64e'},
  backgroundStyle: {
    backgroundColor: '#06127f',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  inputStyle: {
    borderColor: 'black',
    fontSize: 17,
    marginTop: 10,
    backgroundColor: '#f1d6ac',
  },
  _image: {
    height: 250,
    marginLeft: 10,
    marginTop: 7,
    borderRadius: 2,
    marginBottom: 2,
  },
});

export default WelcomeScreen;
