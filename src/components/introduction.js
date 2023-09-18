import React, {Component} from 'react'

export default class Introduction extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{backgroundImage: 'url(images/vb.png)'}}>
                                <div className="overlay"/>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div
                                            className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1>Hi! <br/>I'm Vaibhav</h1>
                                                    <p><a className="btn btn-primary btn-learn"
                                                          href={'/files/vaibhav_setia_resume.pdf'} target="_blank"
                                                          rel="noopener noreferrer">View Resume<i
                                                        className="icon-download4"/></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{backgroundImage: 'url(images/dn.png)'}}>
                                <div className="overlay"/>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div
                                            className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner" style={{color: 'white'}}>
                                                <div className="desc">
                                                    <h1 style={{color: 'white'}}>I love building<br/> THINGS !!</h1>
                                                    <p><a className="btn btn-primary btn-learn"
                                                          href="https://github.com/vaibhav-setia?tab=repositories"
                                                          target="_blank"
                                                          rel="noopener noreferrer"
                                                          style={{color: 'white', borderColor: 'white'}}
                                                    >View Projects <i
                                                        className="icon-briefcase3"/></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
