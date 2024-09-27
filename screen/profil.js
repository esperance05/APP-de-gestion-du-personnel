 import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, SafeAreaView, Platform, Image, TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Profil = () => {
  return (
   <ScrollView style={ styles.container }>
      <View style={styles.header}>
        {/* Bouton de retour */}
        <TouchableOpacity style={styles.backButton} onPress={() =>navigation.navigate ('home')}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        {/* Titre de l'application */}
        <Text style={styles.titleheader}>retour</Text>
      </View>
        <View style={styles.picture} >
            <View >
                <Image  source={require('../assets/images.jpg') } style={{marginTop:20,width:100,height:100,borderRadius:100} } resizeMode='cover'/>
                <TouchableOpacity style={{ backgroundColor:'#0CAD62',borderRadius:100, position:'absolute',right:0,bottom:0,padding:10}}>
                    <AntDesign name='edit' size={24} color='white' />
                </TouchableOpacity>
                </View>
            <View> 
                <Text style={{marginTop:20,fontWeight:'bold',textAlign:'center', fontSize:20}}> espérance</Text> 
                <Text style={{marginTop:5,fontWeight:'bold',textAlign:'center',fontSize:20}}> esperanceyonkeu@gmail.com</Text> 

            </View>
            </View>
          
            <TouchableOpacity style={styles.items}>
                <AntDesign  color='#40862d' size={24} name='key' />
                <Text style={{color:'#40862d'}}>changer le mot de passe</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.items}>
                <AntDesign  color='#3356ff' size={24} name='setting' />
                <Text style={{color:'#3356ff'}}>parametre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
                <AntDesign  color='#40862d' size={24} name='bells' />
                <Text style={{color:'#40862d'}}> sons</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
                <AntDesign  color='#E74C3C' size={24} name='logout' />
                <Text style={{color:'#E74C3C'}}>deconnexion</Text>
            </TouchableOpacity>

             
        
       
   </ScrollView>
  );
}

export default Profil;
const styles=StyleSheet.create({
    container:{
        flex:1 , 
        backgroundColor:'#fff'
    },
    header: {
        backgroundColor: '#0288d1',
        padding: 40,
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
       
      },
    picture:{
      justifycontent:'center',
      alignItems:'center',
      flexDirection:'column',
      marginBottom:40,
      marginTop:20
      

    },
    items:{
        marginTop:15,
        backgroundColor:"#fff",
        justifycontent:"start",
        flexDirection:'row',
        gap:20,
        alignItems:'center',
        padding: 15,
        marginHorizontal:30,
       marginTop:15,


    }
})
