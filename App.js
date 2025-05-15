 import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';
import { AntDesign } from '@expo/vector-icons';
import HomeScreens from './screen/HomeScreens';
import Profil from './screen/profil';
import Notifications from './screen/Notifications';
import Connexion from './screen/Connexion';
import Plus from './screen/Plus';
import Taches from './screen/Taches';
import Conge from './screen/Conge';
import Bilan from './screen/Bilan';
import Personnel from'./screen/Personnel';
import Fiche_Paie from './screen/Fiche_Paie';
import Messagerie from './screen/Messagerie';
import Entypo from '@expo/vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import Discussion from './screen/Discussion';
import Heures from './screen/Heures';
import Details from './screen/Details';
  
const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator(); 

const MainTabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: { backgroundColor: '#0288d1', borderTopColor: '#fff' },
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#8ed1fc',
        tabBarInactiveTintColor: '#fff',
      }}
    >
      <Tab.Screen 
        name='accueil' 
        component={Home} 
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' },
          headerShown: false 
           
        }} 
      />
      
           <Tab.Screen 
        name='Taches' 
        component={Taches} 
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' },
          headerShown: false 
           
        }} 
      />
      <Tab.Screen 
        name='home' 
        component={HomeScreens} 
        options={{
          headerShown: false, 
          tabBarIcon: ({ size, color }) => <AntDesign name='home' size={size} color={color} />
        }} 
      />
      <Tab.Screen 
        name='profil' 
        component= {Profil} 
        options={{
          headerShown: false, 
          tabBarIcon: ({ size, color }) => <AntDesign name='user' size={size} color={color} />
        }} 
      />
     
      <Tab.Screen 
        name='notifications' 
        component={Notifications} 
        options={{
          headerShown: true, 
          tabBarIcon: ({ size, color }) => <AntDesign name='bells' size={size} color={color} />,
          tabBarBadge: '99+',
          tabBarBadgeStyle: { backgroundColor: 'red' }
        }} 
      />
        <Tab.Screen 
        name='Messagerie' 
        component={Messagerie} 
        options={{
          headerShown: false, 
          tabBarIcon: ({ size, color }) => <AntDesign name='message1' size={size} color={color} />,
        }} 
      />
         <Tab.Screen 
        name='plus' 
        component= {Plus} 
        options={{
          headerShown: false,  
          tabBarIcon: ({ size, color }) => <AntDesign name='plus' size={size} color={color} />
        }} 
      />
          <Tab.Screen 
        name='Personnel' 
        component= {Personnel} 
        options={{
          headerShown: false,  
          ShowLabel: false,
          tabBarIcon: () => null,  
          tabBarButton: ()=> null,
        }} 
      />
      <Tab.Screen 
        name='Bilan' 
        component= {Bilan} 
        options={{
          ShowLabel: false,
          tabBarIcon: () => null,  
          tabBarButton: ()=> null,
        }} 
      />
      </Tab.Navigator>
  );
};

export default function App ()  {
  return (
   <NavigationContainer>
      <stack.Navigator 
        screenOptions={{tabBarStyle:{bacgroundColor:'#0CAD62',borderTopColor:'#fff'},tabBarActiveTintColor:'black',tabBarActiveBackgroundColor:'#0288d1',tabBarInactiveTintColor:'#fff',intialRouteName:'Details'}} >
          
        <stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <stack.Screen name='homes'component={Home} options={()=> ({tabBarStyle:{display:'none'},tabBarButton:()=>null,headerShown:false })} />
          <stack.Screen name='homescreen'component={HomeScreens}options={{ headerShown:false, tabBarIcon:({size,Colors})=>(<AntDesign name='home'size={size} color={Colors} />)}}/>
          <stack.Screen name='profil' component={Profil} options={{ headerShown:true, tabBarIcon:({size,Colors})=>(<AntDesign name='user'size={size} color={Colors} />)}}/>
          <stack.Screen name='notifications' component={Notifications} options={{ headerShown:true, tabBarIcon:({size,Colors})=>(<AntDesign name='bells'size={size} color={Colors} />), tabBarBadge:'99+',tabBarBadgeStyle:{ bacgroundColor:'red'}}}/>
          <stack.Screen name='Plus' component={Plus} options={{ headerShown:false, tabBarIcon:({size,Colors})=>(<AntDesign name='plus'size={size} color={Colors} />)}}/>
          <stack.Screen name='connexion' component={Connexion}  options={() => ({tabBarStyle:{display:'none'}, tabBarButton:() => null, headerShown:true})} />
          <stack.Screen name='Taches' component={Taches} options={{ headerShown:false,tabBarIcon:({size,Colors})=>(<AntDesign name="bars" size={size} color={Colors} />)}}/>
          <stack.Screen name='Conge' component={Conge} options={{ headerShown:false,tabBarIcon:({size,Colors})=>(<AntDesign  name= 'time'size={size} color={Colors} />)}}/>
          <stack.Screen name='Bilan' component={Bilan} options={{ headerShown:true,headerStyle:{ bacgroundColor:"#0288d1"}, tabBarIcon:({size,Colors})=>(<AntDesign size={size} color={Colors} />)}}/>
          <stack.Screen name='Personnel' component={Personnel} options={{ headerShown:false,tabBarButton:()=>null, headerStyle:{ bacgroundColor:"#0288d1"}, }}/>
          <stack.Screen name='Fiche_paie' component={Fiche_Paie}  options={() => ({tabBarStyle:{display:'none'}, tabBarButton:() => null, headerShown:true})} />
          <stack.Screen name='Messagerie' component={Messagerie} options={{ headerShown:true,headerStyle:{ bacgroundColor:"#0288d1"}, tabBarIcon:({size,Colors})=>(<AntDesign  name= 'time'size={size} color={Colors} />)}}/>
          <stack.Screen name='Discussion' component={Discussion} options={{ headerShown:true,headerStyle:{ bacgroundColor:"#0288d1"}, tabBarIcon:({size,Colors})=>(<AntDesign  name= 'time'size={size} color={Colors} />)}}/>
          <stack.Screen name='Heures' component={Heures} options={{ headerShown:true,headerStyle:{ bacgroundColor:"#0288d1"}, tabBarIcon:({size,Colors})=>(<AntDesign  name= 'time'size={size} color={Colors} />)}}/>
          <stack.Screen name='DetailsTaches' component={Details} options={{ headerShown:true,headerStyle:{ bacgroundColor:"#0288d1"}, tabBarIcon:({size,Colors})=>(<AntDesign  name= 'time'size={size} color={Colors} />)}}/>


 

      </stack.Navigator>

   </NavigationContainer> 
  );
}


