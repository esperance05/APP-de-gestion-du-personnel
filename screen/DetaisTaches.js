import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetailsTaches = () => {
  const route = useRoute();
  const task = route.params?.task;

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.noTask}>Aucune tâche sélectionnée</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.nom}</Text>
      <Text style={styles.subtitle}>Responsable : {task.responsable || 'Non spécifié'}</Text>
      <Text style={styles.subtitle}>Durée : {task.duree || 'Non spécifié'}</Text>
      <Text style={styles.subtitle}>Date de début : {task.startDate || 'Non spécifié'}</Text>
      <Text style={styles.subtitle}>Date de fin : {task.endDate || 'Non spécifié'}</Text>
      <Text style={styles.description}>{task.description || 'Aucune description'}</Text>
      {/* Ajouter d'autres détails de la tâche ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  noTask: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#888',
  },
});

export default DetailsTaches;