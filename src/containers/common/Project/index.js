import React, { Component } from 'react'
import { List, Avatar } from 'antd'
import IconText from '../IconText'
import './styles.css'

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
        actions={[<IconText type='rocket' text={device} />, <IconText type='tags' text={version} />]}
        extra={<img width={272} alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' />}
      >
        <List.Item.Meta
          avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
          title={name}
          description={description}
        />
        <a href={`https://iot-repository-app.herokuapp.com/api/ota/${name}`} >Download</a>
      </List.Item>
    )
  }
}

export default Project
