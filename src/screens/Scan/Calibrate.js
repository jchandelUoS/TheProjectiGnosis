import React, {Component, Button, Fragment, useState } from 'react';
import { RNCamera } from 'react-native-camera';
import {Dimensions} from 'react-native'
import styles from './scanStyle'


import {
    TouchableOpacity,
    Text,
    StatusBar,
    ScrollView,
    View,
    ActivityIndicator
} from 'react-native';
import { setEnabled } from 'react-native/Libraries/Performance/Systrace';
import AsyncStorage from '@react-native-community/async-storage';
import { prototype } from 'react-native/Libraries/Image/ImageBackground';


const Calibrate= (props) => {
    const { camera, cameraResult, clickAgain, takePicture, activeCamera, googleVisionDetetion, loading, gotorespage } = props
    const description = ' App will be caliberated for the distance caclulation using Artifical Intelligent algorithms and gather  data relevant to the Test envoirnment'
    const [lefteye,setLE] = useState({});
    let xle=0;
    let xre=0;
    let xdis2 =0;
    let cvalue = 1;
    let A4 = 29.7;
    const screenWidth = Math.round(Dimensions.get('screen').width);
    const screenHeight = Math.round(Dimensions.get('screen').height);
    
    
    
    _savexle = async (xle) => {
        console.log('Save Lefy Eye');
        const kvalue = JSON.stringify(xle);
        await AsyncStorage.setItem('Left_Eye', kvalue);
        console.log('Left Eye Location', kvalue);
      };

      _calibrate = async (xle, xre) => {
        //xdis = (xle - xre)/Pcm;

       // xfactor = xdis/29.7;
        xlre=xle-xre;

        //const pvalue = JSON.stringify(Pcm);
       // await AsyncStorage.setItem('Pcmvalue', pvalue);
        

        const xvalue = JSON.stringify(xlre);
        await AsyncStorage.setItem('XLRE', xvalue);
        console.log ("The x value :", xlre);



        //const kvalue = JSON.stringify(xfactor);
        //await AsyncStorage.setItem('XFactor', kvalue);
        //console.log('Distance Factor', kvalue);


    }



    return (
        <View style={styles.scrollViewStyle}>
            {/* View When app starts, here we will dive for camera and vision things */}
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <Text style={styles.textTitle}>Welcome To React-Native Google Vision Tutorial !</Text>
                {!camera && !cameraResult &&
                    <View style={styles.cardView} >
                        <Text numberOfLines={8} style={styles.descText}>{description}</Text>
                        


                        <TouchableOpacity onPress={activeCamera} style={styles.buttonTouchable}>
                            <Text style={styles.buttonTextStyle}>Click to Calibrate</Text>
                        </TouchableOpacity>
                       
                        

                    </View>
                }
                {!googleVisionDetetion && loading &&
                    <View style={styles.SpinnerStyle}>
                        <ActivityIndicator size={props.size || 'large'} />
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Wait i am fetching data....</Text>
                    </View>
                }
                {/* When Google Vision returns response successfully */}
                {googleVisionDetetion &&
                    <Fragment>
                        <Text style={styles.textTitle1}>Result !</Text>

                        <View style={googleVisionDetetion ? styles.scanCardView : styles.cardView} >
                            <ScrollView>
                            
                                {googleVisionDetetion.faceAnnotations.map((data, index) => {
                                
                                    //let landmarks = googleVisionDetetion.faceAnnotations[0].landmarks;
                                   data.landmarks.map((data,index) =>
                                
                                   {
                                       
                                    

                                    if(data.type=="LEFT_EYE_LEFT_CORNER")
                                    {
                                        
                                        console.log('LEFT_EYE_LEFT_CORNER :', data.position.y)
                                        
                                        xle = data.position.y
                                        _savexle(xle)
                                        
                                       
                                            //Eye();                                    

                                    }
                                    
                                    if(data.type=="RIGHT_EYE_RIGHT_CORNER")
                                    {
                                        
                                        console.log('RIGHT_EYE_RIGHT_CORNER :', data.position.y)
                                     
                                            xre= data.position.y
                                            //xdis2= xre-xle;

                                    }
                                    
                                   }
                                   )
                                   
                                    _calibrate(xle,xre);
                                    console.log('Faces:',data.landmarks);
                                    
                                    /*landmarks.forEach((landmark, i) => {
                                        let lefteye = JSON.stringify(landmark.LEFT_EYE);
                                      console.log(lefteye)
                                      console.log(`  Face #${i + 1}:`);
                                      console.log(`    Joy: ${landmark.LEFT_EYE}`);
                                      
                                    })*/
                                    return (
                                        <View key={index} style={{ borderWidth: 2, borderColor: 'black', margin: 10 }}>
                                            <Text>Calibration Factor : {calibrate} </Text>
                                            
                                            
                                            <Text>Distance: {xdis2}</Text>
                                            
                                            
    
                                         <TouchableOpacity onPress={gotorespage}>
                                            <Text>Go to WelcomePage</Text>
                                            </TouchableOpacity>
      
                                           
                                            
                                        </View>

                                    )
                                })
                                }
                            </ScrollView>
                        </View>

                        <TouchableOpacity onPress={clickAgain} style={styles.buttonTouchable}>
                            <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
                        </TouchableOpacity>

                       

                        
                    </Fragment>
                }

                {/* React Native camera View */}
                {camera &&
                    <View style={styles.container}>
                        <RNCamera
                            ref={ref => {
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
                            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                                console.log(barcodes);
                            }}
                        />
                        {/* Click here for taking picture  */}
                        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => takePicture(this.camera)} style={styles.capture}>
                                <Text style={{ fontSize: 14 }}> SNAP </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </Fragment>
        </View>

    );

}



export default Calibrate;