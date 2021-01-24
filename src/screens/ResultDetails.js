
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

const ResultsDetail= ({navigation}) => {
  

  return (
  <View style={styles.backgroundStyle}>
      
      <Text style={styles.textdt}>i-Amsler test score</Text>
      <Image
        style={styles._image}
        source={require('../screens/assets/amsler-grid.gif')}
      


      />
      

      <Text style={styles.textdc}>Your i-Amsler score is :</Text>
      <Text style={styles.textdd}>
      64 {'\n'}
</Text>
      
      <Text style={styles.textdc}>

Please note: If your i-Amsler score has changed more than 5 points, please consult an eye care professional  immediately. {'\n'}

</Text>


      {/* 
      <Text style={styles.textdd}>Your Results</Text>
      <Text style={styles.textdd}>Your Answers =   7   </Text>
      <Text style={styles.textdd}>Correct Answers =    5   </Text>
      <Text style={styles.textdt}>Result : =    4/17   </Text>
      <Text style={styles.textdt}>Possible Colour Deficiency : </Text>
      <Text style={styles.textdt}>- red-green</Text>
      <Text style={styles.textdt}>- Dichromacy</Text>

  <Button2 navigation={navigation} /> */}







    </View> 
  );
};

const styles = StyleSheet.create({
  textdp: {fontSize: 20, marginHorizontal: 5, top:0, marginLeft:20, color: '#f9b64e'},
  textdc: {fontSize: 25, marginLeft:20, color: 'red', fontWeight:'bold',top:10,},
  textdd: {fontSize: 100, marginLeft:120, color: 'red', fontWeight:'bold',top:70},
  textdt: {fontSize: 35, marginLeft:40, top:5,color: '#f9b64e',fontWeight:'bold'},

  backgroundStyle: {
    backgroundColor: '#06127f',
  },
  inputStyle: {
    borderColor: 'black',
    fontSize: 17,
    marginTop: 40,
    backgroundColor: '#f1d6ac',
    flex:1,
  },
  _image: {
    
   height:100,
   position: 'relative',
   left:0,
   right: 0,

    marginTop:20,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default ResultsDetail;
