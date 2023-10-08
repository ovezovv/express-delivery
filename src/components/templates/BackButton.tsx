import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavArrowLeft} from 'iconoir-react-native';
import styles from 'src/styles';

interface Props {
  onPress: () => void;
}

const BackButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backButton}>
      <NavArrowLeft height={24} width={24} color="#000000" />
    </TouchableOpacity>
  );
};

export default BackButton;
