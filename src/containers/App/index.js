import fetch from 'isomorphic-fetch'
import React, { Component } from 'react'
import { Layout } from 'antd'
import Search from '../common/Search'
import Body from '../common/Body'
import './styles.css'

const { Content, Footer } = Layout

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (project) {
    if (project) {
      fetch(`https://iot-repository-app.herokuapp.com/api/repo/projects?search=${project}`)
        .then(response => response.json())
        .then(result => this.setState({projects: result.data}))
        .catch(err => console.log(err))
    } else {
      this.setState({projects: []})
    }
  }

  render () {
    const { projects } = this.state
    return (
      <Layout>
        <Content style={{ padding: '50px 100px', width: '100%' }}>
          <Search
            style={{ textAlign: 'center', zIndex: 1, width: '80%' }}
            data={this.state.projects}
            onSearch={this.handleSearch}
            onChange={e => {
              // console.log(e.target.value)
              this.handleSearch(e.target.value)
            }} />
          <Body projects={projects} />
        </Content>
        <Footer style={{ textAlign: 'center', position: 'absolute', zIndex: 1, left: 0, bottom: 0, right: 0 }}>
          IoT Apps ©2018 Created by <a href='https://github.com/zoomHKG'>zoomHKG</a><br />
          <a href='https://github.com/zoomHKG/ota-ui'>
            <img src='https://badges.frapsoft.com/os/v2/open-source.png?v=103' alt='<3 OpenSource' />
          </a>
        </Footer>
      </Layout>
    )
  }
}

export default App
