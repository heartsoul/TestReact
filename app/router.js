import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing, Text } from 'react-native'
// import {
//   StackNavigator,
//   TabNavigator,
//   TabBarBottom,
//   addNavigationHelpers,
//   NavigationActions,
// } from 'react-navigation'
// import { connect } from 'react-redux'

// import Loading from './containers/Loading'
// import Login from './containers/Login'
// import Home from './containers/Home'
// import Account from './containers/Account'
// import Detail from './containers/Detail'

// const HomeNavigator = TabNavigator(
//   {
//     Home: { screen: Home },
//     Account: { screen: Account },
//   },
//   {
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     swipeEnabled: false,
//     animationEnabled: false,
//     lazyLoad: true,
//   }
// )

// const MainNavigator = StackNavigator(
//   {
//     HomeNavigator: { screen: HomeNavigator },
//     Detail: { screen: Detail },
//   },
//   {
//     headerMode: 'float',
//   }
// )

// const AppNavigator = StackNavigator(
//   {
//     Main: { screen: MainNavigator },
//     Login: { screen: Login },
//   },
//   {
//     headerMode: 'none',
//     mode: 'modal',
//     navigationOptions: {
//       gesturesEnabled: false,
//     },
//     transitionConfig: () => ({
//       transitionSpec: {
//         duration: 300,
//         easing: Easing.out(Easing.poly(4)),
//         timing: Animated.timing,
//       },
//       screenInterpolator: sceneProps => {
//         const { layout, position, scene } = sceneProps
//         const { index } = scene

//         const height = layout.initHeight
//         const translateY = position.interpolate({
//           inputRange: [index - 1, index, index + 1],
//           outputRange: [height, 0, 0],
//         })

//         const opacity = position.interpolate({
//           inputRange: [index - 1, index - 0.99, index],
//           outputRange: [0, 1, 1],
//         })

//         return { opacity, transform: [{ translateY }] }
//       },
//     }),
//   }
// )

// function getCurrentScreen(navigationState) {
//   if (!navigationState) {
//     return null
//   }
//   const route = navigationState.routes[navigationState.index]
//   if (route.routes) {
//     return getCurrentScreen(route)
//   }
//   return route.routeName
// }

// // @connect(({ app, router }) => ({ app, router }))
// class Router extends PureComponent {
//   // componentWillMount() {
//   //   BackHandler.addEventListener('hardwareBackPress', this.backHandle)
//   // }

//   // componentWillUnmount() {
//   //   BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
//   // }

//   // backHandle() {
//   //   const currentScreen = getCurrentScreen(this.props.router)
//   //   if (currentScreen === 'Login') {
//   //     return true
//   //   }
//   //   if (currentScreen !== 'Home') {
//   //     this.props.dispatch(NavigationActions.back())
//   //     return true
//   //   }
//   //   return false
//   // }

//   render(){
//     // const { dispatch, app, router } = this.props;
//     // if (app.loading) return (<Loading />)
//     // const navigation = addNavigationHelpers({ dispatch, state: router });
//     return <AppNavigator/>
//   }
// }

// export function routerReducer(state, action = {}) {
//   return AppNavigator.router.getStateForAction(action, state)
// }

// export default Router
// export default AppNavigator
export default class xxx extends PureComponent {
  render = () => <Text>T</Text>
}
