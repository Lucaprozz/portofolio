import React, { Component } from 'react'
import Header from '../components/header/Header'
import Canvas from '../components/canvas/Canvas'

class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <Canvas />
            </>
        )
    }
}

export default Home;