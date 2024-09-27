import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign for icons
import { useNavigation } from '@react-navigation/native';

const Taches = () => {
  const navigation = useNavigation();
  
  // State for tasks
  const [taches, setTaches] = useState([
    { id: 1, nom: 'Rédiger un rapport', responsable: 'John', duree: '2023-10-27 au 2023-10-25', statut: 'En cours' },
    { id: 2, nom: 'Planifier une réunion', responsable: 'Jane', duree: '2023-10-26 au 2023-10-28', statut: 'Terminé' },
    { id: 3, nom: 'Créer une présentation', responsable: 'Peter', duree: '2023-10-25', statut: 'En retard' },
  ]);

  // State for search term and modal visibility
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Filter tasks based on the search term
  const filteredTaches = taches.filter(tache =>
    tache.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tache.responsable.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Back button with an arrow icon */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('home')}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        {/* Legend button with a bars icon */}
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalButton}>
          <AntDesign name="bars" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Modal for legend */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Légende</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.title}>Liste des tâches</Text>

      <View style={styles.searchBar}>
        {/* Search input field */}
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher une tâche..."
          onChangeText={setSearchTerm} // Update search term on text change
          value={searchTerm}
        />
        {/* Search icon */}
        <TouchableOpacity style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        {/* Map through filtered tasks and display them */}
        {filteredTaches.map(tache => (
          <TouchableOpacity key={tache.id} style={styles.items}>
            <View style={[styles.cercle, styles[tache.statut]]} />
            <View style={styles.itemTextContainer}>
              {/* Task name */}
              <Text style={styles.itemText}>{tache.nom}</Text>
              {/* Responsible person with line break */}
              <Text style={styles.responsableText}>Responsable: {tache.responsable}</Text>
              {/* Task duration */}
              <Text style={styles.dureeText}>Durée: {tache.duree}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    backgroundColor: '#0288d1',
    alignItems: 'center',
    height: 70,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  searchBar: {
    flexDirection: 'row', // Align search input and icon horizontally
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1, // Allow input to take available space
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10, // Space between input and icon
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  items: {
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 30,
    // Increased minHeight to ensure touchable area is larger
    minHeight: 70,
  },
  itemTextContainer: {
    marginLeft: 10, // Space between the circle and the text
    flex: 1, // Allow text container to take available space
  },
  itemText: {
    fontWeight: 'bold',
    color: 'black',
  },
  responsableText: {
    color: 'black',
    marginTop: 5, // Space between name and responsible
  },
  dureeText: {
    color: 'black',
    marginTop: 5, // Space between responsible and duration
  },
  cercle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    marginRight: 10,
  },
  'En cours': {
    backgroundColor: '#FFA500',
  },
  Terminé: {
    backgroundColor: '#4CAF50',
  },
  'En retard': {
    backgroundColor: '#F44336',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 350,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#0288d1',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Taches;