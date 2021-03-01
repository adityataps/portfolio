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
// import arc from './components/media/arc.jpg'
// import beach from './components/media/barca-beach.jpg'
// import city from './components/media/barca-city.jpg'
// import goth from './components/media/gothic-q.jpg'
// import me from './components/media/me.png'
// import name from './components/media/name.png'
// import switz from './components/media/switz.jpg'

function App() {

    const [data, setData] = useState({ posts: null, projects: null})
    // const imgs = [
    //     arc, beach, city, goth, me, name, switz
    // ]

    useEffect(() => {

        // imgs.forEach((picture) => {
        //     new Image().src = picture.fileName
        // })

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
                                    <About />
                                </DesktopScreen>
                            )} />
                            <Route path={"/blog/:post"} exact render={() => (
                                <DesktopScreen>
                                    <Blog data={data.posts}/>
                                </DesktopScreen>
                            )} />
                            <Route path={"/blog"} render={() => (
                                <DesktopScreen>
                                    <Blog data={data.posts}/>
                                </DesktopScreen>
                            )} />
                            <Route path={"/projects"} render={() => (
                                <DesktopScreen>
                                    <Projects data={data.projects}/>
                                </DesktopScreen>
                            )} />
                            <Route path={"/resume"} render={() => (
                                <DesktopScreen>
                                    <Resume />
                                </DesktopScreen>
                            )} />
                            <Route path={"/contact"} render={() => (
                                <DesktopScreen>
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