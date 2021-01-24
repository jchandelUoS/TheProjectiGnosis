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

import Button4 from './Components/Button4';


const Pretest = ({navigation}) => {
  

  return (
    <View style={styles.backgroundStyle}>
     
     
     {/* <Text style={styles.textdd}>
        How colour vision is tested:</Text>
        <Text style={styles.textdp}>This test measures your ability to see a pattern based on its colour.
 By testing with different colours we are able to understand which colours you may have difficulty seeing.
  When a person has colour blindness, they are able to see some colours better than others. 
  Depending on on which colours are seen, the type and extent of colour vision deficiency can be estimated
{"\n"}{"\n"}
<Text style={styles.textdd}>Test format:</Text> {"\n"}
  <Text style={styles.textdp}>You will see a series of images composed of dots with varying size and lightness.
 Look for a shape, such as a number or symbol, which is embedded within the dot pattern. 
 Tap or click the button corresponding to which shape you see. 
 On a computer the keyboard or number pad can also be used. </Text>
{"\n"}{"\n"}
<Text style={styles.textdd}>Should I guess?</Text>
{"\n"}
Yes! If you think you can see a shape, but are still not 100% certain of your choice, it is better to take your best guess. 
If you are completely unsure or see nothing, then tap or click the button that says "Unsure" or Nothing". 
If using the keyboard you can also press "Enter" or "Space" to indicate the "Nothing" response.

  </Text>*/}

<Text style={styles.textdd}>
i-Vision Test uses a images from tumbling E chart. The progressively decreasing E’s will point in different directions to measure the eyesight. Please select the direction of from the buttons, you can finish the test at anytime you can not distinguish the direction of E.
</Text>

<Text style={styles.textdp}> 
Please note: If you believe you may have a vision acuity problem please consult an eye care professional.


</Text>
      
      <Button4 navigation={navigation} />
    </View>
  );

};

const styles = StyleSheet.create({
  textdp: {fontSize: 17, marginHorizontal: 5, top: 5, bottom:20,padding:15, left:10,color: 'red'},
  textdd: {fontSize:30, fontWeight:'bold', color: '#f9b64e',top: 10,left:7, right:20},
  backgroundStyle: {
    backgroundColor: '#06127f',
    flex: 1,
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
   
    //justifyContent: "space-between",
    alignItems: 'center',
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

export default Pretest;
