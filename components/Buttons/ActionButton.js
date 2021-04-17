import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

export default ActionButton = ({onPress, buttonText, size = 0.65}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
