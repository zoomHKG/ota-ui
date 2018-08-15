import React, { Component } from 'react'
import { List, Avatar } from 'antd'
import IconText from '../IconText'

class Project extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props
    }
  }

  render () {
    const { name, device, version, description } = this.state
    return (
      <List.Item
        key={name}
        actions={[<IconText type='tags' text={version} />, <IconText type='rocket' text={device} />, <IconText type='message' text='2' />]}
        extra={<img width={272} alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' />}
      >
        <List.Item.Meta
          avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
          title={name}
          description={description}
        />
        Lorem ipsum..
      </List.Item>
    )
  }
}

export default Project
