import React, { Component } from 'react';
import './Auth.css'
import { Link } from 'react-router-dom'
import simpic from '../../img/sim-3-face.png'
import axios from 'axios'


export default class Auth extends Component {
        authWork() {
            let auth = axios.get('/auth/me').then(res => {
                return res.data;
            })
        }
    render() {
        return (
            <div className='box'>
                <div className='minibox'>
                    <div className='littlePic'>
                        <img className = 'heloPic' src= 'https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/helo_logo.png' alt="" />
                    </div>
                    <h1 className='helo'>Helo</h1>
                    <div className='homeInputs'>
                        <label>Username:</label><input type="text" />
                        <label>Password:</label><input type="password" />
                    </div>
                    <div className='loginBtns'>
                        <Link to = '/dashboard'>
                            <a><button className='loginBtns'>Login</button></a>
                            <a><button className='loginBtns'>Register</button></a>
                        </Link>
                        <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a>
                    </div>
                </div>
                <footer>
                    <div className = 'thisIsntAFillerDiv'></div>
                </footer>
            </div>
        )
    }
}