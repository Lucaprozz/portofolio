import React, { Component } from 'react'
import './content.scss'
class Content extends Component{
    render(){
        return(
            <section className='content'>
                <div className='image-container'>
                    <img src='' alt='Profile-image' className='image-container__image' />
                </div>
                <div className='container'>
                    <p className='container__text'>

                    </p>
                </div>
            </section>
        )
    }
}

export default Content;