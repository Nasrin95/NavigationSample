import React,{Component} from 'react';
import {  createAppContainer , createMaterialTopTabNavigator , createBottomTabNavigator ,prefix , onNavigationStateChange ,handleNavigationChange } from 'react-navigation'; // Version can be specified in package.json
import ContactPage from './ContactPage'
import HomeScreen from './HomeScreen'



const RootStack = createBottomTabNavigator(

  {
    Home: HomeScreen,
    Contact : ContactPage,
  },
  {
    initialRouteName: 'Home',

      tabBarOptions: {
        labelStyle: {
          fontSize: 15,
        },
        tabStyle: {
          height : 40,
          //  width : 180 ,
          marginBottom: 5
        },
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#e6e6e6',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },


    }    
  },

);

const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}