import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Bilan = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [project, setProject] = useState('');
  const [description, setDescription] = useState('Veuillez remplir ici...');
  const [tomorrowTask, setTomorrowTask] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSave = () => {
    console.log('Bilan enregistré:', {
      name,
      date,
      project,
      description,
      tomorrowTask,
    });
    navigation.goBack();
  };

  const handleCancel = () => {
    Alert.alert(
      'Annuler le bilan',
      'Êtes-vous sûr de vouloir annuler le bilan ?',
      [
        {
          text: 'Annuler',
          onPress: () => navigation.navigate('plus'),
          style: 'cancel',
        },
        {
          text: 'Continuer',
          style: 'default',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.container}>
   
      <Text style={styles.title}>Bilan de la Journée</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nom : <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date : <Text style={styles.required}>*</Text></Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
          <Text>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Projet : <Text style={styles.required}>*</Text></Text>
        <TextInput
          style={styles.textInput}
          value={project}
          onChangeText={setProject}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description de l'avancement : <Text style={styles.required}>*</Text></Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
          style={styles.textArea}
          value={description}
          onChangeText={setDescription}
        />
      </View>

   

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleCancel} style={styles.button}>
          <Text style={styles.buttonText}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.buttonText}>Soumettre</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    backgroundColor: '#0288d1',
    padding: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginTop:30,
    marginRight: 16,
  },
  titleheader: {
    marginTop:0,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  },

  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  textArea: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  datePicker: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0288d1',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default Bilan;