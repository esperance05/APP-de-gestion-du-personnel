import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { NavigationContainer } from '@react-navigation/native';

const notificationsData = [
  { id: '1', message: 'Nouvelle demande de congé de Marie', date: '2024-09-01', icon: 'star' },
  { id: '2', message: 'Rapport de performance publié', date: '2024-09-02', icon: 'copy' },
  { id: '3', message: 'Rappel : réunion d\'équipe demain à 10h', date: '2024-09-03', icon: 'alarm' },
  { id: '4', message: 'Nouvelle demande de congé de Marie', date: '2024-09-01', icon: 'star' },
  { id: '5', message: 'Rapport de performance publié', date: '2024-09-02', icon: 'copy' },
  { id: '6', message: 'Rappel : réunion d\'équipe demain à 10h', date: '2024-09-03', icon: 'alarm' },
  { id: '7', message: 'Nouvelle demande de congé de Marie', date: '2024-09-01', icon: 'star' },
  { id: '8', message: 'Rapport de performance publié', date: '2024-09-02', icon: 'copy' },
  { id: '9', message: 'Rappel : réunion d\'équipe demain à 10h', date: '2024-09-03', icon: 'alarm' },
];

const NotificationItem = ({ notification }) => (
  <TouchableOpacity style={styles.notificationItem}>
    <Icon name={notification.icon} size={24} color="yellow" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.message}>{notification.message}</Text>
      <Text style={styles.date}>{notification.date}</Text>
    </View>
  </TouchableOpacity>
);

const Notifications = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.navigate('home'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Bouton de retour */}
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        {/* Titre de l'application */}
        <Text style={styles.titleheader}>Retour</Text>
      </View>
      
      <FlatList
        data={notificationsData}
        renderItem={({ item }) => <NotificationItem notification={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16 }} // Ajoute un padding en bas
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
    
  },

  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#8ed1fc',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
    color: '#fff',
  },
  header: {
    backgroundColor: '#0288d1',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  
    marginLeft:0,
    
  },
  backButton: {
    marginRight: 16,
  },
  titleheader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Notifications;