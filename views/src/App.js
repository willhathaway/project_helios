import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper/wrapper";
import 'bulma/css/bulma.css';
import { useAuth0 } from "./contexts/auth0-context";
import Header from './components/Header/header';

function App() {

    const { isLoading, user, loginWithRedirect } = useAuth0();

    return (

        <Router>
            <Wrapper>
            <>
      <Header />

        <div className="hero-body">
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