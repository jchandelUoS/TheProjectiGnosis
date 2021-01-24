import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Numkey from '../Components/key';
import KeyBut from '../Components/Keybut';
import KeyBut1 from '../Components/keybut1';

import {TextInput} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';

import Button4 from '../Components/Button4';

const randomImg = [
  {image: require('../Ishihara/5.jpg'), id: 5},
  {image: require('../Ishihara/3_.jpg'), id: 3},
  {image: require('../Ishihara/5_b.jpg'), id: 5},
  {image: require('../Ishihara/15_.jpg'), id: 15},
  {image: require('../Ishihara/12_.jpg'), id: 12},
  {image: require('../Ishihara/26_.jpg'), id: 26},
  {image: require('../Ishihara/45_.jpg'), id: 45},
  {image: require('../Ishihara/73_.jpg'), id: 73},
  {image: require('../Ishihara/74_.jpg'), id: 74},
  {image: require('../Ishihara/no_Line.jpg'), id: '0L'},
  {image: require('../Ishihara/null_1.jpg'), id: ''},
  {image: require('../Ishihara/null_2.jpg'), id: ''},
  {image: require('../Ishihara/1Line_1.jpg'), id: '1L'},
  {image: require('../Ishihara/1Line_2.jpg'), id: '1L'},
  {image: require('../Ishihara/1Line_3.jpg'), id: '1L'},
  {image: require('../Ishihara/1Line_4.jpg'), id: '1L'},
  {image: require('../Ishihara/1Line_5.jpg'), id: '1L'},
  {image: require('../Ishihara/1Line_6.jpg'), id: '1L'},
  {image: require('../Ishihara/8_.jpg'), id: 8},
  {image: require('../../Acuity/Acuity_1.jpg'), id: 1},
  {image: require('../../Acuity/Acuity_2.jpg'), id: 3},
  {image: require('../../Acuity/Acuity_3.jpg'), id: 5},
  {image: require('../../Acuity/Acuity_4.jpg'), id: 15},
  {image: require('../../Acuity/Acuity_5.jpg'), id: 12},
  {image: require('../../Acuity/Acuity_6.jpg'), id: 26},
  {image: require('../../Acuity/Acuity_7.jpg'), id: 45},
  {image: require('../../Acuity/Acuity_8.jpg'), id: 73},
  {image: require('../../Acuity/Acuity_9.jpg'), id: 74},
  {image: require('../../Acuity/Acuity_10.jpg'), id: '0L'},
  {image: require('../../Acuity/Acuity_11.jpg'), id: ''},
  {image: require('../../Acuity/Acuity_12.jpg'), id: ''},
  {image: require('../../Acuity/Acuity_14.jpg'), id: '1L'},
  {image: require('../../Acuity/Acuity_15.jpg'), id: '1L'},
  {image: require('../../Acuity/Acuity_16.jpg'), id: '1L'},
  {image: require('../../Acuity/Acuity_17.jpg'), id: '1L'},
  
];

const shuffleImg = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array[0].image;
};
let i = 0;
const imageUrl = shuffleImg(randomImg);

const iBlur = ({navigation}) => {
  const [digit, setDigit] = useState('');
  const [imageUri, changeImageUri] = useState(imageUrl);

  function changeImage() {
    changeImageUri(randomImg[i].image);
    i = i + 1;
  }

  /*
  function changeImage() {
    changeImageUri(shuffleImg(randomImg));
  }*/

  return (
    <View style={styles._container}>
      <Button4 navigation={navigation} />
      <Image style={styles._image} resizeMode="contain" source={imageUri} />

      <View style={styles.numview}>
      
       
        <KeyBut num={'Left'} arr={randomImg} nextFunct={changeImage} />
        <KeyBut num={'Up'} arr={randomImg} nextFunct={changeImage} />
        <KeyBut num={'Down'} arr={randomImg} nextFunct={changeImage} />
        <KeyBut num={'Right'} arr={randomImg} nextFunct={changeImage} />
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  _container: {
    backgroundColor: '#FFFFFF',
  },

  _image: {
    height: '80%',
    width: null,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 0,
    borderRadius: 5,
  },
  numview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  textin: {
    fontSize: 45,

    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',

    letterSpacing: 5,
  },
});

export default iBlur;
