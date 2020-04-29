import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default class Button extends Component {
  constructor() {
    super();
  }
  handlePress = () => {
    if (this.props.onPress) {
      this.props.onPress(this.props.value);
    }
  };
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.handlePress}>
        <Text style={styles.buttonText}>{this.props.value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 1,
    width: 83,
    height: 83,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "gray",
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 20,
  },
});
