import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

let cnt = [
  {name: 'Argentina', code: 60010},
  {name: 'Brasil', code: 50010},
  {name: 'Paraguay', code: 51010},
  {name: 'Uruagauy', code: 70010},
  {name: 'Chile', code: 710010},
  {name: 'Mexico', code: 72010},
  {name: 'Panama', code: 73010},
  {name: 'Romania', code: 80010},
  {name: 'Slovenia', code: 81010},
  {name: 'Croatia', code: 82010},
  {name: 'Lithuania', code: 83010},
  {name: 'Belarus', code: 90010},
  {name: 'Latvia', code: 91010},
  {name: 'Hungry', code: 92010},
  {name: 'Poland', code: 93010},
  {name: 'Greece', code: 520010},
  {name: 'Italy', code: 53010},
  {name: 'Moldova', code: 56010},
  {name: 'Turkey', code: 21010},
  {name: 'Sudan', code: 21010},
  {name: 'Somalia', code: 23010},
  {name: 'Nigeria', code: 24010},
  {name: 'Ethiopia', code: 25010},
  {name: '*******United Kingdom******', code: 55510},
];

const cntlst = () => {
  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i].code < 50000 && cnt[i].code != 55510) {
      console.log('Not so lovely Countries', cnt[i].name);
    }
    if (cnt[i].code === 55510) {
      console.log('Best Country in the world is ', cnt[i].name);
    }
    if (cnt[i].code > 55510 && cnt[i].code != 55510) {
      console.log('Lovely Countries', cnt[i].name);
    }
  }
};
const isObject = (obj) => {
  return !!obj && obj.constructor === Object;
};

const checkType = (param) => {
  if (typeof param === 'number') {
    console.log('Its a number');
  }

  if (typeof param === 'string') {
    console.log('Its a String');
  }
  if (Array.isArray(param)) {
    console.log('Its an Array');
  }
  if (isObject(param)) {
    console.log('Its an Object');
  }
};

const Pract = ({navigation}) => {
  //cntlst();
  let Hello = {name: 'Hungry', code: 92010};
  checkType(Hello);
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

export default Pract;
