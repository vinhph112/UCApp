import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import GridView from 'react-native-super-grid';

class HomeMain extends Component {
  _routePage(page) {
    Actions[page].call()
  }
  render() {
    const items = [
      {name: 'Super Kids', code: '#1abc9c', routeName: 'superkids', backgroundImage: ''},
      {name: 'Super Safari', code: '#8e44ad', routeName: 'supersafari', backgroundImage: ''},
      {name: 'iBooks', code: '#2c3e50', routeName: 'ibooks', backgroundImage: ''},
      {name: 'Promotions', code: '#7f8c8d', routeName: 'promotions', backgroundImage: ''},
    ];
      return(
        <GridView
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={ item => (
            <TouchableHighlight style={styles.touchItem} onPress={ () => this._routePage(item.routeName)}>
              <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
              </View>
            </TouchableHighlight>
          )}
        >
        </GridView>
    );
  }
}
const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1
  },
  itemContainer: {
    justifyContent: 'space-between',
    borderRadius: 5,
    height: 150,
  },
  itemName: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  itemCode: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 10,
    marginLeft: 5
  },
  touchItem: {
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  }
});

export default HomeMain;
