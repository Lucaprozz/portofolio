import React, { Component } from 'react'
import './Footer.scss'
import Icons from '../icons/icons'

class Content extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='footer__wrapper'>
                    <div className='footer__flex'>
                        <h1 className='footer__title'>HOME</h1>
                        <h1 className='footer__title'>PROJECTS</h1>
                        <h1 className='footer__title'>CONTACT</h1>
                    </div>
                    <div className='footer__flex'>
                        <div className='footer__icons'>
                            <Icons className='footer__icon' iconName='faInstagram' />
                            <Icons className='footer__icon' iconName='faFacebookSquare' />
                            <Icons className='footer__icon' iconName='faLinkedin' />
                            <Icons className='footer__icon' iconName='faTwitter' />
                        </div>
                    </div>
                    <div className='footer__flex'>
                        <p className='footer__para'>&copy; Copyright 2018 Luca Dowden & Laurens Trotsenburg - All Rights Reserverd</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Content;