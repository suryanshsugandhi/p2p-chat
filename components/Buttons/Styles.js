import {StyleSheet, Dimensions} from 'react-native';
import LightColors from '../Styles/LightColors';
import Spacing from '../Styles/Spacing';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonText: {
    color: LightColors.buttonText,
    fontSize: Spacing.m,
    textAlign: 'center',
  },
  button: {
    backgroundColor: LightColors.defaultButtonBackground,
    paddingHorizontal: Spacing.m,
    paddingVertical: Spacing.s,
    marginVertical: Spacing.xs,
    borderRadius: Spacing.m,
    width: width * Spacing.containerWidthDec,
  },
  buttonCancel: {
    backgroundColor: LightColors.cancelButtonBackground,
  },
  buttonContainer: {
    width: Spacing.containerInWidth,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: Spacing.l,
  },
});

export default styles;
