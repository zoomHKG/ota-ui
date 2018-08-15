import React, { Component } from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'

class IconText extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props
    }
  }

  componentWillReceiveProps (props) {
    if (props.data) {
      this.setState({data: props.data})
    }
  }

  render () {
    const { type, text } = this.state
    return (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )
  }
}

IconText.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default IconText
