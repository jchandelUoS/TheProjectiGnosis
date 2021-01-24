import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tutorial = () => {
  return (
    <View style={styles.SquareStyle}>
      <View style={styles.SquareStyle1} />
      <View style={styles.SquareStyle2} />
      <View style={styles.SquareStyle3} />
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
    flex: 1 / 3,
    borderRadius: 5,

    flexDirection: 'row',
  },
  SquareStyle2: {
    backgroundColor: 'yellow',
    flex: 1 / 3,
    borderRadius: 5,
    flexDirection: 'row',
  },
  SquareStyle3: {
    backgroundColor: 'green',
    flex: 1 / 3,
    borderRadius: 5,
    flexDirection: 'row',
  },
});

export default Tutorial;
