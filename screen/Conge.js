import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, AntDesign } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importation de useNavigation

const Conge = () => {
  const navigation = useNavigation(); // Initialisation de la navigation
  const [selectedType, setSelectedType] = useState(null);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [matricule, setMatricule] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [motif, setMotif] = useState('');

  const handleTypeChange = (value) => {
    setSelectedType(value);
  };

  const validateForm = () => {
    if (!nom || !prenom || !matricule || !dateDebut || !dateFin || !motif) {
      Alert.alert("Tous les champs doivent être remplis !");
      return false;
    }

    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Format AAAA-MM-JJ
    if (!datePattern.test(dateDebut) || !datePattern.test(dateFin)) {
      Alert.alert("Les dates doivent être au format AAAA-MM-JJ !");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert("Formulaire soumis");
    }
  };

  const handleCancel = () => {
    Alert.alert(
      "Annuler la demande",
      "Êtes-vous sûr de vouloir annuler ?",
      [
        {
          text: "Non",
          style: "cancel"
        },
        {
          text: "Oui", onPress: () => {
            // Retournez à la page précédente
            navigation.goBack();
          }
        }
      ]
    );
  };

  const handleModify = () => {
    setNom('');
    setPrenom('');
    setMatricule('');
    setDateDebut('');
    setDateFin('');
    setMotif('');
    setSelectedType(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       
      <Text style={styles.title}>Demande de Congé/Absence</Text>
      <Text style={styles.question}>Quel demande souhaitez-vous effectuer ?</Text>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={() => handleTypeChange('conge')}>
          <View style={[styles.checkboxBox, selectedType === 'conge' && styles.checked]}>
            {selectedType === 'conge' && <Text style={styles.checkmark}>✔</Text>}
          </View>
          <Text style={styles.label}>Congé</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkbox} onPress={() => handleTypeChange('absence')}>
          <View style={[styles.checkboxBox, selectedType === 'absence' && styles.checked]}>
            {selectedType === 'absence' && <Text style={styles.checkmark}>✔</Text>}
          </View>
          <Text style={styles.label}>Absence</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.inputLabel}>Entrez votre nom: <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        placeholderTextColor="#aec2cd"
        value={nom}
        onChangeText={setNom}
      />

      <Text style={styles.inputLabel}>Entrez votre prénom: <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        placeholderTextColor="#aec2cd"
        value={prenom}
        onChangeText={setPrenom}
      />

      <Text style={styles.inputLabel}>Entrez votre matricule: <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Matricule"
        placeholderTextColor="#aec2cd"
        value={matricule}
        onChangeText={setMatricule}
      />

      <Text style={styles.inputLabel}>Date de début (AAAA-MM-JJ): <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Date de début"
        placeholderTextColor="#aec2cd"
        value={dateDebut}
        onChangeText={setDateDebut}
      />

      <Text style={styles.inputLabel}>Date de fin (AAAA-MM-JJ): <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Date de fin"
        placeholderTextColor="#aec2cd"
        value={dateFin}
        onChangeText={setDateFin}
      />

      <Text style={styles.inputLabel}>Entrez le motif: <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.textArea}
        placeholder="Motif"
        value={motif}
        onChangeText={setMotif}
        multiline
        numberOfLines={4}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Annuler</Text>
        </TouchableOpacity>

      

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles pour le composant
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header:{
    justifycontent:'space-between',
    flexDirection : "row",
    marginTop :30,
     alignItems:'center'
    
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'center',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  checkboxBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#0288d1',
  },
  checkmark: {
    color: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: "#000",
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 10,
    height: 100,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#0288d1',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modifyButton: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
  },
  modifyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  required: {
    color: 'red',
  },
});

export default Conge;