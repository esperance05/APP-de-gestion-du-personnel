import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const Message = ({ message }) => (
  <View style={styles.messageContainer}>
    <Text>{message.text}</Text>
  </View>
);

const Discussion = () => {
  const [messages, setMessages] = useState([
    { text: 'Bonjour!', isUser: false },
    { text: 'Salut!', isUser: true },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList // Suppression de inverted
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={(item, index) => index.toString()}
        // inverted={false} // Ceci est implicite si on supprime l'attribut
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Entrez votre message..."
          style={styles.input}
        />
        <Button title="Envoyer" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:' #9fd4f7',
  },
  messageContainer: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff', // Couleur de fond des messages
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor:'#fff',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
});

export default Discussion;