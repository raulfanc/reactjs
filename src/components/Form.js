import React, {Component} from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state={
            username:"",
            password:"",
        }
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    render() {
        return (
            <div>
                <p>Username: <input onChange={this.usernameHandler} type={"text"} placeholder={"username"}/> </p>
                {this.state.username}
                <p>Password: <input onChange={this.passwordHandler} type={"password"} /> </p>
                {this.state.password}
                 <button className={"btn btn-success"}>Login</button>
            </div>
        );
    }
}

export default Form;