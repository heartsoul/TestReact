import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button,
  Picker,
  CheckBox,
  ProgressBar,
  Switch,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  // Alert,
  Image,
  // AppRegistry,
  ListView,
  ScrollView,
} from 'react-native'
import Guide from './guide/guide'
import Login from './login/login'
import Home from './home/home'
import AAA from './ant-mobile/index'
// import MyHomePage from "./web/homepage"
//  import {StackRouter} from '../node_modules/react-navigation/src/react-navigation.web';
import {
  SegmentedBar,
  ListRow,
  Drawer,
  Theme,
  Label,
  TabView,
  BasePage,
  NavigationPage,
} from './teaset/index'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  web: 'Cmd + R reload,\n' + 'Cmd + F12 for dev menu',
})
const onPressLearnMore = () => {
  // Drawer.open(view, 'bottom');
}
const view = (
  <View style={{ backgroundColor: Theme.defaultColor, height: 260 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Label type="detail" size="xl" text="Drawer" />
    </View>
  </View>
)
const ComplexButtonDemo = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{instructions}</Text>
    <Button
      onPress={onPressLearnMore}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
    <Text style={styles.welcome}>组件使用例子：</Text>

    <Text>
      选择器：<Picker>
        <Picker.Item label="Goblet of Fire" />
        <Picker.Item label="Order of the Phoenix" />
      </Picker>
    </Text>
    <Text>
      复选框：<CheckBox
        color="#F5FCFF"
        value
        style={{ height: 16, width: 16 }}
      />{' '}
      <CheckBox
        disabled
        color="#F5FCFF"
        value
        style={{ height: 16, width: 16 }}
      />
    </Text>
    <Text>
      {' '}
      ProgressBar:{' '}
      <ProgressBar
        indeterminate
        progress={0.7}
        style={{ borderRadius: 10, height: 10, width: 200 }}
        color="#FF0000"
        trackColor="#FF00F6"
      />
    </Text>
    <Text>
      Switch:<Switch
        style={{ height: 26 }}
        value
        activeTrackColor="#939393"
        activeThumbColor="#FAFAFA"
      />
    </Text>

    <Text>
      TextInput :<TextInput
        value="abc"
        editable
        style={{ height: 26, width: 100 }}
      />
    </Text>
    <Text>
      ActivityIndicator : <ActivityIndicator />
      ActivityIndicator2 : <ActivityIndicator animating />
    </Text>
    <TouchableHighlight onPress={() => {}}>
      <Text>TouchableHighlight: </Text>
    </TouchableHighlight>
    <TouchableOpacity onPress={() => {}}>
      <Text>TouchableOpacity: </Text>
    </TouchableOpacity>
    <TouchableWithoutFeedback onPress={() => {}}>
      <View>
        <Text>TouchableWithoutFeedback: </Text>
      </View>
    </TouchableWithoutFeedback>
    <ListRow
      title="Swipe able"
      swipeActions={[
        <ListRow.SwipeActionButton title="Cancel" />,
        <ListRow.SwipeActionButton
          title="Remove"
          type="danger"
          onPress={() => alert('Remove')}
        />,
      ]}
    />
    <ListRow
      title="Long detail"
      detail="React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React."
    />
    <ListRow
      title="Title place top"
      detail="React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React."
      titlePlace="top"
    />
    <ListRow
      title="Custom detail"
      detail="This is detail"
      detailStyle={{ fontSize: 15, color: '#31708f' }}
    />
    <ListRow
      title="Custom detail"
      detail={
        <View
          style={{
            backgroundColor: '#5bc0de',
            width: 60,
            height: 24,
            borderRadius: 4,
          }}
        />
      }
    />
    <Text>ListView: </Text>
    <ScrollView
      style={[{ width: 200 }, { height: 44 }]}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollsToTop={false}
      removeClippedSubviews={false}
    >
      <Image
        source={{ uri: 'https://www.baidu.com/img/bd_logo1.png' }}
        style={{ width: 100, height: 40 }}
      />
    </ScrollView>
    {/* <MyComponent style={{width:100,height:200}}/> */}
    <Text>
      Image:
      <Image
        source={{ uri: 'https://www.baidu.com/img/bd_logo1.png' }}
        style={{ width: 100, height: 40 }}
      />
    </Text>
    <View style={{ width: '100%', height: 50 }}>
      <SegmentedBar justifyItem="scrollable">
        <SegmentedBar.Item title="Apple" />
        <SegmentedBar.Item title="Banana" />
        <SegmentedBar.Item title="Cherry" />
        <SegmentedBar.Item title="Durian" />
        <SegmentedBar.Item title="Filbert" />
        <SegmentedBar.Item title="Grape" />
        <SegmentedBar.Item title="Hickory" />
        <SegmentedBar.Item title="Lemon" />
        <SegmentedBar.Item title="Mango" />
        <SegmentedBar.Item title="Apple" />
        <SegmentedBar.Item title="Banana" />
        <SegmentedBar.Item title="Cherry" />
        <SegmentedBar.Item title="Durian" />
        <SegmentedBar.Item title="Filbert" />
        <SegmentedBar.Item title="Grape" />
        <SegmentedBar.Item title="Hickory" />
        <SegmentedBar.Item title="Lemon" />
        <SegmentedBar.Item title="Mango" />
        <SegmentedBar.Item title="Apple" />
        <SegmentedBar.Item title="Banana" />
        <SegmentedBar.Item title="Cherry" />
        <SegmentedBar.Item title="Durian" />
        <SegmentedBar.Item title="Filbert" />
        <SegmentedBar.Item title="Grape" />
        <SegmentedBar.Item title="Hickory" />
        <SegmentedBar.Item title="Lemon" />
        <SegmentedBar.Item title="Mango" />
        <SegmentedBar.Item title="Apple" />
        <SegmentedBar.Item title="Banana" />
        <SegmentedBar.Item title="Cherry" />
        <SegmentedBar.Item title="Durian" />
        <SegmentedBar.Item title="Filbert" />
        <SegmentedBar.Item title="Grape" />
        <SegmentedBar.Item title="Hickory" />
        <SegmentedBar.Item title="Lemon" />
        <SegmentedBar.Item title="Mango" />
        <SegmentedBar.Item title="Apple" />
        <SegmentedBar.Item title="Banana" />
        <SegmentedBar.Item title="Cherry" />
        <SegmentedBar.Item title="Durian" />
        <SegmentedBar.Item title="Filbert" />
        <SegmentedBar.Item title="Grape" />
        <SegmentedBar.Item title="Hickory" />
        <SegmentedBar.Item title="Lemon" />
        <SegmentedBar.Item title="Mango" />
        <SegmentedBar.Item title="Apple" />
        <SegmentedBar.Item title="Banana" />
        <SegmentedBar.Item title="Cherry" />
        <SegmentedBar.Item title="Durian" />
        <SegmentedBar.Item title="Filbert" />
        <SegmentedBar.Item title="Grape" />
        <SegmentedBar.Item title="Hickory" />
        <SegmentedBar.Item title="Lemon" />
        <SegmentedBar.Item title="Mango" />
        <SegmentedBar.Item title="Apple" />
        <SegmentedBar.Item title="Banana" />
        <SegmentedBar.Item title="Cherry" />
        <SegmentedBar.Item title="Durian" />
        <SegmentedBar.Item title="Filbert" />
        <SegmentedBar.Item title="Grape" />
        <SegmentedBar.Item title="Hickory" />
        <SegmentedBar.Item title="Lemon" />
        <SegmentedBar.Item title="Mango" />
      </SegmentedBar>
    </View>
  </View>
)
export default ComplexButtonDemo
// class XXX extends Component {
//   render = () => {
//     return <Login/>
//   }
// }

// class MinePage extends NavigationPage {
//   static defaultProps = {
//     ...NavigationPage.defaultProps,
//     title: '我',
//     showBackButton: true,
//   };
//   renderPage() {
//     return <Login />
//   }
// }
// class demo extends Component {
//   render = () => {
//     return (<TabView style={{flex: 1,width:'100%',height:'100%'}} type='projector'>
//     <TabView.Sheet
//       title='Home'
//       // icon={require('../icons/home.png')}
//       // activeIcon={require('../icons/home_active.png')}
//     >
//       <Home />
//     </TabView.Sheet>
//     <TabView.Sheet
//       title='Me'
//       // icon={require('../icons/me.png')}
//       // activeIcon={require('../icons/me_active.png')}
//       badge={1}
//     >
//       <MinePage />
//     </TabView.Sheet>
//     <TabView.Sheet
//       title='Me'
//       // icon={require('../icons/me.png')}
//       // activeIcon={require('../icons/me_active.png')}
//       badge={1}
//     >
//       <MinePage />
//     </TabView.Sheet>
//     <TabView.Sheet
//       title='Me'
//       // icon={require('../icons/me.png')}
//       // activeIcon={require('../icons/me_active.png')}
//       badge={1}
//     >
//       <AAA />
//     </TabView.Sheet>

//   </TabView>)
//   }
// }

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
})

