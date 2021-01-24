import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const AmslerGrid = ({navigation}) => {
  return (
    <View>
      <Image
        onTouchStart={(e) => {
          console.log('touchMove', e.nativeEvent);
        }}
        style={styles._mainImage}
        source={require('./assets/Amslergrid2.jpg')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  _mainImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 400,
    width: 450,
  },
});

export default AmslerGrid;
