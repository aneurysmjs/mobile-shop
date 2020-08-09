import React from 'react';
import { TextInput } from 'react-native';

import styles from './SearchInput.styles';

interface Props {
  placeHolder?: string;
}

export default function SearchInput({ placeHolder }: Props): React.ReactElement {
  const [value, onChangeText] = React.useState(placeHolder ?? '');

  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={(text): void => onChangeText(text)}
    />
  );
}
