import {StyleSheet} from 'react-native';
import LightColors from './LightColors';
import Spacing from './Spacing';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: LightColors.background,
  },
  headingContainer: {
    width: Spacing.containerWidth,
  },
});