// // class MyComponent extends Component {
// //   constructor() {
// //     super()
// //     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
// //     this.state = {
// //       dataSource: ds.cloneWithRows(['row 1', 'row 2']),
// //     }
// //   }

// //   render() {
// //     return (
// //       <ListView
// //         dataSource={this.state.dataSource}
// //         renderRow={(rowData) => <Text>{rowData}</Text>}
// //       />
// //     )
// //   }
// // }

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

// // const RootNavigator = StackNavigator({
// //  Home: {
// //     screen: HomeScreen,

// //   },
// //   Details: {
// //     screen: DetailsScreen,

// //   },
// // });

// // export default RootNavigator

// // import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

// // export default () => {
// //   return <ScrollableTabView
// //     style={{marginTop: 20, }}
// //     initialPage={0}
// //     renderTabBar={() => <ScrollableTabBar />}
// //   >
// //     <Text tabLabel='Tab #1'>My</Text>
// //     <Text tabLabel='Tab #2 word word'>favorite</Text>
// //     <Text tabLabel='Tab #3 word word word'>project</Text>
// //     <Text tabLabel='Tab #4 word word word word'>favorite</Text>
// //     <Text tabLabel='Tab #5'>project</Text>
// //   </ScrollableTabView>;
// // }

// /* eslint-disable react/jsx-no-bind */

