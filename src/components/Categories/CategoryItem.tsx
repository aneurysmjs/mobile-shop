import React from 'react';
import { View, Text } from 'react-native';

import styles from './Categories.styles';

interface Props {
  children?: React.ReactNode;
}

export default function CategoryItem({ children }: Props): React.ReactElement {
  return (
    <View style={styles.categoryItem}>
      <Text>{children}</Text>
    </View>
  );
}
