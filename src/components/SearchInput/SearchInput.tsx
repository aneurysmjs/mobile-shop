import React from 'react';
import { TextInput } from 'react-native';

import styles from './SearchInput.styles';

interface Props {
  placeHolder?: string
}

export default function SearchInput({
  placeHolder,
}: Props) {
  const [value, onChangeText] = React.useState(placeHolder ?? '');

  return (
    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}
