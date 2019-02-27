import React,{Component} from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class DetailsScreen extends Component{
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return{
            // title: navigation.getParam('name', 'NO-ID'),
            title :  params ? params.name : 'A Nested Details Screen' ,
            headerStyle: {
                backgroundColor: '#ffffe6',
              },
              headerTintColor: '#999999',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        };
        
        // title: 'Go to Home',  
    };

    render(){
        const { navigation } = this.props;
        const name = navigation.getParam('name', 'NO-ID');
        const ID = navigation.getParam ('ID' , 'some default value')
        return(
            <View style = {styles.container}>
                {/* <Text>contact name: {JSON.stringify(name)}</Text> */}
                <Text>contact name: {name}</Text>
                <Text>contact ID: {JSON.stringify(ID)}</Text>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container :{
        flex: 1, 
        alignItems: 'center',
         justifyContent: 'center' ,
         backgroundColor : '#ffff66'
    }
})