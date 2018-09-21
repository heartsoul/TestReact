import React from 'react'
import { Navigator, View } from 'react-native'

import { BasePage, Input, Button } from 'teaset'

export default class Login extends BasePage {
  constructor(props) {
    super(props)
    Object.assign(this.state, {
      userName: null,
      password: null,
    })
  }

  renderPage() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Input
          style={{ width: 200 }}
          size="sm"
          value={this.state.userName}
          placeholder="用户名"
          onChangeText={text => this.setState({ userName: text })}
        />
        <Input
          style={{ width: 200 }}
          size="sm"
          value={this.state.password}
          placeholder="密码"
          secureTextEntry
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          title="登录"
          onPress={() => this.navigator.push({ view: <YourMainPage /> })}
        />
      </View>
    )
  }
}
