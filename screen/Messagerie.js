import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

const Messagerie = ({ navigation }) => {
  // État pour stocker la requête de recherche
  const [searchQuery, setSearchQuery] = useState('');

  // Données des utilisateurs avec des identifiants basés sur les premières lettres des noms
  const users = [
    { id: 'e', name: 'esperance', color: 'red', message: 'bonjour, besoin de quelques infos stp.' },
    { id: 'y', name: 'yonkeu', color: 'yellow', message: 'voici les étapes à suivre ...' },
    { id: 't', name: 'tchamba', color: 'orange', message: 'non, voici sur quoi vous devez vous attarder' },
    { id: 't2', name: 'TySp', color: 'red', message: 'soyez plus explicite' },
    { id: 'e2', name: 'esperance', color: 'red', message: 'bonjour, besoin de quelques infos stp.' },
    { id: 'y2', name: 'yonkeu', color: 'yellow', message: 'voici les étapes à suivre ...' },
    { id: 't3', name: 'tchamba', color: 'orange', message: 'non, voici sur quoi vous devez vous attarder' },
    { id: 't4', name: 'TySp', color: 'red', message: 'soyez plus explicite' },
  ];

  // Fonction appelée lorsque la requête de recherche change
  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  // Filtrage des utilisateurs en fonction de la requête de recherche
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* En-tête de l'application */}
      <View style={styles.header}>
        {/* Bouton de retour */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('home')}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        {/* Titre de l'application */}
        <Text style={styles.title}>Messagerie</Text>
      </View>

      {/* Zone de recherche */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher"
          onChangeText={handleSearchChange}
          value={searchQuery}
        />
        {/* Icône de recherche */}
        <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
      </View>

      {/* Défilement vertical de la liste des utilisateurs */}
      <ScrollView style={styles.userList}>
        {filteredUsers.map((user) => (
          <TouchableOpacity
            key={user.id} // Utilisation des premières lettres comme identifiant
            style={styles.userItem}
            onPress={() => navigation.navigate('Discussion')}
          >
            <View style={styles.userAvatar}>
              <Text style={styles.userAvatarText}>{user.id.toUpperCase()}</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userMessage}>{user.message.substring(0, 30)}...</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9cce3',
  },
  header: {
    backgroundColor: '#0288d1',
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderColor: '#000',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginRight: 10,
  },
  searchIcon: {
    color: '#000',
  },
  userList: {
    padding: 16,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2874a6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userAvatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userMessage: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Messagerie;