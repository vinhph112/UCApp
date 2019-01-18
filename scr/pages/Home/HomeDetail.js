import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import GridView from 'react-native-super-grid';

class HomeDetail extends Component {
  render() {
      return(
        <View style={styles.container}>
        <Text>Home Detail</Text>
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
export default HomeDetail;
