import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about';
import Skills from './components/skills';
import Education from './components/education';
import Experiences from './components/experience'
import Projects from "./components/projects";
import Contact from "./components/contact";
import Achievements from "./components/achievements";
import Interests from "./components/interests";

class App extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar/>
                    <div id="colorlib-main">
                        <Introduction/>
                        <About/>
                        <Interests/>
                        <Skills/>
                        <Education/>
                        <Experiences/>
                        <Projects/>
                        <Achievements/>
                        <Contact/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
