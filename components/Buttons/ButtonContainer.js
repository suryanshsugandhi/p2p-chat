import React from 'react';
import {View} from 'react-native';
import styles from './Styles';

export default ButtonContainer = ({children}) => (
  <View style={styles.buttonContainer}>{children}</View>
);
