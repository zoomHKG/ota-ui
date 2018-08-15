import React, { Component } from 'react'
import Projects from '../Projects'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentWillReceiveProps (props) {
    this.setState(props)
  }

  render () {
    const { projects } = this.state
    if (projects.length > 0) {
      return (
        <Projects data={projects} />
      )
    }
    return <div />
  }
}

export default Body
