import React, { Component } from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'
import './styles.css'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.data || []
    }
  }

  componentWillReceiveProps (props) {
    if (props.data) {
      this.setState({data: props.data})
    }
  }

  render () {
    return (
      <Input.Search
        placeholder='Search projects...'
        onSearch={this.props.onSearch}
        style={{ width: '100%' }}
        onChange={this.props.onChange}
      />
    )
  }
}

Search.defaultProps = {
  data: []
}

Search.propTypes = {
  data: PropTypes.array,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func
}

export default Search
