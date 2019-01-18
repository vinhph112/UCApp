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

import imgSuperKid from '../../assets/images/supersafari.jpg';
class SuperSafari extends Component {
  render() {
      const content = [
        { name: 'Safari 1', id: 1, child: 100, img: 'https://i.imgur.com/QrgerIu.png'},
        { name: 'Safari 2', id: 2, child: 350, img: 'https://i.imgur.com/Eu74oD4.png'},
        { name: 'Safari 3', id: 3, child: 50, img: 'https://i.imgur.com/SlEJGBq.png'},
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
export default SuperSafari;