// /**
//  * @flow
//  */

// // import React from 'react';
// // import { ScrollView, StyleSheet, Text, View } from 'react-native';

// const onScroll = () => {
//   console.log('ScrollView.onScroll');
// };

// const VerticalExample = () => (
//   <View style={styles.scrollViewContainer}>
//     <ScrollView
//       contentContainerStyle={styles.scrollViewContentContainerStyle}
//       onScroll={onScroll}
//       scrollEventThrottle={16} // ~60 events per second
//       style={styles.scrollViewStyle}
//     >
//       {Array.from({ length: 50 }).map((item, i) => (
//         <View key={i} style={[styles.box, styles.horizontalBox]}>
//           <Text>{i}</Text>
//         </View>
//       ))}
//     </ScrollView>
//     <View style={[styles.box, styles.horizontalBox]}>
//        <SegmentedBar justifyItem="scrollable" >
//   <SegmentedBar.Item title='Apple' />
//   <SegmentedBar.Item title='Banana' />
//   <SegmentedBar.Item title='Cherry' />
//   <SegmentedBar.Item title='Durian' />
//   <SegmentedBar.Item title='Filbert' />
//   <SegmentedBar.Item title='Grape' />
//   <SegmentedBar.Item title='Hickory' />
//   <SegmentedBar.Item title='Lemon' />
//   <SegmentedBar.Item title='Mango' />
// </SegmentedBar>
// </View>
//   </View>
// );

// const HorizontalExample = () => (
//   <View style={styles.scrollViewContainer}>
//     {/* <ScrollView
//       contentContainerStyle={styles.scrollViewContentContainerStyle}
//       horizontal
//       onScroll={onScroll}
//       scrollEventThrottle={16} // ~60 events per second
//       style={styles.scrollViewStyle}
//     >
//       {Array.from({ length: 50 }).map((item, i) => (
//         <View key={i} style={[styles.box, styles.horizontalBox]}>
//           <Text>{i}</Text>
//         </View>
//       ))}

//     </ScrollView> */}
//     <Guide/>
//   </View>
// );

// // export { HorizontalExample, VerticalExample };

// const styles = StyleSheet.create({
//   box: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     borderWidth: 1
//   },
//   scrollViewContainer: {
//      height: 200,
//      width: 300
//   },
//   scrollViewStyle: {
//     borderWidth: 1
//   },
//   scrollViewContentContainerStyle: {
//     backgroundColor: '#eee',
//     padding: 10
//   }
// });
