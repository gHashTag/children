import React, { Component, PropTypes } from 'react'

export default class Twitter extends Component {
  state = {
    user: null,
  }

  static propTypes = {
    username: PropTypes.string.isRequired,
  }
  componentDidMount () {
    fetchUser(this.props.username)
      .then((user) => this.setState({user}))
  }
  render () {
    return this.props.children(this.state.user)
  }
}
