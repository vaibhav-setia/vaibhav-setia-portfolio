import React, {Component} from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
                         data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{backgroundImage: 'url(images/profile-pic-2.png)'}}/>
                            <h1 id="colorlib-logo"><a href="/">Vaibhav Setia</a></h1>
                            <span className="email"><i className="icon-mail"/>setia.v@northeastern.edu</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#about" data-nav-section="about">About</a></li>
                                    <li><a href="#interests" data-nav-section="interests">Interests</a></li>
                                    <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                                    <li><a href="#education" data-nav-section="education">Education</a></li>
                                    <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                                    <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                                    <li><a href="#achievements" data-nav-section="achievements">Achievements</a></li>
                                    <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://github.com/vaibhav-setia" target="_blank"
                                       rel="noopener noreferrer"><i className="icon-github"/></a></li>
                                <li><a href="https://www.linkedin.com/in/vaibhav-setia/" target="_blank"
                                       rel="noopener noreferrer"><i className="icon-linkedin2"/></a></li>
                                       <li><a href="https://leetcode.com/vaibhav_wimpsta/" target="_blank"
                                       rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                                       </a></li>
                                <li>
                                <a href="/files/Vaibhav_Setia_Resume.pdf" target="_blank"
                                       rel="noopener noreferrer">
                                                RESUME
                                        </a>
                                </li>
                                {/* <li><a href="https://www.instagram.com//" target="_blank"
                                       rel="noopener noreferrer"><i className="icon-instagram"/></a></li>
                                <li><a href="https://twitter.com//" target="_blank"
                                       rel="noopener noreferrer"><i className="icon-twitter2"/></a></li> */}
                            </ul>
                        </nav>
                        <div className="colorlib-footer">
                            <p><small>
                                Made with <i className="icon-heart" aria-hidden="true"/> and <i className="icon-beer"
                                                                                                aria-hidden="true"/><br></br>
                                Thanks <a href="https://colorlib.com" target="_blank"
                                          rel="noopener noreferrer">Colorlib</a> for inspiration
                            </small></p>
                            <p><small>
                                {/*Something coming soon !!*/}
                            </small></p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}
