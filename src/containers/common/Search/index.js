import React, { Component } from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'

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
      <div className='certain-category-search-wrapper' style={{ width: 250 }}>
        <Input.Search
          placeholder='input search text'
          onSearch={this.props.onSearch}
          style={{ width: 200 }}
          onChange={this.props.onChange}
        />
      </div>
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
