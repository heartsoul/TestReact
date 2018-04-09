import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button,
  Picker,
  CheckBox,
  // ProgressViewIOS,
  Switch,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StatusBar,
  Alert,
  Image,
  ListView,
  AppRegistry,
} from 'react-native'

const base64Icon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg=='
// import { StackNavigator } from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  web: 'Cmd + R reload,\n' + 'Cmd + F12 for dev menu',
})
const onPressLearnMore = () => {
  Alert.alert('Button has been pressed!')
}
const ComplexButtonDemo = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{instructions}</Text>
    <Text style={styles.welcome}>组件使用例子</Text>

    <Text>
      复选框：<CheckBox
        color="#F5FCFF"
        value
        style={{ height: 16, width: 16 }}
      />
      <CheckBox
        disabled
        color="#F5FCFF"
        value
        style={{ height: 16, width: 16 }}
      />
    </Text>
    {/* <Text>ProgressBar:</Text> */}
    {/* <ProgressBar/> */}
    <Text>Switch:</Text>
    <Switch
      style={{ height: 26 }}
      value
      activeTrackColor="#939393"
      activeThumbColor="#FAFAFA"
    />
    <Text>TextInput:</Text>
    <TextInput value="abc" editable style={{ height: 26, width: 100 }} />
    <Text>ActivityIndicator:</Text>
    <ActivityIndicator />
    <ActivityIndicator animating />
    <TouchableHighlight onPress={() => {}}>
      <Text>TouchableHighlight:</Text>
    </TouchableHighlight>
    <TouchableOpacity onPress={() => {}}>
      <Text>TouchableOpacity:</Text>
    </TouchableOpacity>
    <TouchableWithoutFeedback onPress={() => {}}>
      <View>
        <Text>TouchableWithoutFeedback:</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
)
export default ComplexButtonDemo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  base64: {
    flex: 1,
    height: 50,
    width: 200,
    resizeMode: 'contain',
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
})

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   AppRegistry,
// } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// // const instructions = Platform.select({
// //   ios: 'Press Cmd+R to reload,\n' +
// //     'Cmd+D or shake for dev menu',
// //   android: 'Double tap R on your keyboard to reload,\n' +
// //     'Shake or press menu button for dev menu',
// //     web: 'Cmd + R reload,\n' +
// //     'Cmd + F12 for dev menu',
// // });

// // const ComplexButtonDemo = () => (
// //    <View style={styles.container}>
// //         <Text style={styles.welcome}>
// //           Welcome to React Native!
// //         </Text>
// //         <Text style={styles.instructions}>
// //           To get started, edit App.js
// //         </Text>
// //         <Text style={styles.instructions}>
// //           {instructions}
// //         </Text>
// //       </View>
// // );
// // export default ComplexButtonDemo

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// // });

// // import MyScene from './MyScene';
// const HomeScreen = () => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen</Text>

//   </View>
// );

// const DetailsScreen = () => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Details Screen</Text>
//   </View>
// );

// const RootNavigator = StackNavigator({
//  Home: {
//     screen: HomeScreen,

//   },
//   Details: {
//     screen: DetailsScreen,

//   },
// });

// export default RootNavigator;
