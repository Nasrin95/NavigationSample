import React,{Component} from 'react';
import { Button, View , Platform , Text,StyleSheet } from 'react-native';


export default class ModalScreen extends React.Component {
    static navigationOptions = {
        title: 'Modal',
        headerStyle: {
            backgroundColor: '#ccf2ff',
          },
          headerTintColor: '#999999',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    };

    render() {
      return (
        <View style={styles.main}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create ({
      main : { 
          flex: 1, 
          alignItems: 'center', 
          justifyContent: 'center' ,
          backgroundColor :'#e6f9ff'
        },
  })