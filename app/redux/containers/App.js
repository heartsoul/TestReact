import React from 'react'
import { Provider } from 'react-redux'
// import { StackNavigator } from 'react-navigation'
import {
  NoMatch,
  Switch,
  Route,
  Router,
  NativeRouter,
} from 'react-router-native'
// import { ConnectedRouter } from 'connected-react-router'
// import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from '../store/ConfigureStore'
// import {LoginPage, MainPage} from '../pages/pages'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

const store = configureStore()

// const Nav = StackNavigator({
//   Login: { screen: LoginPage },
//   Main: { screen: MainPage},
// })

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/Login" exact component={LoginPage} />
            <Route path="/Main" exact component={MainPage} />
            <Route component={NoMatch} />
          </Switch>
        </NativeRouter>
      </Provider>
    )
  }
}
