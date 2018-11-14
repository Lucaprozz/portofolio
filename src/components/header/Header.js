import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Header extends Component{
    render(){
        return(
            <header className='header'>
                <nav className='nav'>
                    <ul className='navigation'>
                        <li className='navigation__list'><NavLink exact={true} activeClassName='is-active' className='navigation__link' to='/'>Home</NavLink></li>
                        <li className='navigation__list'><NavLink activeClassName='is-active' className='navigation__link' to='/Projects'>Projects</NavLink></li>
                        <li className='navigation__list'><NavLink activeClassName='is-active' className='navigation__link' to='/About'>About</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;