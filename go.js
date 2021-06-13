import React from 'react';
import { Image,TouchableOpacity,  StyleSheet,SafeAreaView,Button, Text, View } from 'react-native';
//import logo from './assets/logo.png';
//import cyborg from './assets/CYBORG.png'; 
//import robo from './assets/robo.png';
//import { TextInput } from 'react-native';
//import Component12 from './assets/Component12.png';
//import g from './assets/g.png';
//import github from './assets/github.png';
//import linkedin from './assets/linkedin.png';
//mport stackoverflow from './assets/stackoverflow.png';
//import reddit from './assets/reddit.png';
import b from './assets/b.png';

export default function Go() {
  //const [value, onChangeText] = React.useState('');
  //const [value2, onChangeText2] = React.useState('');
  return (
    <View style={styles.container}>
      
      <Image style={styles.b} source={b} />
     
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('home')}
        style={styles.box3}>
        <Text style={{ fontSize: 20, color: '#fff' ,textAlign: "center" }}>Yeah!!</Text>
      </TouchableOpacity>


     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cyborg:{
    top: 50,
    left: 130,
  },
  b:{
    top: 21,
    width: '100%',
    height: '100%',
  },
  logo:{
    //position: absolute
    //width: 200,
    //height: 200,
    //left: 10,
    alignSelf: "center",
    //top: -10,
    width: 185,
    height: 245,
    left: 10,
    top: -10,

  },
  /*left:{
    //position: absolute,
    width: 110,
    height: 120,
    left: 110,
    top: -230,
  },
  right :{
    width: 110,
    height: 180,
    
    left: -130,
    //flex:1,
    top: -350,
  },
  */
  get:{
    width: 170,
    //height: 38,
    left: -1,
    top: 15,
    //borderColor: 'gray',
    borderWidth: 1,
    height: 43,
    
    //borderWidth: 1,
    backgroundColor: '#E77828',
    textAlign:'center',
    //padding : 20,
    borderRadius: 34,
    //display: flex,

  },
  sign:{
    width: 76,
    height: 25,
    left: 10,
    top: 30,
  },
  box1 :{
    width: 200,
    //height: 38,
    left: 75,
    top: 80,
    //borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    
    //borderWidth: 1,
    backgroundColor: '#E77828',
    textAlign:'center',
    //padding : 20,
    borderRadius: 4,
    justifyContent: 'space-between',
    justifyContent: 'center',
    
  },
  box2 :{
    width: 200,
    //height: 38,
    left: 75,
    top: 90,
    //borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    
    //borderWidth: 1,
    backgroundColor: '#E77828',
    textAlign:'center',
    //padding : 20,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  box3 :{
    width: 108,
    //height: 38,
    left: -10,
    top: -350,
    //borderColor: 'gray',
    borderWidth: 1,
    height: 39,
    
    //borderWidth: 1,
    backgroundColor: '#E77828',
    textAlign:'center',
    padding : 3,
    borderRadius: 34,
  },
  box4:{
    width: 200,
    //height: 38,
    left: 75,
    top: 100,
    //borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    
    //borderWidth: 1,
    backgroundColor: '#E77828',
    textAlign:'center',
    //padding : 20,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  box5:{
    width: 200,
    //height: 38,
    left: 75,
    top: 110,
    //borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    
    //borderWidth: 1,
    backgroundColor: '#E77828',
    textAlign:'center',
    //padding : 20,
    borderRadius: 4,
    justifyContent: 'space-between',  
  },
  t:{
    width: 80,
    height: 30,
    left: 135,
    top: 75,
    fontSize: 20,
    lineHeight: 24,
    

    /*
    fontFamily: Montserrat,
    fontStyle: normal,
    fontWeight: normal,
    fontSize: 20,
    lineHeight: 24,
    //display: flex,
    alignitems: center,
    */
    color: '#01233F',
  },
  or:{
    width: 40,
    height: 30,
    left: 160,
    top: 125,
    fontSize: 20,
    lineHeight: 24,
  },
  orr:{
    width: 150,
    height: 30,
    left: 120,
    top: 130,
    fontSize: 20,
    lineHeight: 24,
  },
  c12:{
    width: 35,
    height: 33,
    left: 83,
    top: 151,
     
  },
  c13:{
    width: 35,
    height: 33,
    left: 135,
    top: 119,
  },
  c14:{
    width: 43,
    height: 33,
    left: 184,
    top: 85,
    
  },
  c15:{
    width: 35,
    height: 33,
    left: 240,
    top: 52,
    
  },
  c16:{
    width: 46,
    height: 41,
    left: 288,
    top: 10,
  },
  c17:{
    width: 52,
    height: 41,
    left: 19,
    top: -25,
  }
});

/*
<Text style={styles.t}>Register</Text>
      
      <TextInput
       placeholder = "E-mail"
       style={styles.box1}
       underlineColorAndroid='transparent'
       onChangeText={text => onChangeText(text)}
       value={value}
      />
      <TextInput
       placeholder = "Mobile"
       style={styles.box2}
       underlineColorAndroid='transparent'
       onChangeText={text => onChangeText(text)}
       value={value}
      />

      <TextInput
       placeholder = "Username"
       style={styles.box4}
       underlineColorAndroid='transparent'
       onChangeText={text => onChangeText2(text)}
       value={value2}
      />

    <TextInput
       placeholder = "Password"
       style={styles.box5}
       underlineColorAndroid='transparent'
       onChangeText={text => onChangeText2(text)}
       value={value2}
      />



      <Text style={styles.or}>(or)</Text>
      <Text style={styles.orr}>Sign in? with</Text>
      <TouchableOpacity><Image source={Component12} style={styles.c12} /></TouchableOpacity>
      <TouchableOpacity><Image source={g} style={styles.c13} /></TouchableOpacity>
      <TouchableOpacity><Image source={github} style={styles.c14} /></TouchableOpacity>
      <TouchableOpacity><Image source={linkedin} style={styles.c15} /></TouchableOpacity>
      <TouchableOpacity><Image source={stackoverflow} style={styles.c16} /></TouchableOpacity>
      <TouchableOpacity><Image source={reddit} style={styles.c17} /></TouchableOpacity>
      */