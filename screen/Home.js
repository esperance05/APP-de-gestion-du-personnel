import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation(); // Initialiser la navigation

  const next = () => {
    navigation.navigate("home"); // Naviguer vers la page "profil"
  };
  
   return (
    <View style={styles.container}>
      <Image style={{width:200,height:200,margin:10}}  source={require('../assets/logo.png')}/> 
      <Text style={{fontWeight:"bold",fontSize:30,gap:10}}>   DOWHILE Management  </Text>
      <Text style={{textAlign:"center",marginHorizontal:10,fontSize:15,color:"#999"}} > En appuyant sur continuer vous acceptez les conditions et la  politique de confidentialité </Text>
    <TouchableOpacity onPress={next} style={{position:"absolute",bottom:20,paddingHorizontal:100,paddingVertical:20,backgroundColor:"#0288d1",borderRadius:20,flexDirection:"row",gap:10,alignItems:"center"}}  > 
       <Text style={{color:"white",fontSize:15}}>continuer</Text>
       <AntDesign size={24} color="white" name='arrowright'  />
    </TouchableOpacity>
    
      <StatusBar style="auto" />

    </View>
    
    
   
  );

}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
