import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Connexion from '../Connexion'; 

// Fonction pour rendre le composant avec la navigation
const renderWithNavigation = (component) => {
  return render(
    <NavigationContainer>
      {component}
    </NavigationContainer>
  );
};

// Mock de l'alerte pour éviter les vrais pop-ups pendant les tests
jest.mock('react-native', () => {
  const ActualReactNative = jest.requireActual('react-native');
  return {
    ...ActualReactNative,
    Alert: {
      alert: jest.fn(), // Remplace l'alerte par une fonction fictive
    },
  };
});
// Test pour vérifier que le composant se rend correctement
test('renders correctly', () => {
  const { getByPlaceholderText, getByText } = renderWithNavigation(<Connexion />);
  // Vérifie que le titre 'Connexion' est présent
  expect(getByText('Connexion')).toBeTruthy();
  // Vérifie que la description est présente
  expect(getByText('Veuillez entrer vos informations de connexion ci-dessous.')).toBeTruthy();
});
// Test pour vérifier une connexion réussie
test('successful login', () => {
  const { getByPlaceholderText, getByText } = renderWithNavigation(<Connexion />);
  // Simule la saisie du matricule
  fireEvent.changeText(getByPlaceholderText('Matricule'), '123456');
  // Simule la saisie du mot de passe
  fireEvent.changeText(getByPlaceholderText('Mot de passe'), 'password');
  // Simule le clic sur le bouton 'Soumettre'
  fireEvent.press(getByText('Soumettre'));
  // Vérifie que l'alerte pour une connexion réussie a été appelée avec le bon message
  expect(Alert.alert).toHaveBeenCalledWith('Connexion réussie', 'Bienvenue a vous ');
});
// Test pour vérifier une connexion échouée
test('failed login', () => {
  const { getByText } = renderWithNavigation(<Connexion />); 
  // Simule le clic sur le bouton 'Soumettre' sans remplir les champs
  fireEvent.press(getByText('Soumettre'));
  // Vérifie que l'alerte pour une erreur s'affiche avec le bon message
  expect(Alert.alert).toHaveBeenCalledWith('Erreur', 'Veuillez remplir tous les champs.');
});