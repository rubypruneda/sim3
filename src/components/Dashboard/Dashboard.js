import React, { Component } from 'react';
import './Dashboard.css'
import { Link } from 'react-router-dom';



export default class Dashboard extends Component {
    hello() {
        return 'hi there!'
    }
    render() {
        return (
            <div >
                <div className='sideNav'>
                    little pic
                    <img className = 'houseBtn' src="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/home_logo.png" alt="" />
                    <img className = 'newBtn' src="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/new_logo.png" alt="" />
                    <img className = 'powerBtn' src="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/shut_down.png" alt="" />          
                </div>
                <div className='helloDash'>
                    hello dashboard
                </div>
                <Link  to='/friend'>
               <a><button>Friend Page</button></a>
                </Link>
            </div>
        )
    }
}