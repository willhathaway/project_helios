// src/contexts/auth0-context.js

import React, { Component, createContext, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import axios from "axios";

// create the context
export const Auth0Context = createContext();

// export the context as useAuth0
export const useAuth0 = () => useContext(Auth0Context);

// create a provider
export class Auth0Provider extends Component {
    state = {
        auth0Client: null,
        isLoading: true,
        isAuthenticated: false,
        user: null
    };

    config = {
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        redirect_uri: window.location.origin
    };

    componentDidMount() {
        this.initializeAuth0();
    }



    // initialize the auth0 library
    initializeAuth0 = async () => {
        const auth0Client = await createAuth0Client(this.config);
        this.setState({ auth0Client });

        // check to see if they have been redirected after login
        if (window.location.search.includes('code=')) {
            return this.handleRedirectCallback();
        }

        const isAuthenticated = await auth0Client.isAuthenticated();
        const user = isAuthenticated ? await auth0Client.getUser() : null;
        this.setState({ isLoading: false, isAuthenticated, user });
    };

    // handle the authentication callback
    handleRedirectCallback = async () => {
        this.setState({ isLoading: true });

        await this.state.auth0Client.handleRedirectCallback();
        const user = await this.state.auth0Client.getUser();
        console.log("user: " , user);
        // THis is where you make the call to the DB.

        let userData = {username: user.name, 
            email: user.email}

        const user_from_db = await axios.post("/api/users", userData).then(data => {
            console.log("resData: ", data.data.userData);
        });

        this.setState({ user, isAuthenticated: true, isLoading: false, user_from_db });
        window.history.replaceState({}, document.title, window.location.pathname);
    };

    render() {
        const { auth0Client, isLoading, isAuthenticated, user } = this.state;
        const { children } = this.props;

        const configObject = {
            isLoading,
            isAuthenticated,
            user,
            loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
            getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
            getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
            logout: (...p) => auth0Client.logout(...p)
          };

        return (
            <Auth0Context.Provider value={configObject}>
                {children}
            </Auth0Context.Provider>
        );
    }
}