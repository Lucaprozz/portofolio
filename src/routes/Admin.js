import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class Admin extends Component{

    logout(){
        localStorage.clear('userToken')
        window.location = '/'
    }

    render(){
        if(localStorage.getItem('userToken') === 'tok3n-1S-19'){
            return(
                <main>
                    <p>Admin Dashboard</p>
                    <button onClick={this.logout}>Logout</button>
                </main>
            )
        } else {
            return(
                <Redirect to="/Login"/>
            )
        }
    }
}

export default Admin;