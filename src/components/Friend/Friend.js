import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard'



// normal friends page

// class Friend extends Component {

    
//     render( ) {
//         return (
//             <div>
//                 Helllo Friend
//             {/* <a href='localhost:3000'>
//             <button>Logout</button>
//             </a> */}
//             </div>
            
//         )
//     }
// }

// export default Friend;


//passing off sim friend page 

// import React, { Component } from 'React'
// import helloThere from '../Reacts/Reacts'

export default class Friend extends Component {
    constructor(props) {
        super(props)
        this.state = {
           toggle: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    hi() {
        this.props.hello
    }
    handleClick() {
        this.setState(prev => ({
            toggle: !prev.toggle
        }))
    }

    componentDidMount() {
        // console.log('props', hi)
    }
    render() {
        console.log(this.hi)
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.toggle ? 'ON' : 'OFF'}
                </button>
                <div>{this.props.hello}</div>
                asdfa;lskdfals;dkf
            </div>
        )
    }
}