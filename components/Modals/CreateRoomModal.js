import React, {createRef} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Share from 'react-native-share';
import randomUID from '../providers/util/RandomUID';
import ButtonContainer from '../Buttons/ButtonContainer';
import ActionButton from '../Buttons/ActionButton';
import CancelButton from '../Buttons/CancelButton';
import textStyles from '../Styles/textStyles';
import Spacing from '../Styles/Spacing';

const createRoomModalRef = createRef();

export default CreateRoomModal = ({isVisible = false, closeModal}) => {
  const newRoomCode = randomUID();
  console.log(newRoomCode);

  const shareRoomCode = () => {
    Share.open({
      failOnCancel: false,
      message: newRoomCode,
      showAppsToView: false,
      title: 'Share chat code',
      method: Share.Social,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });
    return;
  };

  const Buttons = (
    <>
      <ActionButton buttonText="Create" onPress={closeModal} />
      <ActionButton buttonText="Share invite" onPress={shareRoomCode} />
      <CancelButton buttonText="Cancel" onPress={closeModal} />
    </>
  );

  return (
    <Modal ref={createRoomModalRef} visible={isVisible} animationType="slide">
      <View style={styles.modalView}>
        <View style={styles.createRoomPopup}>
          <View style={{marginVertical: Spacing.l}}>
            <Text style={textStyles.paragraphLight}>
              Scan the QR or share the code to invite people to the chat room
            </Text>
          </View>
          <QRCode value={newRoomCode} size={256} color="#1d3557" />
          <ButtonContainer children={Buttons} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#111',
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 16,
    textAlign: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  createRoomPopup: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
