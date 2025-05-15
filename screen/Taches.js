import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Taches = () => {
  const navigation = useNavigation();

  // État pour les tâches
  const [taches, setTaches] = useState([
    { id: 1, nom: 'Rédiger un rapport', responsable: 'John', duree: '2023-10-27 au 2023-10-25', statut: 'En cours' },
    { id: 2, nom: 'Planifier une réunion', responsable: 'Jane', duree: '2023-10-26 au 2023-10-28', statut: 'Terminé' },
    { id: 3, nom: 'Créer une présentation', responsable: 'Peter', duree: '2023-10-25', statut: 'En retard' },
    { id: 4, nom: 'Créer une présentation', responsable: 'Peter', duree: '2023-10-25', statut: 'a moitié' },
    { id: 5, nom: 'Rédiger un rapport', responsable: 'John', duree: '2023-10-27 au 2023-10-25', statut: 'En cours' },
    { id: 6, nom: 'Planifier une réunion', responsable: 'Jane', duree: '2023-10-26 au 2023-10-28', statut: 'Terminé' },
    { id: 7, nom: 'Créer une présentation', responsable: 'Peter', duree: '2023-10-25', statut: 'En retard' },
    { id: 8, nom: 'Créer une présentation', responsable: 'Peter', duree: '2023-10-25', statut: 'a moitié' },
  ]);

  // État pour le terme de recherche et la visibilité du modal
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // État pour la planification de la tâche
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  // Filtrer les tâches en fonction du terme de recherche
  const filteredTaches = taches.filter(tache =>
    tache.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tache.responsable.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fonction appelée lors du clic sur une tâche
  const handleTaskPress = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  // Fonction pour sauvegarder les détails de la tâche
  const handleSave = () => {
    // Gérer la logique de sauvegarde ici (par exemple, mettre à jour la tâche avec les nouveaux détails)
    console.log('Tâche planifiée :', { startDate, endDate, description });
    // Réinitialiser les champs du modal
    setStartDate('');
    setEndDate('');
    setDescription('');
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('home')}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalButton}>
          <AntDesign name="bars" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Modal pour la légende */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Légende</Text>
            {/* Éléments de la légende */}
            <View style={styles.legendItem}>
              <View style={[styles.cercle, styles['En cours']]} />
              <Text style={styles.legendText}>Tâche en cours d'exécution</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.cercle, styles['Terminé']]} />
              <Text style={styles.legendText}>Tâche exécutée dans le délai</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.cercle, styles['En retard']]} />
              <Text style={styles.legendText}>Date d'échéance atteinte</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.cercle, styles['a moitié']]} />
              <Text style={styles.legendText}>Tâche exécutée à moitié</Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

  

      <Text style={styles.title}>Liste des tâches</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher une tâche..."
          onChangeText={setSearchTerm}
          value={searchTerm}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
      {filteredTaches.map(tache => (
        
        
        <TouchableOpacity 
          key={tache.id} 
          style={styles.items} 
          onPress={()=> navigation.navigate('DetailsTaches')}
        >
          <View style={[styles.cercle, styles[tache.statut]]} />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemText}>{tache.nom}</Text>
            <Text style={styles.responsableText}>Responsable : {tache.responsable}</Text>
            <Text style={styles.dureeText}>Durée : {tache.duree}</Text>
          </View>
        </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// Styles pour le composant
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  main: {
    flex: 1,
    backgroundColor: 'gray',
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
    minHeight: 70,
  },
  itemTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  itemText: {
    fontWeight: 'bold',
    color: 'black',
  },
  responsableText: {
    color: 'black',
    marginTop: 5,
  },
  dureeText: {
    color: 'black',
    marginTop: 5,
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
  'a moitié': {
    backgroundColor: '#0288d1',
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
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#0288d1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Taches; // Exportation du composant Taches