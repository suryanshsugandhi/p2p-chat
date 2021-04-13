import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CreateRoomModal from '../Modals/CreateRoomModal';

const {width} = Dimensions.get('window');

export default ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const openCreateRoomModal = () => {
    setModalVisible(true);
  };
  const closeCreateRoomModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <CreateRoomModal
        isVisible={modalVisible}
        closeModal={closeCreateRoomModal}
      />
      <Image
        source={{
          uri:
            'https://image.freepik.com/free-vector/connected-concept-illustration_114360-482.jpg',
        }}
        style={{
          height: 400,
          width: '100%',
        }}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>P2P Chat</Text>
        <Text style={styles.paragraph}>
          Anonymous chat rooms for absolutely everything.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={openCreateRoomModal} style={styles.button}>
          <Text style={styles.buttonText}>Create room</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Chat')}
          style={styles.button}>
          <Text style={styles.buttonText}>Join room</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    width: '65%',
  },
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#1d3557',
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
});
