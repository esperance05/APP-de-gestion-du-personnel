import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text,navigation, SafeAreaView, Platform, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Profil = ({ navigation }) => { 
  const userData = {
    name: 'Espérance',
    email: 'esperanceyonkeu@gmail.com',
    profilePicture: require('../assets/images.jpg'), 
    workedHours: 150,
    totalAbsenceHours: 20,
    totalVacationDays: 10,
    numberOfAbsences: 5,
  };

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.picture}>
        <Image source={userData.profilePicture} style={{ marginTop: 20, width: 100, height: 100, borderRadius: 100 }} resizeMode='cover' />
        <View>
          <Text style={{ marginTop: 20, fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>{userData.name}</Text>
          <Text style={{ marginTop: 5, fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>{userData.email}</Text> 
        </View>
      </View>

      <View style={styles.statsContainer}>
        <StatsItem label="Heures travaillées" value={userData.workedHours} />
        <StatsItem label="Jours de congé" value={userData.totalVacationDays} />
        <StatsItem label="Nombre d'absences" value={userData.numberOfAbsences} />
      </View>
    </ScrollView>
  );
};

const StatsItem = ({ label, value }) => (
  <View style={styles.statsItem}>
    <Text style={styles.statsLabel}>{label}:</Text>
    <Text style={styles.statsValue}>{value}</Text>
  </View>
);


export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0288d1',
    padding: 20, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  titleheader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  picture: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 40,
    marginTop: 20,
  },
  statsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  statsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsValue: {
    fontSize: 16,
  },
});