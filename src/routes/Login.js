import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
            redirect: false,
            items: [],
            isLoaded: false,
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost/lautro/portofolio/src/system/api/User.php')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        })
    }

    login(){
        if(this.state.username && this.state.password){
            if(this.state.username == this.state.items[0].username){
                if(this.state.password == this.state.items[0].password){
                    localStorage.setItem('userToken', 'tok3n-1S-19')
                    this.setState({
                        redirect: true
                    })
                } else {
                console.log('Password is incorrect')
                }
            } else {
                console.log('Username is incorrect')
            }
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        let { isLoaded, items } = this.state;
        if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            if(this.state.redirect == true){
                return(
                    <Redirect to={'/admin'}/>
                )
        } else {
            return(
                <div>
                    <input type='text' name='username' placeholder='Username' onChange={this.onChange}/>
                    <input type='password' name='password' placeholder='Password' onChange={this.onChange} />
                    <input type='submit' name='submit' onClick={this.login}/>
                </div>
                )
            }
        }
    }
}
export default Login;