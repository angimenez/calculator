import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoxButtons from './components/BoxButtons';
import TextView from './components/TextView';
const buttons = [
  ['LIMPIAR', 'BORRAR', '(', ')'],
  ['1', '2', '3', '+'],
  ['4', '5', '6', '-'],
  ['7', '8', '9', '*'],
  ['.', '0', '=', '/']
]
export default class App extends Component {
  constructor() {
    super();
    this.state = { textView: '' };
  }
  checkDot = () => {
    if (this.state.textView === '') {
      return false;
    }
    if (this.state.textView[this.state.textView.length - 1] === '.')
      return false;

    return true;
  }
  evaluate = () => {
    if (this.state.textView !== '')
      try {
        this.setState({ textView: new String(eval(this.state.textView)) });
      } catch (error) {
        this.setState({ textView: 'ERROR' });
      }
  }
  handlePress = (value) => {
    if (this.state.textView == 'ERROR') {
      this.setState({ textView: '' })
      return;
    }
    if (value === 'BORRAR') {
      this.setState({ textView: this.state.textView.slice(0, -1) });
      return;
    }
    if (value === 'LIMPIAR') {
      this.setState({ textView: '' });
      return;
    }
    if (value === '=') {
      this.evaluate();
      return;
    }
    if (value === '.') {
      if (this.checkDot()) {
        this.setState({ textView: this.state.textView + value });
      }
      return;
    }
    this.setState({ textView: this.state.textView + value });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextView value={this.state.textView} />
        <BoxButtons onPress={this.handlePress} buttons={buttons} />
        <Text>By Doimag</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffe6',
  },
});
