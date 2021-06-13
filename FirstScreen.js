//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image,  StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
//import { StyleSheet, Text, View } from 'react-native';
import Component9 from './assets/Component9.png';
import Component8 from './assets/Component8.png';
import Component10 from './assets/Component10.png';
import Component11 from './assets/Component11.png';
import Vector from './assets/Vector.png'
import Rectangle6 from './assets/Rectangle6.png';
import Line1 from './assets/Line1.png'; 
//import CYBORG from './assets/CYBORG.png';

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      
      
      <TouchableOpacity
        //onPress={() => this.props.navigation.navigate('home')}
        style={styles.b1}>
        <Text style={{ fontSize: 35,top:40, color: '#01233f' ,textAlign: "center" }}>Control</Text>
      </TouchableOpacity>
      <TouchableOpacity
        //onPress={() => this.props.navigation.navigate('home')}
        style={styles.b2}>
        <Text style={{ fontSize: 35,top:40, color: '#01233f' ,textAlign: "center" }}>Console</Text>
      </TouchableOpacity>
      <TouchableOpacity
        //onPress={() => this.props.navigation.navigate('home')}
        style={styles.b3}>
        <Text style={{ fontSize: 35,top:40, color: '#01233f' ,textAlign: "center" }}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}
/*
<Image source={Rectangle6} style={styles.r} />
<TouchableOpacity><Image source={Component8} style={styles.c2} /></TouchableOpacity>
      <Image source={Line1} style={styles.l} />
      <TouchableOpacity><Text style={styles.t1}>Panel</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.t2}>Vision</Text></TouchableOpacity>
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  b1:{
    width: 156,
    height: 137,
    left: -80,
    top: 25,
    backgroundColor: '#E77828',
    textAlign:'center',
    padding : 3,
    borderRadius: 34,
  },
  b2:{
    width: 156,
    height: 137,
    left: 80,
    top: -110,
    backgroundColor: '#E77828',
    textAlign:'center',
    padding : 3,
    borderRadius: 34,
  },
  b3:{
    width: 156,
    height: 137,
    left: -1,
    top: -90,
    backgroundColor: '#E77828',
    textAlign:'center',
    padding : 3,
    borderRadius: 34,
  },
  footer:{
    //position: absolute,
    width: 411,
    height: -4,
    left: 0,
    top: 667,

    backgroundColor: 'blue',
  },
  c:{
    width: 120,
    height: 22,
    left: 166,
    top: 52,
    backgroundColor: '#E77828',
    textAlign:'center',
    padding : 3,
    borderRadius: 34,

  },
  c1: {
    //position: absolute,
    //flex: 1,
    width: 156,
    height: 137,
    left: -80,
    top: 125,
  },
  c2:{
    width: 34,
    height: 24,
    left: -150,
    top: -80,
  },
  c3:{
    width: 156,
    height: 137,
    left: 95,
    top: -10,
  },
  c4:{
    width: 156,
    height: 137,
    left: 10,
    top: 14,
  },
  r:{
    width: 400,
    height: 64,
    left: 10,
    top: 110,
    //backgroundColor: '#fff',
  },
  l:{
    width: 1,
    height: 62,
    left: 6,
    top: 47,
  },
   t1:{
    width: 87,
    height: 32,
    left: 66,
    top: -0,

    //fontfamily: Montserrat,
    fontSize: 20,
    lineHeight: 24,
    color: '#E77828',
},
t2:{
    width: 87,
    height: 32,
    left: -40,
    top: -32,

    //fontfamily: Montserrat,
    fontSize: 20,
    lineHeight: 24,
    color: '#E77828',
},
  

});
//<Text style={styles.c}>CYBORG</Text>
//<Image source={Rectangle6} style={styles.r} />