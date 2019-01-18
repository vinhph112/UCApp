import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import CheckBox from 'react-native-check-box'


export default class Remeber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  render() {

    return (
      <View style={styles.container}>
        <CheckBox
            style={styles.checkbox}
            onClick={()=>{
              this.setState({
                  isChecked:!this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
            rightText={"Remember me"}
            checkBoxColor={'white'}
            rightTextStyle={styles.text}
        />
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //top: 20,
    width: DEVICE_WIDTH,
    justifyContent: 'center',
    //alignItems: 'center'
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  checkbox: {
    //top: 10,
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 40,
  }
});
