import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

export default CancelButton = ({onPress, buttonText, size = 0.65}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles.buttonCancel]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
