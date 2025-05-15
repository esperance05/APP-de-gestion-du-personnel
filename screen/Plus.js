import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';


const Plus = () => {
  const navigation = useNavigation();

  // Fonction pour naviguer vers une autre page
  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
        {/* Bouton de retour */}
        <TouchableOpacity style={styles.backButton} onPress={() =>navigation.navigate ('home')}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        {/* Titre de l'application */}
        <Text style={styles.titleheader}>retour</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}> plus d'options</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('Conge')}>
          <AntDesign style={styles.icon} size={24} name='calendar' />
          <Text style={styles.text}>demande de congé/absence</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('Fiche_paie')}>
          <AntDesign style={styles.icon} size={24} name='areachart' />
          <Text style={styles.text}>consulter la paye </Text>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('Bilan')}> 
          <AntDesign style={styles.icon} size={24} name='form' />
          <Text style={styles.text}>bilan du jour</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('Personnel')}>
          <AntDesign style={styles.icon} size={24} name='idcard' />
          <Text style={styles.text}>liste du personnel</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#0288d1',
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginTop:20,
    marginRight: 16,
  },
  titleheader: {
    marginTop:20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    alignItems: 'center',
    justifycontent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 18
  },
  icon: {
    color: '#0288d1'
  },

  container2: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    marginTop: 15,
    backgroundColor: "#fff",
    justifycontent: "start",
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 1,
    marginTop: 15,
  },
  linkText: {
    fontSize: 18,
    color: '#fff', // Couleur du texte
    textAlign: 'left', // Aligner le texte à gauche
    textDecorationLine: 'none', // Pas de soulignement
  },
});

export default Plus;