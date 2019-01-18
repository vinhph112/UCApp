import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ButtonSubmit from './Login/ButtonSubmit';
import Logo from './Login/Logo';
import Form from './Login/Form';
import Remember from './Login/Remember';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  render() {

    return(
      <View style={styles.container}>
        <Logo/>
        <Form/>
        <Remember/>
        <ButtonSubmit/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d47a1',
    //justifyContent: 'center',
    //alignItems: 'center'
  },
});

export default Login;
