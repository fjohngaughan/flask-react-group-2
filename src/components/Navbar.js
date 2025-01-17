import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(){
        super();
        this.state ={
            redirect: null
        }
    }

    async createAcount(e){
        e.preventDefault();
        let token = await this.props.getToken()
        let res = await fetch(`http:`)
    }

    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><span class="fas fa-utensils"></span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/CreatePost">Create Post</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/CreateAcount">Create Account</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/login">Login</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}
