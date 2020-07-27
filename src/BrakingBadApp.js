import React, { Component } from "react";
import Banner from "./components/Banner";
import { Nav } from "./components/Nav";
import SearchManager from "./components/SearchManager";



class BrakingBadApp extends Component {
 
    render() {
        return <>
            <Banner />
            <Nav/>
            <SearchManager />
        </>;
    }
}

export default BrakingBadApp;