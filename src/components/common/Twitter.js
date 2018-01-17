import React, { Component } from 'react'

class Twitter extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    //setTimeout(this.fetchUser, 3000, "Play", "Ra")
    const name = this.props.username 
    this.setState({ user: this.props.username })
  }

  render () {
    return this.props.children(this.state.user)
  }
}

export { Twitter }
