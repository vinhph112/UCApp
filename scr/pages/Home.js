import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import HomeMain from './Home/HomeMain';
import SuperKids from './Home/SuperKids';
import SuperSafari from './Home/SuperSafari';
import IBooks from './Home/IBooks';
import Promotions from './Home/Promotions';

class Home extends Component {
  render() {
      return(
        <Router>
         <Scene key="homeroot">
           <Scene
             initial
             key="homemain"
             component={HomeMain}
             title="Home"
           />
           <Scene key="superkids"
             component={SuperKids}
             title="Super Kids"
           />
            <Scene key="supersafari"
             component={SuperSafari}
             title="Super Safari"
           />
           <Scene key="ibooks"
             component={IBooks}
             title="iBooks"
           />
           <Scene key="promotions"
             component={Promotions}
             title="Promotions"
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
    alignItems: 'center'
  },
  gridView: {
    paddingTop: 25,
    flex: 1
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  itemCode: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Home;
