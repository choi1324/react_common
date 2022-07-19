import React, { Fragment } from "react";
import Header from "@/layouts/Header";
import Router from "@/pages/Router";
import Navigation from "@/layouts/Navigation";

import '@/assets/css/default.css'

function App () {
    return (
        <Fragment>
            <Header />
            <Navigation />
            <div id="main">
                <Router />
            </div>
        </Fragment>
    )
}

export default App;