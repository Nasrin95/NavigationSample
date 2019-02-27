import React,{Component} from 'react';
import { Button, View, Text , Image ,StyleSheet , TextInput , TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer , createDrawerNavigator } from 'react-navigation';
import DetailsScreen from './DetailsScreen';
import DrawerScreen from './DrawerScreen'



class HomeScreen extends React.Component {
    state ={
        text : '',
        id : 0,
        isDrawerOpen : true

    }
    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#003399',
          },
          headerTintColor: '#999999',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: 
            <TouchableOpacity  onPress={() => 
            
              navigation.toggleDrawer() 
           }>
                <MenuImage navigation={navigation}/>
            </TouchableOpacity>,
      }

    };

  
  
    setText = text  => {
        this.setState ({
            text : text
        })
    };
   
    render() {
      return (
        <View style={styles.container}>
          <TextInput onChangeText={this.setText} 
          style = {styles.inputStyle}/>
          <Button
            title="Go to Details"
            onPress={() => 
                this.props.navigation.navigate('Details',{
                name : this.state.text,
                ID : 54
            })
            // this.props.navigation.setParams({otherParam: 'Updated!'})
        
        }
          />
        </View>
      );
    }
  }



const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );


  const MyDrawerNavigator = createDrawerNavigator(
    {
      home : RootStack ,
      },
      {
        drawerPosition : 'right',
        drawerType : 'slider',
        useNativeAnimations : 'true',
        drawerBackgroundColor : '#dddddd',
        contentComponent : DrawerScreen ,
        backBehavior : 'initialRoute',
      } ,
      {
        contentOptions: {
          activeTintColor: '#e91e63',
          itemsContainerStyle: {
            marginVertical:10,
          },
          iconContainerStyle: {
            opacity: 1
          }
        }
      },
      {
        initialRouteName: 'home',
      },
  );

  const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Image source={require('./accest/menu-button.png')}/>
    }else{
        return <Image source={require('./accest/left-arrow.png')}/>
    }
  }
  
  const AppContainer = createAppContainer(MyDrawerNavigator);
  export default class App extends Component {
    render() {
      return <AppContainer />;
    }
  }


  const styles = StyleSheet.create({
    container :{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        backgroundColor :'#9494b8'
    },
    inputStyle : {
        width : 200,
        borderBottomColor : 'black',
        borderBottomWidth : 2,
        marginBottom : 30
    },
    bottonStyle :{
        // borderRadius : 100,
        marginTop : 30,
    },
})
