import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class IBooks extends Component {
  render() {
      return(
        <View style={styles.container}>
        <Text>iBooks</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default IBooks;
