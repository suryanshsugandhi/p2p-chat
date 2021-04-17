import React, {createRef} from 'react';
import {Modal, Text, View} from 'react-native';
import ButtonContainer from '../Buttons/ButtonContainer';
import ActionButton from '../Buttons/ActionButton';
import CancelButton from '../Buttons/CancelButton';
import textStyles from '../Styles/textStyles';
import Spacing from '../Styles/Spacing';
import styles from './Styles';
import {navigationRef} from '../navigation/index';
const joinRoomModalRef = createRef();

export default JoinRoomModal = ({isVisible = false, closeModal}) => {
  const navigateToChatRoom = () => {
    setTimeout(() => {
      navigationRef.current?.navigate('Chat');
    }, 100);
    closeModal();
  };
  const Buttons = (
    <>
      <ActionButton buttonText="Join" onPress={navigateToChatRoom} />
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
