import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';

export default class BoxButtons extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.buttons.map((obj, index) => {
                    return (
                        <View style={styles.row} key={index}>{obj.map((o, i) => {
                            return (<Button key={i} value={o} />)
                        })}</View>)
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    row: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
});
