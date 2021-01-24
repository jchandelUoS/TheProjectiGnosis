import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Numkey from '../Components/key';
import KeyBut from '../Components/Keybut';
import KeyBut1 from '../Components/keybut1';
import TextInp from '../Components/TextInp';
import {TextInput} from 'react-native-gesture-handler';
import EndCBTest from '../Components/EndCBTest';
import AsyncStorage from '@react-native-community/async-storage';

let i = 0;
let j = 0;
let correct = 0;
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
];

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    // saving error
  }
};

const ifAnswerIsCorrect = (answer, correctAnswer) => {
  console.log(answer, 'answer');
  console.log(correctAnswer, 'Correct Answer');
  if ((answer === correctAnswer, 'incorrect answer') || answer == '') {
    correct = correct + 1;
  } else {
    console.log('wrong answer');
  }
};

const shuffleImg = (array) => {
  let x = array.length - 1;
  for (; x > 0; x--) {
    const y = Math.floor(Math.random() * (x + 1));
    const temp = array[x];
    array[x] = array[y];
    array[y] = temp;
  }
  return array[0];
};

const item = shuffleImg(randomImg);
myArray = [];

const ColourVision = ({navigation}) => {
  const [digit, setDigit] = useState('');
  const [imageUri, changeImageUri] = useState(item.image);
  useEffect(() => {
    // Update the document title using the browser API
    _getData();
  });

  _saveName = async (digit) => {
    const jvalue = JSON.stringify(digit);
    await AsyncStorage.setItem('InpNum', jvalue);
    console.log('Digit inputted', jvalue);
  };

  _saveResult = async () => {
    console.log('Test SaveResult');
    const kvalue = JSON.stringify(correct);
    await AsyncStorage.setItem('Result', kvalue);
    console.log('Correct answers', kvalue);
  };

  _getData = async () => {
    try {
      const value = await AsyncStorage.getItem('InpNum');
      console.log(value);
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  function changeImage(answer, item) {
    ifAnswerIsCorrect(answer, item.id);
    //changeImageUri(randomImg[i].image);
    changeImageUri(randomImg[i].image);
    i = i + 1;
    setDigit('');
    _saveName(digit);
    //_saveResult(digit);
  }
  function clean() {
    setDigit('');
  }
  function finito(nav, value) {
    _saveName(digit);
    _saveResult();

    nav.navigate('CB');
  }

  function onDig(value) {
    setDigit(digit * 10 + value);
    _saveName(value);
  }

  return (
    <View style={styles._container}>
      <Image style={styles._image} resizeMode="contain" source={imageUri} />

      <View style={styles.numview}>
        <KeyBut1 num={'Clear'} nextFunct={clean} />
        <TextInp label={digit} />

        <KeyBut1
          num={'Next'}
          arr={randomImg}
          nextFunct={() => changeImage(digit, item)}
          inNum={digit}
        />
      </View>
      <View style={styles.numview}>
        <Numkey num={1} testFunct={onDig} />
        <Numkey num={2} testFunct={onDig} />
        <Numkey num={3} testFunct={onDig} />
        <Numkey num={4} testFunct={onDig} />
        <Numkey num={5} testFunct={onDig} />
      </View>
      <View style={styles.numview}>
        <Numkey num={6} testFunct={onDig} />
        <Numkey num={7} testFunct={onDig} />
        <Numkey num={8} testFunct={onDig} />
        <Numkey num={9} testFunct={onDig} />
        <Numkey num={0} testFunct={onDig} />
      </View>
      <View style={styles.numview}>
        <KeyBut num={'0 Line'} arr={randomImg} nextFunct={changeImage} />
        <KeyBut num={'1 Line'} arr={randomImg} nextFunct={changeImage} />
        <KeyBut num={'2 Lines'} arr={randomImg} nextFunct={changeImage} />
        <EndCBTest
          num={'Finish'}
          nav={navigation}
          value={correct}
          nextFunct={finito}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  _container: {
    backgroundColor: '#FFFFFF',
  },

  _image: {
    height: '60%',
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

export default ColourVision;
