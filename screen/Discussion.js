import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Composant pour afficher chaque message
const Message = ({ message }) => (
  <View style={styles.messageWrapper}>
    {/* Date au-dessus du message */}
    <Text style={styles.date}>{message.date}</Text>
    
    {/* Conteneur pour le texte du message */}
    <View style={styles.messageContainer}>
      {/* Texte du message */}
      <Text>{message.text}</Text>
      
      {/* Conteneur pour l'icône de coche et l'heure */}
      <View style={styles.iconContainer}>
        {/* Icône de coche */}
        <Icon name="checkmark-done" size={16} color="#0288d1" style={styles.icon} />
        
        {/* Heure en dessous de l'icône */}
        <Text style={styles.time}>{message.time}</Text>
      </View>
    </View>
  </View>
);

const Discussion = () => {
  // État pour stocker les messages
  const [messages, setMessages] = useState([
    { text: 'Bonjour!', isUser: false, date: '01/01/2024', time: '12:00' },
    { text: 'Salut!', isUser: true, date: '01/01/2024', time: '12:01' },
  ]);
  
  // État pour le nouveau message
  const [newMessage, setNewMessage] = useState('');

  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (newMessage.trim() !== '') { // Vérifie si le message n'est pas vide
      const currentTime = new Date(); // Obtient l'heure actuelle
      // Formate la date
      const date = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`;
      // Formate l'heure
      const time = `${currentTime.getHours()}:${currentTime.getMinutes().toString().padStart(2, '0')}`;
      
      // Ajoute le nouveau message à la liste
      setMessages([...messages, { text: newMessage, isUser: true, date, time }]);
      setNewMessage(''); // Réinitialise le champ de saisie
    }
  };

  return (
    <View style={styles.container}>
      {/* Liste des messages */}
      <FlatList 
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={(item, index) => index.toString()}
        inverted={false} // Permet de garder l'ordre de discussion
      />
      
      {/* Conteneur pour l'entrée de texte */}
      <View style={styles.inputContainer}>
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Entrez votre message..."
          style={styles.input}
        />
        
        {/* Bouton pour envoyer le message */}
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9cce3', // Couleur de fond de l'application
  },
  messageWrapper: {
    margin: 5, // Espace autour du message complet
  },
  date: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 10, // Espace à gauche pour la date
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff', // Couleur de fond des messages
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Alignement au centre
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Justification à droite pour l'icône et l'heure
  },
  icon: {
    marginLeft: 10, // Espace entre le texte du message et l'icône
  },
  time: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 5, // Espace entre l'icône et l'heure
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 12,
    padding: 5,
  },
  button: {
    backgroundColor: '#0288d1',
    borderRadius: 12, // Bord légèrement arrondi
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Discussion;