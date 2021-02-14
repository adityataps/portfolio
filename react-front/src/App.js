import React, { useState } from 'react';
import './App.css';
import { NavLink, BrowserRouter, Route, Switch, useLocation, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import About from "./components/screens/desktop/about";
import Blog from "./components/screens/desktop/blog";
import Contact from "./components/screens/desktop/contact";
import Home from "./components/screens/desktop/home.";
import NotFound from "./components/screens/desktop/notFound";
import Projects from "./components/screens/desktop/projects";
import Resume from "./components/screens/desktop/resume";
import Test from "./components/screens/desktop/test";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <AnimationApp />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

function AnimationApp() {

    let location = useLocation()
    return(
        <div>
            <div>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames={"page"}
                        unmountOnExit
                    >
                        <Switch location={location}>
                            <Route path={"/"} exact render={() => (
                                <div className={"page"}>
                                    <Home />
                                </div>
                            )} />
                            <Route path={"/about"} exact render={() => (
                                <div className={"page"}>
                                    <About />
                                </div>
                            )} />
                            <Route path={"/blog"} exact render={() => (
                                <div className={"page"}>
                                    <Blog />
                                </div>
                            )} />
                            <Route path={"/projects"} exact render={() => (
                                <div className={"page"}>
                                    <Projects />
                                </div>
                            )} />
                            <Route path={"/resume"} exact render={() => (
                                <div className={"page"}>
                                    <Resume />
                                </div>
                            )} />
                            <Route path={"/contact"} exact render={() => (
                                <div className={"page"}>
                                    <Contact />
                                </div>
                            )} />
                            <Route path={"/test"} exact render={() => (
                                <div className={"page"}>
                                    <Test />
                                </div>
                            )} />
                            <Route path={"/"} render={() => (
                                <div className={"page"}>
                                    <NotFound />
                                </div>
                            )} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    )
}

export default App;