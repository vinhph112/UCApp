import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import imgSuperKid from '../../assets/images/superkid.png';

class SuperKids extends Component {
  render() {
      const content = [
        { name: 'Supper Kid 1', id: 1, child: 100, img: 'https://i.imgur.com/5EUQig3.png'},
        { name: 'Supper Kid 2', id: 2, child: 350, img: 'https://i.imgur.com/3SQyR7y.png'},
        { name: 'Supper Kid 3', id: 3, child: 50, img: 'https://i.imgur.com/B5SgHza.png'},
        { name: 'Supper Kid 4', id: 4, child: 200, img: 'https://i.imgur.com/Ob08qV1.png'},
        { name: 'Supper Kid 5', id: 5, child: 300, img: 'https://i.imgur.com/i7rVK2C.png'},
        { name: 'Supper Kid 6', id: 6, child: 20, img: 'https://i.imgur.com/EL0ZINA.png'},
      ];
      return(
        <View style={styles.container}>
          <Image source={imgSuperKid} style={styles.imgHead}/>
          <FlatList
            data={content}
            renderItem={({item}) => 
              <TouchableOpacity onPress={console.log('Pressed')}>
                <View style={styles.item}>
                  <Image source={{ uri: item.img}} style={styles.itemImage}/>
                  <View>  
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={styles.itemText_Child}>{item.child} tracks</Text>
                  </View>
                </View>
              </TouchableOpacity>
            }
            keyExtractor = { item => item.id.toString()}
          />
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
  imgHead: {
    width: DEVICE_WIDTH * 0.95,
    height: DEVICE_HEIGHT * 0.25,
    margin: 10,
    borderRadius: 10
  },
  item: {
    flex: 1,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'stretch',
    //justifyContent: 'center',    
    width: DEVICE_WIDTH * 0.9,
    flexDirection: 'row', 
  },
  itemText: {
    fontSize: 18,
    marginLeft:10,
    marginTop: 10,
    marginBottom: 5,
  },
  itemIcon: {
    margin: 10
  },
  itemText_Child: {
    fontSize: 12,
    marginLeft: 10,
    color: 'gray',
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10
  }

});
export default SuperKids;
