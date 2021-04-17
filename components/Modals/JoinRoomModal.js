import React, {createRef} from 'react';
import {Modal, Text, View} from 'react-native';
import ButtonContainer from '../Buttons/ButtonContainer';
import ActionButton from '../Buttons/ActionButton';
import CancelButton from '../Buttons/CancelButton';
import textStyles from '../Styles/textStyles';
import Spacing from '../Styles/Spacing';
import styles from './Styles';
const joinRoomModalRef = createRef();

export default JoinRoomModal = ({isVisible = false, closeModal}) => {
  const Buttons = (
    <>
      <ActionButton buttonText="Join" onPress={closeModal} />
      <CancelButton buttonText="Cancel" onPress={closeModal} />
    </>
  );

  return (
    <Modal ref={joinRoomModalRef} visible={isVisible} animationType="slide">
      <View style={styles.modalView}>
        <View style={styles.createRoomPopup}>
          <View style={{marginVertical: Spacing.l}}>
            <Text style={textStyles.paragraphLight}>
              Scan a QR code or join by room code
            </Text>
          </View>
          <ButtonContainer children={Buttons} />
        </View>
      </View>
    </Modal>
  );
};
