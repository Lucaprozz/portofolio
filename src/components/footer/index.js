import React, { Component } from 'react'
import './Footer.scss'

class Content extends Component{
    render(){
        return(
            <footer className='footer'>
				<div className='footer__flex'>
					<h1 className='footer__title'>Links</h1>
					<h1 className='footer__title'>Links</h1>
					<h1 className='footer__title'>Links</h1>    
				</div>
                <div className='footer__flex'>
                    <p className='footer__para'>flkwefgbwjbkwbegkvwrefbjebvwervbwjrfknkwbew fwerfgwerfgwerg</p>
					<p className='footer__para'>Links</p>
					<p className='footer__para'>Links</p> 
                </div>
            </footer>
        )
    }
}

export default Content;