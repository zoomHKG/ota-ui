import fetch from 'isomorphic-fetch'
import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import Search from '../common/Search'
import Projects from '../common/Projects'
import './styles.css'

const { Header, Content, Footer } = Layout

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (project) {
    fetch(`https://iot-repository-app.herokuapp.com/api/repo/projects?search=${project}`)
      .then(response => response.json())
      .then(result => this.setState({projects: result.data}))
      .catch(err => console.log(err))
  }

  render () {
    const { projects } = this.state
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className='logo' />
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key='1'>nav 1</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380, textAlign: 'center' }}>
            <Search
              style={{ textAlign: 'center', zIndex: 1, width: '80%' }}
              data={this.state.projects}
              onSearch={this.handleSearch}
              onChange={e => {
                // console.log(e.target.value)
                this.handleSearch(e.target.value)
              }} />
            <Projects data={projects} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          IoT Apps ©2018 Created by zoomHKG
        </Footer>
      </Layout>
    )
  }
}

export default App
