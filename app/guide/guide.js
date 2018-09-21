import React, { Component } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native'
// import GLDLoginViewController from '../login/login'
import Util from '../tool/utils'

const image1 = require('./image/1.png')
const image2 = require('./image/2.png')
const image3 = require('./image/3.png')
const image4 = require('./image/4.png')
const image5 = require('./image/5.png')

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      //  <SafeAreaView>

      <View style={{ width: '100%', height: '100%' }}>
        <StatusBar
          barStyle="light-content"
          translucent={false}
          backgroundColor="#00baf3"
        />
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          bounces={false}
          pagingEnabled
          horizontal
        >
          <Image source={image1} style={styles.backgroundImage} />
          <Image source={image2} style={styles.backgroundImage} />
          <Image source={image3} style={styles.backgroundImage} />
          <Image source={image4} style={styles.backgroundImage} />
          <View style={styles.backgroundImage}>
            <Image source={image5} style={styles.backgroundImage} />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                // global.storage.saveGuide();
                //   this.props.navigation.replace('Login');
              }}
            >
              <Text style={styles.btnText}>立即体验</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.skipBtn}
          onPress={() => {
            // global.storage.saveGuide();
            //         this.props.navigation.replace('Login')
          }}
        >
          <Text style={styles.skipBtnText}>跳过</Text>
        </TouchableOpacity>
      </View>
      //  </SafeAreaView>
    )
  }
}

var styles = StyleSheet.create({
  contentContainer: {
    width: Util.size.width * 5,
    height: Util.size.height,
  },
  backgroundImage: {
    width: Util.size.width,
    height: Util.size.height,
  },
  btnOut: {
    alignItems: 'center',
  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    left: Util.size.width / 2 - 75,
    position: 'absolute',
  },
  skipBtn: {
    width: 50,
    height: 25,
    backgroundColor: '#0003',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
    left: Util.size.width - 60,
    position: 'absolute',
  },
  btnText: {
    fontSize: 18,
    color: 'transparent',
  },
  skipBtnText: {
    fontSize: 12,
    color: '#fff',
  },
})
