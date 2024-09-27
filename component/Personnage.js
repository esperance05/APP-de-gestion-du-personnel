import React from 'react';
import { View, Text } from 'react-native';

const Personnage = (props) => {
  return (
    <View style={{marginTop:100,}}>
      <Text>je m'appel :{props.Nom}, et j'ai: {props.Age} et je mesure: {props.Taille} </Text>
    </View>
  );
}

export default Personnage;
