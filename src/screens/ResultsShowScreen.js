import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import yelp from '../api/yelp';
import {FlatList} from 'react-native-gesture-handler';
const ResultsShowScreen = ({navigation}) => {
  const [restaurants, setRestaurants] = useState(null);
  const id = navigation.getParam('id');
  console.log(restaurants);

  const getRestaurants = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurants(response.data);
  };
  useEffect(() => {
    getRestaurants(id);
  }, []);

  if (!restaurants) {
    return null;
  }

  return (
    <View style={styles._container}>
      <Text> {restaurants.name}</Text>
      <FlatList
        data={restaurants.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginBottom: 5,
    alignSelf: 'center',
  },
  _container: {
    backgroundColor: '#f9b64e',
  },
});

export default ResultsShowScreen;
