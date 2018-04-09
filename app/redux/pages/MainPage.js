import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Counter from '../components/Counter'
import { connect } from 'react-redux' // 引入connect函数
import * as counterAction from '../actions/counterAction'

class MainPage extends Component {
  static navigationOptions = {
    title: 'MainPage',
  }

  logout() {
    this.props.history.replace('/Login')
  }

  render() {
    //  const { user } = this.props.user;
    const { user, count, incrementFn, decrementFn } = this.props
    return (
      <View style={styles.container}>
        <Counter
          incrementFn={incrementFn}
          decrementFn={decrementFn}
          counter={count}
        />
        <TouchableOpacity
          onPress={() => {
            this.logout()
          }}
          style={{ marginTop: 50 }}
        >
          <View>
            <Text>退出登录({user.name})</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FFFF',
  },
})

export default connect(
  state => ({
    count: state.counter.count,
    user: state.loginIn.user,
  }),
  dispatch => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(MainPage)
