import React, {Component} from 'react';
import {ScrollView, Text, View , StyleSheet } from 'react-native';

export default class DrawerScreen extends Component {
  render () {
    return (
      <View style = {{marginTop : 130}}>
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Text>
                Nasrin
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text >
               About
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text>
              Contact
              </Text>
            </View>
          </View>
        </ScrollView>
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
  heading: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  menuItem:{
      padding: 10,
      borderWidth: 0.5,
      borderColor: '#d6d7da'
  }
});