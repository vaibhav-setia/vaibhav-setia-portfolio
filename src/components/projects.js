import React, {Component} from 'react';
import projects from "../data/projects";

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            {
                                projects.map((project, index) => (
                                    <div key={project.title} className="col-md-6 animate-box"
                                         data-animate-effect="fadeInRight">
                                        <div className="project"
                                             style={{backgroundImage: `url(./images/${project.image})`}}>
                                            <div className="desc">
                                                <div className="con">
                                                    <h2>{project.title}</h2>
                                                    <span>{project.domain}</span>
                                                    <p className="icon">
                                                        <span><a href={project.link} target={'_blank'}
                                                                 rel="noopener noreferrer"><i className="icon-github"/>  Project Link</a></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <p><a href="https://github.com/vaibhav-setia?tab=repositories" target="_blank"
                                      rel="noopener noreferrer" className="btn btn-primary btn-lg btn-load-more">View
                                    More <i
                                        className="icon-github"/></a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
