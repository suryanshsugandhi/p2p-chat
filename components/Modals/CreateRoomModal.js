import React, {createRef} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const {width} = Dimensions.get('window');

const uuid = require('react-native-uuid');
const createRoomModalRef = createRef();

export default CreateRoomModal = ({isVisible = false, closeModal}) => {
  const newRoomCode = uuid.v4();
  return (
    <Modal ref={createRoomModalRef} visible={isVisible} animationType="slide">
      <View style={styles.modalView}>
        <View style={styles.createRoomPopup}>
          <Text style={styles.text}>
            Scan the QR or share the code to invite people to the chat room
          </Text>
          <QRCode value="newRoomCode" size={256} color="#1d3557" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={closeModal}
              style={[styles.button, styles.buttonAction]}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={closeModal}
              style={[styles.button, styles.buttonAction]}>
              <Text style={styles.buttonText}>Share Invite</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={closeModal}
              style={[styles.button, styles.buttonCancel]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#457B9D',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 5,
    borderRadius: 16,
    width: width * 0.65,
  },
  buttonAction: {
    backgroundColor: '#1d3557',
  },
  buttonCancel: {
    backgroundColor: '#e63946',
  },
  buttonContainer: {
    width: '45%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 16,
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
