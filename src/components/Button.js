import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class Button extends Component {
    constructor(){
        super();

    }
    handlePress = () =>{
        if(this.props.onPress){
            this.props.onPress(this.props.value);
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={styles.button}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        backgroundColor: "gray",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontSize: 20,
        borderRadius: 10,
        borderWidth: 2
    },
});
