import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/Ionicons';


const Personnel = ({ navigation }) => {
  const employees = [
    {
      name: 'espérance',
      firstName: 'yonkeu',
      poste: 'Chef de projet',
      heuresTravail: 120,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'esperance ',
      firstName: 'espé',
      poste: 'Développeur web',
      heuresTravail: 100,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'esperance owomo ',
      firstName: 'espé',
      poste: 'Développeur web',
      heuresTravail: 100,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'pierre ean jack ',
      firstName: 'espé',
      poste: 'Développeur web',
      heuresTravail: 100,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'espérance',
      firstName: 'yonkeu',
      poste: 'Chef de projet',
      heuresTravail: 120,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'esperance ',
      firstName: 'espé',
      poste: 'Développeur web',
      heuresTravail: 100,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'esperance owomo ',
      firstName: 'espé',
      poste: 'Développeur web',
      heuresTravail: 100,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'pierre jean jack ',
      firstName: 'espé',
      poste: 'Développeur web',
      heuresTravail: 100,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'espérance',
      firstName: 'yonkeu',
      poste: 'Chef de projet',
      heuresTravail: 120,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'esperance ',
      firstName: 'espé',
      poste: 'Développeur web',
      heuresTravail: 100,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'esperance owomo ',
      firstName: 'espé',
      poste: 'Développeur web',
      heuresTravail: 100,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'pierre ean jack ',
      firstName: 'espé',
      poste: 'Développeur web',
      heuresTravail: 100,
      photo: require('../assets/lila.jpg'), 
    },
    {
      name: 'espérance',
      firstName: 'yonkeu',
      poste: 'Chef de projet',
      heuresTravail: 120,
      photo: require('../assets/lila.jpg'), 
    },
  

    
    
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const showEmployeeDetails = (employee) => {
    Alert.alert(
      `${employee.firstName} ${employee.name}`,
      `Poste: ${employee.poste}\nHeures de travail: ${employee.heuresTravail}`,
      [
        {
          text: 'Assigner une tâche',
          onPress: () => navigation.navigate('AddTask', { employee }), 
        },
        {
          text: 'Annuler',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
       <View style={styles.header}>
        {/* Bouton de retour */}
        <TouchableOpacity style={styles.backButton} onPress={() =>navigation.navigate ('Plus')}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        {/* Titre de l'application */}
        <Text style={styles.titleheader}>Personnel</Text>
      </View>

      <View style={styles.container}>
        {employees.map((employee, index) => (
          <TouchableOpacity   
            key={index} 
            onPress={() => showEmployeeDetails(employee)}
            style={styles.employeeItemContainer} 
          >
            <View style={styles.employeeItem}>
              <Image source={employee.photo} style={styles.employeePhoto} />
              <View style={styles.employeeInfo}>
                <Text style={styles.employeeName}>{employee.firstName} {employee.name}</Text>
                <Text style={styles.employeePoste}>{employee.poste}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

  container: {
    flex: 1,
    padding: 20,
  },
  employeeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  employeeItemContainer: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    elevation: 2,
    gap:12,
    marginBottom:5,
  },
  employeePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  employeeInfo: {
    flex: 1,
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  employeePoste: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Personnel;