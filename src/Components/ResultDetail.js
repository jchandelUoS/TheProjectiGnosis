import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
//import ResultsList from './ResultsList';

const ResultDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text style={styles.name_rest}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  name_rest: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ResultDetail;
