import React from 'react';
import {View, Text} from 'react-native';

const testText = (props) => {
  return (
    <View>
      <Text>{props.label}</Text>
    </View>
  );
};

export default testText;
