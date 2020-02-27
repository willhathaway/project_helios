import React, { Component } from "react";
import Wrapper from "./components/Wrapper/wrapper";
import Day from "./components/Day/day";
import Header from "./components/Header/header";
import HourArray from "./HourArray.json";

class App extends Component {

    // constructor for storing local class variables:
    constructor(props) {
        super(props);
        this.state = {
            username: "Will",
            hourArray: HourArray
        };
    }

    render() {
        return (
            <Wrapper>

                <Header username={this.state.username} />

                <Day hourArray={this.state.hourArray} />

            </Wrapper>
        );
    }
}

export default App;
