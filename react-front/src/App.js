import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import About from "./components/screens/desktop/about";
import Blog from "./components/screens/desktop/blog";
import Contact from "./components/screens/desktop/contact";
import Home from "./components/screens/desktop/home";
import NotFound from "./components/screens/desktop/notFound";
import Projects from "./components/screens/desktop/projects";
import Resume from "./components/screens/desktop/resume";
import Test from "./components/screens/desktop/test";
import axios from "axios";

function App() {

    const [data, setData] = useState({ posts: null, projects: null})

    useEffect(() => {
        const fetchAll = async () => {
            const gotPosts = await axios(
                "http://127.0.0.1:8000/api/blogposts/"
            )
            const gotProjects = await axios(
                "http://127.0.0.1:8000/api/projects/"
            )

            setData({posts: gotPosts.data, projects: gotProjects.data})
        }

        fetchAll();
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <AnimationApp data={data}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

function AnimationApp(props) {

    let location = useLocation()
    const data = props.data

    return(
        <div>
            <div>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={500}
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
                                    <Blog data={data.posts}/>
                                </div>
                            )} />
                            <Route path={"/projects"} exact render={() => (
                                <div className={"page"}>
                                    <Projects data={data.projects}/>
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