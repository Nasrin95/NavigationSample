import React from "react";
import {Image} from "react-native";
 export default class Icon extends React.Component {
  render() {
    return (
      <Image
        source={require('./accest/images.png')}
        style={{ width: 40, height: 40 ,marginLeft:10}}
      />
    );
  }
}