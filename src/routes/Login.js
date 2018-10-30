import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(){
        if(this.state.username && this.state.password){
            PostData('login', this.state).then((result) => {
                let repsonseJSON = result;
                if(repsonseJSON.userData){
                    localStorage.setItem('userData', repsonseJSON);
                    localStorage.setItem('userToken', 'tok3n-1S-19');
                    this.setState({redirect: true});
                } else {
                    console.log('Login Error')
                }
            });
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        if(this.state.redirect === true){
            return(
                <Redirect to={'/admin'}/>
            )
        } else {
            return(
                <div>
                    <input type='text' name='username' placeholder='username' onChange={this.onChange}/>
                    <input type='password' name='password' placeholder='password' onChange={this.onChange}/>
                    <input type='submit' name='submit' onClick={this.login}/>
                </div>
            )
        }
    }
}
export default Login;