import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TextView extends Component {
    constructor(){
        super();

    }
    render() {
        return (
            <View>
                <Text style={styles.TextView}>{this.props.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TextView: {
        minWidth: 200,
        minHeight: 80,
        fontSize: 20,
        backgroundColor: '#ffff00',
        borderWidth: 3,
        textAlign:'center',
        textAlignVertical: "center",
    },
});