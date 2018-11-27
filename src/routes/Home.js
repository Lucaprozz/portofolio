import React, { Component } from 'react'
import Header from '../components/header'
import Content from '../components/content'
class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <Content />
            </>
        )
    }
}

export default Home;