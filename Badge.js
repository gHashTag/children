import React, { Component } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  View
} from 'react-native'

export default class Badge extends Component {
  render() {
    const type = this.state.types[this.state.index]
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100
  }
})

export { Badge } 
