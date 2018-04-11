import React, { Component } from 'React'
// import helloThere from '../Reacts/Reacts'

export default class Dummy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    componentDidMount() {
        console.log('props', this.props)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                asdfa;lskdfals;dkf
            </div>
        )
    }
}