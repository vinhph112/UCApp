/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Home from './scr/pages/Home';
import Login from './scr/pages/Login';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router>
       <Scene key="root" hideNavBar="true">
         <Scene
                      initial

           key="login"
           component={Login}
           title="Login"
         />
         <Scene key="home"
           component={Home}
           title="Home"
           backTitle=""
           backButtonImage="./scr/assets/icons/back.png"
         />

       </Scene>
     </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
