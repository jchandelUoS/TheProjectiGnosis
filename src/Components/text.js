import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Mytext = () => {
  return (
    <View>
      <Text style={styles.TextStyle}> Search Here</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 20,
    marginHorizontal: 10,
    top: 25,
  },
});

export default Mytext;
