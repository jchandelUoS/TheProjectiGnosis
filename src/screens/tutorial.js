import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tutorial = () => {
  return (
    <View style={styles.SquareStyle}>
      <View style={styles.SquareStyle1} />
      <View style={styles.SquareStyle2} />
    </View>
  );
};

const styles = StyleSheet.create({
  SquareStyle: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  SquareStyle1: {
    backgroundColor: 'red',
    height: 150,
    width: 150,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    top: 20,
  },
  SquareStyle2: {
    backgroundColor: 'yellow',
    height: 150,
    width: 150,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    top: 20,
  },
});

export default Tutorial;
