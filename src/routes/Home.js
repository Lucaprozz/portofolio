import React, { Component } from 'react'
import Header from '../components/header'
import Slider from '../components/slider'
class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <Slider />
            </>
        )
    }
}

export default Home;