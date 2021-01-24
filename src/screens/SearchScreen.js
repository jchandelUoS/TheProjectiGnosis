import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';

import useResults from '../hooks/useResults';
import ResultsLists from '../Components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const [searchApi, restaurants, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return restaurants.filter((restaurants) => {
      return restaurants.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text style={styles.textErr}>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsLists
          restaurants={filterResultsByPrice('£')}
          title="Cost Effective"
        />
        <ResultsLists
          restaurants={filterResultsByPrice('££')}
          title="Bit Pricier"
        />
        <ResultsLists
          restaurants={filterResultsByPrice('£££')}
          title="Big Spender"
        />

        <ResultsLists
          restaurants={filterResultsByPrice('££££')}
          title="Really Posh"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textdp: {},
  textErr: {},
});

export default SearchScreen;
