import React from 'react';
import { Image,TouchableOpacity,  StyleSheet,SafeAreaView,Button, Text, View } from 'react-native';
//import logo from './assets/logo.png';
import cyborg from './assets/CYBORG.png'; 
import robo from './assets/robo.png';
import { TextInput } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

export default function Login() {
  const [value, onChangeText] = React.useState('');
  const [value2, onChangeText2] = React.useState('');
  return (
    <View style={styles.container}>
      <Image source={robo} style={styles.logo} />
      <Image source={cyborg} style={styles.cyborg} />
      
      <TextInput
       placeholder = "Username"
       style={styles.box1}
       underlineColorAndroid='transparent'
       onChangeText={text => onChangeText(text)}
       value={value}
      />

      <TextInput
       placeholder = "Password"
       style={styles.box2}
       underlineColorAndroid='transparent'
       onChangeText={text => onChangeText2(text)}
       value={value2}
      />
      <Button
          style = {styles.box3} 
          title="Go to About"
          onPress={() => this.props.navigation.navigate(About)}
       />
    </View>
  );
}
/*<TouchableOpacity
        //onPress={() => this.props.navigation.navigate('home')}
        style={styles.box3}>
        <Text onPress={() => this.props.navigation.navigate('About')} style={{ fontSize: 20, color: '#fff' ,textAlign: "center" }}>LOGIN</Text>
      </TouchableOpacity>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cyborg:{
    top: -300,
    left: -5
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
    left: -1,
    top: 5,
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
  box2 :{
    width: 200,
    //height: 38,
    left: -1,
    top: 10,
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
    left: -1,
    top: 20,
    //borderColor: 'gray',
    borderWidth: 1,
    height: 39,
    
    //borderWidth: 1,
    backgroundColor: '#01233F',
    textAlign:'center',
    padding : 3,
    borderRadius: 34,
  }
});