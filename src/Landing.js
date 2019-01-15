import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: "Idan", color: "red" },
                { name: "Abby", color: "pink" },
                { name: "Jona", color: "green" },
                { name: "Hunter", color: "blue" }
            ]
        }
    }

    render() {
        const users = this.state.users
        return (
            <div className="watch">Who's watching?
            <div id="home-container">
                    {users.map(m => {
                        return (
                         <Link to="/catalog"> <div className="user" style={{ backgroundColor: m.color }}>{m.name}</div></Link>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Landing;