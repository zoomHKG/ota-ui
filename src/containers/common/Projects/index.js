import React, { Component } from 'react'
import { List } from 'antd'
import Project from '../Project'

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props
    }
  }

  componentWillReceiveProps (props) {
    this.setState(props)
  }

  render () {
    const { data } = this.state
    return (
      <List
        itemLayout='vertical'
        size='large'
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 3
        }}
        dataSource={data}
        // footer={<div><b>ant design</b> footer part</div>}
        renderItem={item => (
          <Project name={item.name} device={item.device}
            version={item.version} description={item.description}
            url={item.url} />
        )}
      />
    )
  }
}

export default Projects
