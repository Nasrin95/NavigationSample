import React,{Component} from 'react';
import { Button, View , Platform , Text,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer  } from 'react-navigation';
import ModalScreen from './Modal'
import Icon from './Icon'

class ContactPage extends Component{
  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }


    // static navigationOptions = {
      static navigationOptions = ({ navigation }) => {
        return {
        title: 'contacts',
        // headerStyle: { marginTop: 24 },
        // headerTitle : <Icon />,

        headerStyle: {
            backgroundColor: '#ffe6e6',
          },
          headerTintColor: '#999999',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
  
          headerRight: (
            <Button
            // onPress={() => alert('This is a button!')}
            // title="Info"
            // color='#ffe6e6'
            onPress={navigation.getParam('increaseCount')}
            title="+1"
            color={Platform.OS === 'ios' ? '#fff' : '#e6e6e6'}
           
            />
          ),
          headerLeft: (
            <Button
              onPress={() => navigation.navigate('MyModal')}
              title="Info"
              color="#e6e6e6"
            />
          ),

        }
    };

    render(){
        const { navigation } = this.props;
        const otherParam = navigation.getParam('otherParam','NO-ID');
        return(
            <View style = {styles.container}>
                <Text>Contacts</Text>
                <Text>Count: {this.state.count}</Text>
                {/* <Text>{JSON.stringify(otherParam)}</Text> */}
            </View>
        )
    }
}

const RootStack = createStackNavigator(
    {
      Home: ContactPage ,
      MyModal : ModalScreen
    },
    {
      initialRouteName: 'Home',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  export default class App extends Component {
    render() {
      return <AppContainer />;
    }
  }

const styles = StyleSheet.create({
    container :{
        flex : 1 ,
        alignItems: 'center', 
        justifyContent: 'center' ,
        backgroundColor :'#ffcccc'
    },
})