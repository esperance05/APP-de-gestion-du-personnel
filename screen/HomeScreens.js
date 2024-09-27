import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Image,  } from 'react-native';

const director = [
  { id: '1', name: 'Alice  ',poste:'directeur général', image: require('../assets/lila.jpg') },
  { id: '2', name: 'Martin',poste:'directeur finance', image: require('../assets/lila.jpg') },
  { id: '3', name: 'Claire',poste:' sécrétaire général', image: require('../assets/lila.jpg') },
  { id: '4', name: 'David',poste:'directeur technique ', image: require('../assets/lila.jpg') },
  { id: '5', name: 'Eva ',poste:'directeur commercial', image: require('../assets/lila.jpg') },
];

const HomeScreens = () => { // Vérifiez que navigation est bien passé

  const navigation = useNavigation(); // Initialiser la navigation

  const next = () => {
    navigation.navigate("connexion"); // Naviguer vers la page "profil"
  };
  const renderPerson = ({ item }) => (
    <View style={styles.personContainer}>
      <Image source={item.image} style={styles.personImage} />
      <Text style={styles.personName}>{item.name}</Text>
      <Text style={styles.personName}>{item.poste}</Text>
    </View>
  );
  return (
    <ImageBackground
    source={require('../assets/kol.jpg')} 
    style={styles.background}
    imageStyle={{ opacity: 0.7}} 
  >
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue chez DOWHILE</Text>
      <Text style={styles.subtitle}>directeurs  de l'entreprise</Text>
      <FlatList
        data={director}
        renderItem={renderPerson}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
      <TouchableOpacity onPress={next} style={{position:"absolute",bottom:10,paddingHorizontal:90,paddingVertical:20,backgroundColor:"#0288d1",borderRadius:20,flexDirection:"row",gap:10,alignItems:"center"}}  > 
       <Text style={{color:"white",fontSize:20}}>se connecter</Text>
    </TouchableOpacity>
    </View>
  </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign:'center',
    marginTop:100,
    
  },
  loginButton: {
    backgroundColor:'#0288d1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    justifyContent: 'center',
    textAlign:'center',

  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    marginTop:10,
  },
  personContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  personImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  personName: {
    color: '#fff',
    marginTop: 8,
    textAlign: 'center',
  },
  flatListContainer: {
    paddingVertical: 10,
    marginTop:20,
  },
});

export default HomeScreens;
