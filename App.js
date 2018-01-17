/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View
} from 'react-native'
import {
  Twitter,
  Loading,
  Profile,
  Badge
} from './src/components/common'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Twitter username='React Native'>
          {(user) => user === null
            ? <Loading />
            : <Badge info={user} />}
          </Twitter>
          <Twitter username='GraphQL'>
            {(user) => user === null
              ? <Loading />
              : <Profile info={user} />}
            </Twitter>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232323' 
  }
})
