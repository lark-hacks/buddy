import React, { Component } from 'react';

class Time extends Component {
    constructor() {
        super();
        const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        this.state = {
            date : new Date().toLocaleDateString(undefined, options),
            time : new Date().toLocaleTimeString('en-US')
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        ); 
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        this.setState({
            date : new Date().toLocaleDateString(undefined, options),
            time : new Date().toLocaleTimeString('en-US')
        })
    }
    render() {
        return (
            <div>
                <p className="clock">
                    {this.state.time}
                </p>
                <p className="calendar">
                    {this.state.date}
                </p>
            </div>
        );
    }
}

export default Time;