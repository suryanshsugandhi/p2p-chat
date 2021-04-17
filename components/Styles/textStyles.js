import {StyleSheet} from 'react-native';
import LightColors from './LightColors';
import Spacing from './Spacing';

export default StyleSheet.create({
  heading: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  paragraphLight: {
    fontSize: Spacing.m,
    lineHeight: Spacing.l,
    color: LightColors.lightText,
    textAlign: 'center',
  },
});
