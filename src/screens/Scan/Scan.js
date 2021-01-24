import React, {Component, Button, Fragment, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {Dimensions} from 'react-native';
import styles from './scanStyle';

import {
  TouchableOpacity,
  Text,
  StatusBar,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import {setEnabled} from 'react-native/Libraries/Performance/Systrace';
import AsyncStorage from '@react-native-community/async-storage';
import {prototype} from 'react-native/Libraries/Image/ImageBackground';

const Scan = (props) => {
  const {
    camera,
    cameraResult,
    clickAgain,
    takePicture,
    activeCamera,
    googleVisionDetetion,
    loading,
    gotorespage,
  } = props;
  const description =
    'Cloud Vision API allows end user to gather data relevant to the Test envoirnment';
  const [lefteye, setLE] = useState({});
  let xle = 0;
  let xre = 0;
  let xdis = 0;
  const screenWidth = Math.round(Dimensions.get('screen').width);
  const screenHeight = Math.round(Dimensions.get('screen').height);

  _savexle = async (xle) => {
    console.log('Save Lefy Eye');
    const kvalue = JSON.stringify(xle);
    await AsyncStorage.setItem('Left_Eye', kvalue);
    console.log('Left Eye Location', kvalue);
  };


  _caldist = async (xle, xre) => {
        
        
    const xfactor = await AsyncStorage.getItem('XFactor');
    console.log('The X Factor', xfactor);

    //const Pcmvalue = await AsyncStorage.getItem('Pcmvalue');
    //console.log('The X Factor', Pcmvalue);
    const XLR = await AsyncStorage.getItem('XLRE');
    console.log('The XLRE Value', XLR);

    xdis2 = ((xle-xre)/Pcmvalue) * Pcmvalue;
    xdis2 = (((xle-xre)/XLR) * (29.7));

    console.log ('The distance from your face to scree is : ' + xdis2)
    console.log ('The distance from your face to screen is : ' + xdis2)
    alert (xdis2);



    



  };



  return (
    <View style={styles.scrollViewStyle}>
      {/* View When app starts, here we will dive for camera and vision things */}
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.textTitle}>
          Welcome To React-Native Google Vision Tutorial !
        </Text>
        {!camera && !cameraResult && (
          <View style={styles.cardView}>
            <Text numberOfLines={8} style={styles.descText}>
              {description}
            </Text>

            <TouchableOpacity
              onPress={activeCamera}
              style={styles.buttonTouchable}>
              <Text style={styles.buttonTextStyle}>Click to Scan !</Text>
            </TouchableOpacity>
          </View>
        )}
        {!googleVisionDetetion && loading && (
          <View style={styles.SpinnerStyle}>
            <ActivityIndicator size={props.size || 'large'} />
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Wait i am fetching data....
            </Text>
          </View>
        )}
        {/* When Google Vision returns response successfully */}
        {googleVisionDetetion && (
          <Fragment>
            <Text style={styles.textTitle1}>Result !</Text>

            <View
              style={
                googleVisionDetetion ? styles.scanCardView : styles.cardView
              }>
              <ScrollView>
                {googleVisionDetetion.faceAnnotations.map((data, index) => {
                  //let landmarks = googleVisionDetetion.faceAnnotations[0].landmarks;
                  data.landmarks.map((data, index) => {
                    if (data.type == 'LEFT_EYE_LEFT_CORNER') {
                      console.log('LEFT_EYE_LEFT_CORNER :', data.position.y);

                      xle = data.position.y;
                      _savexle(xle);

                      //Eye();
                    }

                    if (data.type == 'RIGHT_EYE_RIGHT_CORNER') {
                      console.log('RIGHT_EYE_RIGHT_CORNER :', data.position.y);

                      xre = data.position.y;
                      xdis = xre - xle;
                    }
                  });

                  console.log('Faces:', data.landmarks);

                  /*landmarks.forEach((landmark, i) => {
                                        let lefteye = JSON.stringify(landmark.LEFT_EYE);
                                      console.log(lefteye)
                                      console.log(`  Face #${i + 1}:`);
                                      console.log(`    Joy: ${landmark.LEFT_EYE}`);
                                      
                                    })*/
                  return (
                    <View
                      key={index}
                      style={{
                        borderWidth: 2,
                        borderColor: 'black',
                        margin: 10,
                      }}>
                      <Text>LEFT EYE : {xre} </Text>
                      <Text>RIGHT EYE : {xle}</Text>

                      <Text>Distance: {xdis}</Text>
                      <Text>Screen Width : {screenWidth}</Text>
                      <Text>Screen Height : {screenHeight}</Text>

                      <TouchableOpacity onPress={gotorespage}>
                        <Text>Go to WelcomePage</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>
            </View>

            <TouchableOpacity
              onPress={clickAgain}
              style={styles.buttonTouchable}>
              <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
            </TouchableOpacity>
          </Fragment>
        )}

        {/* React Native camera View */}
        {camera && (
          <View style={styles.container}>
            <RNCamera
              ref={(ref) => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.front}
              flashMode={RNCamera.Constants.FlashMode.off}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              onGoogleVisionBarcodesDetected={({barcodes}) => {
                console.log(barcodes);
              }}
            />
            {/* Click here for taking picture  */}
            <View
              style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => takePicture(this.camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Fragment>
    </View>
  );
};

export default Scan;
