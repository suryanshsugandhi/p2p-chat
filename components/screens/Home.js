import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import ActionButton from '../Buttons/ActionButton';
import ButtonContainer from '../Buttons/ButtonContainer';
import CreateRoomModal from '../Modals/CreateRoomModal';
import textStyles from '../Styles/textStyles';
import containerStyles from '../Styles/containerStyles';

export default ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const openCreateRoomModal = () => {
    setModalVisible(true);
  };
  const closeCreateRoomModal = () => {
    setModalVisible(false);
  };

  const Buttons = (
    <>
      <ActionButton buttonText="Create room" onPress={openCreateRoomModal} />
      <ActionButton
        buttonText="Join room"
        onPress={() => navigation.navigate('Chat')}
      />
    </>
  );

  return (
    <View style={containerStyles.container}>
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
      <View style={containerStyles.headingContainer}>
        <Text style={textStyles.heading}>P2P Chat</Text>
        <Text style={textStyles.paragraph}>
          Anonymous chat rooms for absolutely everything.
        </Text>
      </View>
      <ButtonContainer children={Buttons} />
    </View>
  );
};
