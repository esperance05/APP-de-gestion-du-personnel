import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Connexion = () => {
  const navigation = useNavigation(); // Récupération de l'objet de navigation
  const [password, setPassword] = useState('');
  const [matricule, setMatricule] = useState(''); // Correction du nom de l'état

  const Login = () => {
    // Vérification que tous les champs sont remplis
    if ( password && matricule) {
      Alert.alert('Connexion réussie', `Bienvenue a vous `);
      navigation.navigate('Taches'); // Navigation vers l'écran "taches"
    } else {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <Text style={styles.description}>Veuillez entrer vos informations de connexion ci-dessous.</Text>
      <TextInput
        style={styles.input}
        placeholder="Matricule"
        placeholderTextColor="#aec2cd"
        value={matricule} 
        onChangeText={setMatricule}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#aec2cd"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
     
      <TouchableOpacity style={styles.loginButton} onPress={Login}>
        <Text style={styles.loginButtonText}>Soumettre</Text>
  
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  loginButton: {
    backgroundColor: '#0288d1',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});export default Connexion;