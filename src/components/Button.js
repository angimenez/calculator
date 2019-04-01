import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class Button extends Component {
    constructor(){
        super();

    }
    render() {
        return (
            <TouchableOpacity onPress={null}>
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
