import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Header extends Component{
    render(){
        return(
            <header className='header'>
                <div>
                    <h2>Voornaam Achternaam</h2>
                </div>
                <nav className='nav'>
                    <ul className='navigtion'>
                        <li className='navigation__list'><Link className='navigation__link' to='/'>Home</Link></li>
                        <li className='navigation__list'><Link className='navigation__link' to='/Projects'>Projects</Link></li>
                        <li className='navigation__list'><Link className='navigation__link' to='/About'>About</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;