import React, {Component} from "react";
class Education extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Education</span>
                                <h2 className="colorlib-heading animate-box">Education</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist"
                                         aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       data-parent="#accordion" href="#collapseTwo"
                                                       aria-expanded="false" aria-controls="collapseTwo">Master's In Computer Science, Northeastern, Boston
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>I am currently pursuing my masters from <strong><a target={"_blank"}
                                                                                   rel="noopener noreferrer"
                                                                                   href={"https://www.khoury.northeastern.edu/"}>Northeastern University, Boston</a></strong> with a GPA of <strong>4.0/4.0</strong>.</p>
                                                    <p>During these years, I have undertaken various courses to broaden my domain : </p>
                                                    <ul>
                                                        <li>Program Design Paradigm</li>
                                                        <li>Database Management Systems</li>
                                                        <li>Foundations of Artificial Intelligence</li>
                                                        <li>Algorithms</li>
                                                        <li>Web Development</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFive">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       data-parent="#accordion" href="#collapseFive"
                                                       aria-expanded="false" aria-controls="collapseFive">Bachelor's In Computer Science, PEC, India
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingFive">
                                                <div className="panel-body">
                                                    <p>I did my undergraduate from <strong><a target={"_blank"}
                                                                                          rel="noopener noreferrer"
                                                                                          href={"https://pec.ac.in/"}>Punjab Engineering College, Chandigarh, India</a></strong> with a GPA of <strong> 3.7/4</strong>.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Education;