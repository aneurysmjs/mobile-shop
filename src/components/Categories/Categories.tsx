import React from 'react';
import { View } from 'react-native';

import CategoryItem from './CategoryItem';

import styles from './Categories.styles';

const categories = [
  {
    id: 0,
    name: 'Красота',
  },
  {
    id: 1,
    name: 'Электроника',
  },
  {
    id: 2,
    name: 'Бытовая техника',
  },
  {
    id: 3,
    name: 'Компьютеры',
  },
  {
    id: 4,
    name: 'Ремонт',
  },
  {
    id: 5,
    name: 'Дом',
  },
];

export default function Categories(): React.ReactElement {
  return (
    <View style={styles.categoriesContainer}>
      {categories.map((cat) => (
        <CategoryItem key={cat.id}>{cat.name}</CategoryItem>
      ))}
    </View>
  );
}
