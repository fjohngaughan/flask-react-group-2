import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            // redirect: null,
            user: []
        }
    }
    

    render() {
        if(this.props.redirect) {
            return <Redirect to={this.props.redirect} />
        }
        return (
            <div className="container no-padding">
                <h1 className="h1">Welcome back, Chef!</h1>
                <form contentEditable="True" onSubmit={(e) => this.props.handleLogin(e)}>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" placeholder="Username"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password"/>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="remember_me" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn">Submit</button>  
                </form>
            </div>
        )
    }
}
