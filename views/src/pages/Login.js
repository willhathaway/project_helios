import React, { Component } from "react";
import API from "../logic/API";
import Form from "../components/Form/form"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.handleLogin
        };
    }

    handleLogin() {
        let userData = {
            username: this.state.username,
            password: this.state.password
        }
        API.handleLogin(userData);
    }

    handleUsernameChange = event => {
        const { username, value } = event.target;
        this.setState({
            [username]: value
        });
    };

    handlePasswordChange = event => {
        const { password, value } = event.target;
        this.setState({
            [password]: value
        });
    };

    render() {
        return (
            <div>
                <Form
                    handleUsernameChange={this.handleUsernameChange}
                    handlePasswordChange={this.handlePasswordChange}
                    handleFormSubmit={this.handleLogin}
                    username={this.state.username}
                    password={this.state.password}
                />
            </div>
        )
    }
}

export default Login;