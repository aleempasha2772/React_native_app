import React from 'react';
import { Image,TouchableOpacity,  StyleSheet,SafeAreaView,Button, Text, View } from 'react-native';
//import logo from './assets/logo.png';
import cyborg from './assets/CYBORG.png'; 
//import robo from './assets/robo.png';
import { TextInput } from 'react-native';
import Component12 from './assets/Component12.png';
import google from './assets/google.png';
import g from './assets/g.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import stackoverflow from './assets/stackoverflow.png';
//import reddit from './assets/reddit.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

export default function Register() {
  const [value, onChangeText] = React.useState('');
  const [value2, onChangeText2] = React.useState('');
  return (
    <View style={styles.container}>
      
      <Image source={cyborg} style={styles.cyborg} />
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
      
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('home')}
        style={styles.box3}>
        <Text style={{ fontSize: 20, color: '#fff' ,textAlign: "center" }}>GO</Text>
      </TouchableOpacity>
      <Text style={styles.or}>(or)</Text>
      <Text style={styles.orr}>Sign in? with</Text>
      <TouchableOpacity><Image source={google} style={styles.c12} /></TouchableOpacity>
      
    </View>
    
  );
}
//<TouchableOpacity><Image source={reddit} style={styles.c12} /></TouchableOpacity>
/*
<TouchableOpacity><Image source={g} style={styles.c13} /></TouchableOpacity>
      <TouchableOpacity><Image source={github} style={styles.c14} /></TouchableOpacity>
      <TouchableOpacity><Image source={linkedin} style={styles.c15} /></TouchableOpacity>
      <TouchableOpacity><Image source={stackoverflow} style={styles.c16} /></TouchableOpacity>

*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cyborg:{
    height:hp('3%'),
    width:wp('30%'),
    //top: 50,
    //left: 130,
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
    width: wp('84.5%'),
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
    left: hp('10%'),
    top: 30,
  },
  box1 :{
    width: wp('50%'),
    //height: 38,
    //left: 75,
    top: 40,
    //borderColor: 'gray',
    borderWidth: 1,
    height: hp('6%'),
    
    //borderWidth: 1,
    backgroundColor: '#E77828',
    textAlign:'center',
    //padding : 20,
    borderRadius: 4,
    justifyContent: 'space-between',
    justifyContent: 'center',
    
  },
  box2 :{
    width: wp('50%'),
    //height: 38,
    //left: 75,
    top: 50,
    //borderColor: 'gray',
    borderWidth: 1,
    height: hp('6%'),
    
    //borderWidth: 1,
    backgroundColor: '#E77828',
    textAlign:'center',
    //padding : 20,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  box3 :{
    width: wp('30%'),
    //height: 38,
    //left: 120,
    top: 80,
    //borderColor: 'gray',
    borderWidth: 1,
    height: hp('6%'),
    
    //borderWidth: 1,
    backgroundColor: '#01233F',
    textAlign:'center',
    padding : 3,
    borderRadius: 34,
  },
  box4:{
    width: wp('50%'),
    //height: 38,
    //left: 75,
    top: 60,
    //borderColor: 'gray',
    borderWidth: 1,
    height: hp('6%'),
    
    //borderWidth: 1,
    backgroundColor: '#E77828',
    textAlign:'center',
    //padding : 20,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  box5:{
    width: wp('50%'),
    //height: 38,
    //left: 75,
    top: 70,
    //borderColor: 'gray',
    borderWidth: 1,
    height: hp('6%'),
    
    //borderWidth: 1,
    backgroundColor: '#E77828',
    textAlign:'center',
    //padding : 20,
    borderRadius: 4,
    justifyContent: 'space-between',  
  },
  t:{
    width: wp('24%'),
    height: hp('6%'),
    //left: 135,
    top: 30,
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
    width: wp('10%'),
    height: hp('4%'),
    //left: 160,
    top: 100,
    fontSize: 20,
    lineHeight: 24,
  },
  orr:{
    width: wp('44%'),
    height: hp('6%'),
    //left: 120,
    top: 110,
    fontSize: 20,
    lineHeight: 24,
  },
  c12:{
    width: wp('40%'),
    height: hp('6%'),
    left: hp('1%'),
    top: 110,
    //top: wp('35%'),
    justifyContent: 'flex-start',
     
  },
  c13:{
    width: wp('14%'),
    height: hp('6%'),
    //left: 135,
    left: hp('-11%'),
    //top: 100,
    //top: wp('24%'),
    justifyContent: 'flex-start',




  },
  c14:{
    width: wp('16%'),
    height: hp('6%'),
    left: hp('-2%'),
    //left: hp('16%'),
    //top: 50,
    top: hp('7%'),

    
  },
  c15:{
    width: wp('14%'),
    height: hp('6%'),
    
    left: hp('7%'),
    top: 2,
    
  },
  c16:{
    width: wp('14%'),
    height: hp('6%'),
    
    left: hp('16%'),
    top: -45,
    
  },
  c17:{
    width: wp('16%'),
    height: hp('6%'),
    
    left: hp('-1%'),
    top: 5,
  }
});