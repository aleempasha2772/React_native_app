import React from 'react';
import { Image,TouchableOpacity,  StyleSheet,SafeAreaView,Button, Text, View } from 'react-native';
import logo from './assets/logo.png';
//import left from './assets/left.png'; 
//import right from './assets/right.png';
//import { TextInput } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
//import { createStackNavigator, createAppContainer } from 'react-navigation';

export default function Home() {
  //const [value, onChangeText] = React.useState('Get Started');
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      
      
      <Button
          
          title="GET STARTED"
          onPress={() =>
            this.props.navigation.navigate('login')
          }
          />
      <TouchableOpacity>
      <Text style= {styles.sign}>
        Sign In?
      </Text>
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
  logo:{
    //position: absolute
    width: 200,
    height: 200,
    //left: 10,
    alignSelf: "center",
    top: -10,
  },
  left:{
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
  }
});