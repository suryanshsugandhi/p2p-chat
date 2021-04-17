import {StyleSheet} from 'react-native';
import LightColors from '../Styles/LightColors';
import Spacing from '../Styles/Spacing';

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.l,
  },
  createRoomPopup: {
    margin: Spacing.m,
    backgroundColor: LightColors.background,
    borderRadius: Spacing.l,
    padding: Spacing.l,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: Spacing.xs,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default styles;
