import React from 'react';
import { Text, View } from 'react-native';

import SearchInput from '../../components/SearchInput';

import styles from './Home.styles';

export default function Home(): React.ReactElement {
  return (
    <View style={styles.homeContainer}>
      <Text>Mobile Shop</Text>
      <SearchInput placeHolder="Search Product" />
    </View>
  );
}
