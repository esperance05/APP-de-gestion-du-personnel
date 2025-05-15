import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Details = () => {
  const route = useRoute();
  const { task } = route.params || {};

  // État pour les étapes
  const [stepCount, setStepCount] = useState(1);
  const [steps, setSteps] = useState([{ description: '', startDate: '', endDate: '' }]);
  
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    console.log('Tâche planifiée :', { task, steps });
    // Ajoutez votre logique de sauvegarde ici
  };

  // Fonction pour ajouter une étape
  const handleAddStep = () => {
    setSteps([...steps, { description: '', startDate: '', endDate: '' }]);
    setStepCount(stepCount + 1);
  };

  // Fonction pour mettre à jour la description d'une étape
  const handleStepDescriptionChange = (index, text) => {
    const newSteps = [...steps];
    newSteps[index].description = text;
    setSteps(newSteps);
  };

  // Fonction pour mettre à jour les dates
  const handleDateChange = (index, type, text) => {
    const newSteps = [...steps];
    newSteps[index][type] = text;
    setSteps(newSteps);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{task ? task.nom : 'plannifier sa tache '}</Text>
      <Text style={styles.text}> en combien d'étapes souhaitez vous organiser votre tache ? </Text>
      
      {/* Champ pour le nombre d'étapes */}
      <TextInput
        style={styles.input}
        placeholder="Nombre d'étapes"
        keyboardType="numeric"
        value={stepCount.toString()}
        onChangeText={(text) => {
          const count = parseInt(text) || 0;
          setStepCount(count);
          setSteps(Array.from({ length: count }, (_, i) => ({
            description: '',
            startDate: '',
            endDate: '',
          })));
        }}
      />

      {/* Affichage des étapes */}
      {steps.map((step, index) => (
        
        <View key={index} style={styles.stepContainer}>
          <Text style={styles.label}>Description :</Text>
          <TextInput
            style={styles.input}
            placeholder={`Description de l'étape ${index + 1}`}
            value={step.description}
            onChangeText={(text) => handleStepDescriptionChange(index, text)}
          />
          <Text style={styles.label}>Date de début :</Text>
          <TextInput
            style={styles.input}
            placeholder="JJ-MM-AAAA"
            value={step.startDate}
            onChangeText={(text) => handleDateChange(index, 'startDate', text)}
          />

          <Text style={styles.label}>Date de fin :</Text>
          <TextInput
            style={styles.input}
            placeholder="JJ-MM-AAAA"
            value={step.endDate}
            onChangeText={(text) => handleDateChange(index, 'endDate', text)}
          />
        </View>
      ))}

      {/* Bouton pour ajouter une étape */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddStep}>
        <Text style={styles.addButtonText}>Ajouter une étape</Text>
      </TouchableOpacity>

      {/* Bouton de soumission */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enregistrer la planification</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0ffff',
    textAlign:'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
    bottom:10,
    top : 5,
    },
  text:{
    textAlign:'center',
    bottom:13,
    top : 5,
  
    
  },
  label: {
    marginTop: 19,
    fontSize: 15,
    color: '#0288d1',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  stepContainer: {
    marginBottom: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10, 
    backgroundColor:'#f5f5f5'
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: '#0288d1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Details;