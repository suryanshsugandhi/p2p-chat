import React, {useCallback, useEffect, useState} from 'react';
import {} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

const boilerplateChat = [
  {
    _id: 1,
    text: 'Hello developer',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  },
];

export default () => {
  const [messages, setMessages] = useState([]);

  const initializeBoilerplateChat = async () => {
    setMessages(boilerplateChat);
  };

  const initializeChatThread = async () => {
    try {
      await firestore().collection('THREADS').doc('test-room').set({
        messages: boilerplateChat,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const init = async () => {
    await initializeBoilerplateChat();
    await initializeChatThread();
  };

  useEffect(() => {
    init();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{_id: 1}}
      renderAvatarOnTop
      isTyping
      messagesContainerStyle={{
        backgroundColor: '#fff',
      }}
    />
  );
};
