import React, {useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const randomImg = [
  {image: require('../Ishihara/5.jpg')},
  {image: require('../Ishihara/3_.jpg')},
  {image: require('../Ishihara/5_b.jpg')},
  {image: require('../Ishihara/15_.jpg')},
  {image: require('../Ishihara/16_.jpg')},
  {image: require('../Ishihara/26_.jpg')},
];

const genRand = () => {
  const min = 1;
  const max = 5;
  const rand = min + Math.random() * (max - min);

  return Math.round(rand);
};
const shuffleImg =(array) => {

  const currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  


}

const ColourVision = () => {
  console.log(genRand());
  return (
    <View style={styles._container}>
      <Image
        style={styles._image}
        resizeMode="contain"
        source={randomImg[genRand()].image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  _container: {
    backgroundColor: '#FFFFFF',
  },

  _image: {
    height: 400,
    width: null,
    margin: 10,
    marginTop: 35,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default ColourVision;
