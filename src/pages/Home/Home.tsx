import React from 'react';
import { Text, View } from 'react-native';

import SearchInput from '../../components/SearchInput';

import styles from './Home.styles';

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <SearchInput placeHolder="Search Product" />
    </View>
  );
}