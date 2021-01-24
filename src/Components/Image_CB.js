import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const randomImg = [
  {image: require('../Ishihara/5.jpg')},
  {image: require('../Ishihara/3_.jpg')},
  {image: require('../Ishihara/5_b.jpg')},
  {image: require('../Ishihara/15_.jpg')},
  {image: require('../Ishihara/12_.jpg')},
  {image: require('../Ishihara/26_.jpg')},
  {image: require('../Ishihara/45_.jpg')},
  {image: require('../Ishihara/73_.jpg')},
  {image: require('../Ishihara/74_.jpg')},
  {image: require('../Ishihara/no_Line.jpg')},
  {image: require('../Ishihara/null_1.jpg')},
  {image: require('../Ishihara/null_2.jpg')},
  {image: require('../Ishihara/1Line_1.jpg')},
  {image: require('../Ishihara/1Line_2.jpg')},
  {image: require('../Ishihara/1Line_3.jpg')},
  {image: require('../Ishihara/1Line_4.jpg')},
  {image: require('../Ishihara/1Line_5.jpg')},
  {image: require('../Ishihara/1Line_6.jpg')},
  {image: require('../Ishihara/8_.jpg')},
];

const Image_CB = (props) => {
  const shuffleImg = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const shuffled = shuffleImg(randomImg);
  const img_url = shuffled[0].image;

  return (
    <View style={styles.backgroundStyle}>
      <Image style={styles._image} resizeMode="contain" source={img_url} />
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

export default Image_CB;
