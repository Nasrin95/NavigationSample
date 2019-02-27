import React from 'react';
import {ScrollView, Button, Dimentions, Image ,View , StyleSheet , ActivityIndicator } from 'react-native';
import { createSwitchNavigator, createAppContainer  } from 'react-navigation';
import homeScreen from './App1'


class Welcome extends React.Component {
    componentDidMount(){
        setTimeout(() => this.props.navigation.navigate('HomeNext'), 3000);
    }
  render () {
    return (
      <View style = {styles.container}>
      <Image  source = {require ('./accest/images.jpg')}
      style = {{width :390 , height :600 , position : 'absolute'}} />
      <View>
            <ActivityIndicator size ={'large'}/>
      </View>
        <Button 
        title = {'Start'}
        onPress = {() => this.props.navigation.navigate('HomeNext')}/>
        

      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
  },

});


const RootStack = createSwitchNavigator(
    {
        Home : Welcome,
        HomeNext : homeScreen
    },

  );

export default createAppContainer(RootStack);