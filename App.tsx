import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default function App(): React.ReactElement {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
