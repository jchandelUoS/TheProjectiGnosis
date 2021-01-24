import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canv';
import ToggleSwitch from 'toggle-switch-react-native';

import {IMAGE_PATH, IMAGE_PATH_AFTER} from './Scan/paths';

const PaintScreen = () => {
  const [imagePath, setImage] = useState('');
  const [rightEye, setEyeState] = useState(true);

  //const fs = require('fs');
  //var fs = require('fs');
  
  const takeTest = () => {
    var myHeaders = new Headers();
    myHeaders.append('api-key', '8390bd47-20a4-40e7-9405-7c63fc4a9034');

    var formdata = new FormData();
    formdata.append('image1', IMAGE_PATH);
    formdata.append('image2', IMAGE_PATH_AFTER);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://api.deepai.org/api/image-similarity', requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => alert(error));
  };
  return (
    <View style={styles.container}>
      <View style={{height: 55, alignItems: 'flex-end'}}>
        <ToggleSwitch
          isOn={rightEye}
          onColor="green"
          offColor="red"
          label={rightEye ? 'Right Eye Test' : 'Left Eye Test'}
          labelStyle={{color: 'blue', fontWeight: 'bold'}}
          size="large"
          onToggle={(isOn) => setEyeState(isOn)}
        />
        <View style={{marginRight: 10, marginBottom: 20}}>
          <Text>Please close your {rightEye ? 'Left' : 'Right'} eye</Text>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <RNSketchCanvas
          containerStyle={{backgroundColor: 'transparent', flex: 1}}
          canvasStyle={{backgroundColor: 'transparent', flex: 1}}
          localSourceImage={{
            filename: '/iModel/src/image/amsler.png',
            directory: '/iModel/src/image/amsler.png',
          }}
          defaultStrokeIndex={0}
          defaultStrokeWidth={5}
          closeComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>Close</Text>
            </View>
          }
          undoComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>Undo</Text>
            </View>
          }
          clearComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>Clear</Text>
            </View>
          }
          eraseComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>Eraser</Text>
            </View>
          }
          strokeComponent={(color) => (
            <View
              style={[{backgroundColor: color}, styles.strokeColorButton]}
            />
          )}
          strokeSelectedComponent={(color, index, changed) => {
            return (
              <View
                style={[
                  {backgroundColor: color, borderWidth: 2},
                  styles.strokeColorButton,
                ]}
              />
            );
          }}
          strokeWidthComponent={(w) => {
            return (
              <View style={styles.strokeWidthButton}>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginHorizontal: 2.5,
                    width: Math.sqrt(w / 3) * 10,
                    height: Math.sqrt(w / 3) * 10,
                    borderRadius: (Math.sqrt(w / 3) * 10) / 2,
                  }}
                />
              </View>
            );
          }}
          saveComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>Complete</Text>
            </View>
          }
          savePreference={() => {
            return {
              folder: 'RNSketchCanvas',
              filename: 'amsler',
              transparent: false,
              imageType: 'jpeg',
            };
          }}
          onSketchSaved={(success, filePath) => {
            setImage(filePath);
            takeTest();
            alert('Result is 50');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39579A',
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 75,
    backgroundColor: '#39579A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
});
export default PaintScreen;
