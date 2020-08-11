import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import SearchInput from '@components/SearchInput';
import Categories from '@components/Categories';

import styles from './Home.styles';

export default function Home(): React.ReactElement {
  return (
    <View style={styles.homeContainer}>
      <SafeAreaView>
        <Text style={styles.mainHeader}>Mobile Shop</Text>
        <SearchInput placeHolder="Search Product" />
        <Categories />
      </SafeAreaView>
    </View>
  );
}
