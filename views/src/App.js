import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Wrapper from "./components/Wrapper/wrapper";
 
function App() {
    return (
        <Router>
            <Wrapper>
                <div>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/home" component={Home} />
                        <Route component={Login} />
                    </Switch>
                </div>
            </Wrapper>
        </Router>
    );
}

export default App;