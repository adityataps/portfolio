import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import DesktopScreen from './components/common/elements/desktopScreen'
import About from "./components/screens/about/about";
import Blog from "./components/screens/blog/blog";
import Contact from "./components/screens/contact/contact";
import Home from "./components/screens/home/home";
import NotFound from "./components/screens/notFound/notFound";
import Projects from "./components/screens/projects/projects";
import Resume from "./components/screens/resume/resume";
import Test from "./components/screens/test/test";
import axios from "axios";
import NavBar from "./components/common/elements/navbar";

function App() {

    const [data, setData] = useState({ posts: null, projects: null})

    useEffect(() => {

        const fetchAll = async () => {
            const gotPosts = await axios(
                // process.env.PUBLIC_URL + "/api/blogposts/"
                "http://localhost:8000/api/blogposts/"

            )
            const gotProjects = await axios(
                // process.env.PUBLIC_URL + "/api/projects/"
                "http://localhost:8000/api/projects/"

            )

            setData({posts: gotPosts.data, projects: gotProjects.data})
        }

        fetchAll();
    }, []);

    if (data.posts !== null && data.projects !== null) {
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

    return null

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
                                <DesktopScreen>
                                    <Home />
                                </DesktopScreen>
                            )} />
                            <Route path={"/about"} render={() => (
                                <DesktopScreen>
                                    <NavBar style={{position: "sticky"}} />
                                    <About />
                                </DesktopScreen>
                            )} />
                            <Route path={"/blog#[^\\n]+"} exact render={() => (
                                <DesktopScreen>
                                    <NavBar style={{position: "sticky"}} />
                                    <Blog data={data.posts}/>
                                </DesktopScreen>
                            )} />
                            <Route path={"/blog"} render={() => (
                                <DesktopScreen>
                                    <NavBar style={{position: "sticky"}} />
                                    <Blog data={data.posts}/>
                                </DesktopScreen>
                            )} />
                            <Route path={"/projects"} render={() => (
                                <DesktopScreen>
                                    <NavBar style={{position: "sticky"}} />
                                    <Projects data={data.projects}/>
                                </DesktopScreen>
                            )} />
                            <Route path={"/resume"} render={
                                () => (
                                <DesktopScreen>
                                    <NavBar style={{position: "sticky"}} />
                                    <Resume />
                                </DesktopScreen>
                            )} />
                            <Route path={"/contact"} render={() => (
                                <DesktopScreen>
                                    <NavBar style={{position: "sticky"}} />
                                    <Contact />
                                </DesktopScreen>
                            )} />
                            <Route path={"/test"} render={() => (
                                <DesktopScreen>
                                    <Test />
                                </DesktopScreen>
                            )} />
                            <Route path={"/"} render={() => (
                                <DesktopScreen>
                                    <NotFound />
                                </DesktopScreen>
                            )} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    )
}

export default App;