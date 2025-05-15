import React, { useState, useEffect } from 'react'; // Importation de la bibliothèque React
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated } from 'react-native'; // Importation des composants React Native
import { useNavigation } from '@react-navigation/native'; // Importation de l'objet de navigation
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importation de la bibliothèque d'icônes

const Connexion = () => {
  const navigation = useNavigation(); // Récupération de l'objet de navigation
  const [scaleAnim] = useState(new Animated.Value(1)); // État pour l'animation de mise à l'échelle
  const [lineAnim] = useState(new Animated.Value(0)); // État pour l'animation du trait
  const [scanning, setScanning] = useState(false); // État pour vérifier si le scan est en cours

  // Fonction appelée lors du scan de l'empreinte digitale
  const handleFingerprintScan = () => {
    setScanning(true); // Démarre le scan

    // Démarre l'animation de mise à l'échelle
    Animated.timing(scaleAnim, {
      toValue: 0.9, // Réduit la taille à 90%
      duration: 140, // Durée de l'animation
      useNativeDriver: true, // Utilisation du driver natif
    }).start(() => {
      // Animation du trait pendant 5 secondes
      Animated.timing(lineAnim, {
        toValue: 1, // Fait apparaître le trait
        duration: 5000, // Durée du scan
        useNativeDriver: false, // Doit être faux pour utiliser translateX
      }).start(() => {
        // Affichage d'une alerte pour indiquer le succès de l'authentification
        Alert.alert('Authentification réussie');
        navigation.navigate('home'); // Navigation vers l'écran "Taches"
      });
    });
  };

  // Réinitialise l'animation lorsque le scan est terminé
  useEffect(() => {
    if (!scanning) {
      lineAnim.setValue(0); // Réinitialise la position du trait
    }
  }, [scanning, lineAnim]);

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Connexion</Text>
      <Text style={styles.description}>Veuillez scanner votre empreinte digitale.</Text> 

      {/* Animation de mise à l'échelle sur le cercle */}
      <Animated.View style={{ ...styles.fingerprintCircle, transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity onPress={handleFingerprintScan} style={styles.fingerprintCircle}>
          <Icon name="fingerprint" size={60} color="#fff" /> 
        </TouchableOpacity>

        {/* Trait animé pour simuler le scan */}
        {scanning && (
          <Animated.View
            style={[
              styles.scanningLine,
              {
                opacity: lineAnim, // L'opacité augmente avec l'animation
                transform: [{ scaleX: lineAnim }], // Le trait grandit horizontalement
              },
            ]}
          />
        )}
      </Animated.View>

      <Text style={styles.instruction}>Touchez le cercle pour scanner votre empreinte.</Text>
    </View>
  );
};

// Définition des styles
const styles = StyleSheet.create({
  container: {
    flex: 1, // Remplit tout l'espace disponible
    justifyContent: 'center', // Centre le contenu verticalement
    padding: 16, // Ajoute des marges internes
  },
  title: {
    fontSize: 32, // Taille de la police pour le titre
    fontWeight: 'bold', // Gras
    marginBottom: 24, // Marge inférieure
    textAlign: 'center', // Centre le texte
  },
  description: {
    fontSize: 16, // Taille de la police pour la description
    marginBottom: 20, // Marge inférieure
    textAlign: 'center', // Centre le texte
    color: '#666', // Couleur du texte
  },
  fingerprintCircle: {
    width: 120, // Largeur agrandie du cercle
    height: 120, // Hauteur agrandie du cercle
    borderRadius: 60, // Rend le cercle arrondi
    backgroundColor: '#0288d1', // Couleur de fond du cercle
    justifyContent: 'center', // Centre le contenu verticalement
    alignItems: 'center', // Centre le contenu horizontalement
    alignSelf: 'center', // Centre le cercle dans son conteneur
    marginBottom: 20, // Marge inférieure
    position: 'relative', // Nécessaire pour positionner le trait
  },
  scanningLine: {
    position: 'absolute', // Positionnement absolu pour superposer le trait
    width: '80%', // Largeur du trait
    height: 4, // Hauteur du trait
    backgroundColor: '#fff', // Couleur du trait
    top: '50%', // Positionne le trait au milieu verticalement
    left: '10%', // Centrer horizontalement
    marginLeft: -2, // Ajuste pour centrer le trait
  },
  instruction: {
    fontSize: 16, // Taille de la police pour les instructions
    textAlign: 'center', // Centre le texte
    color: '#666', // Couleur du texte
  },
});

export default Connexion; // Exportation du composant Connexion