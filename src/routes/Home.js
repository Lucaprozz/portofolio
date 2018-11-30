import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Slider from '../components/slider';
class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <Slider />
                <Footer />
            </>
        )
    }
}

export default Home;