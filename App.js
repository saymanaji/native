import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Regform from './app/components/Regform';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Regform/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
  },
});
