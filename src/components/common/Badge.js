import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

const Badge = ({ info }) => {
  console.log('info', info)
  const { container, infoStyle } = styles
  return (
    <View style={container}>
      <Text style={infoStyle}>{info}</Text>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Badge }
