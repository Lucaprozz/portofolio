import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
localStorage.clear('userToken')

class Admin extends Component{
    render(){
        if(localStorage.getItem('userToken') === 'tok3n-1S-19'){
            return(
                <p>Admin Dashboard</p>
            )
        } else {
            return(
                <Redirect to="/Login"/>
            )
        }
    }
}

export default Admin;