// dependencies:
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper/wrapper";
import 'bulma/css/bulma.css';
import { useAuth0 } from "./contexts/auth0-context";
import Header from './components/Header/header';

// function containing the page, to be rendered on login:
function App() {

    // dependencies from auth0 authentication:
    const { isLoading, user, loginWithRedirect } = useAuth0();

    // styles for header:
    const appStyle = {
        margin: '0',
        height: '90%',
        overflow: 'hidden'
    }

    return (

        <Router>
            <Wrapper>
                <>
                    <Header />

                    <div className="hero-body" style={appStyle}>
                        <div className="container has-text-centered">
                            {!isLoading && !user && (
                                <>
                                    <button onClick={loginWithRedirect} className="button is-danger">
                                        login
              </button>
                                </>
                            )}
                            {!isLoading && user && (

                                <Home />

                            )}
                        </div>
                    </div>
                </>

            </Wrapper>
        </Router >
    );
}

export default App;