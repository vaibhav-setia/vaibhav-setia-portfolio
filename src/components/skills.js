import React, {Component} from 'react';
import skills from "../data/skills";

class Skills extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Specialty</span>
                                <h2 className="colorlib-heading animate-box">My Skills</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <p><strong>Languages:</strong> Java, Python, C, C++, JavaScript, HTML, CSS, PHP</p>
                                <p><strong>Tools & Platforms:</strong> Git, Postman, AWS, Kafka, Docker, Kubernetes, Jenkins </p>
                                <p><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL, ElasticSearch </p>
                                <p><strong>Frameworks:</strong> Spring Boot, React, Node.js, Angular, Kibana, Django, Junit, Hadoop, OpenCV </p>
                            </div>
                            {
                                skills.map((skill, index) => (
                                    <div key={skill.name} className="col-md-6 animate-box"
                                         data-animate-effect="fadeInLeft">
                                        <div className="progress-wrap">
                                            <h3>{skill.name}</h3>
                                            <div className="progress">
                                                <div className={`progress-bar color-${index + 1}`} role="progressbar"
                                                     aria-valuenow={skill.prof}
                                                     aria-valuemin="0" aria-valuemax="100"
                                                     style={{width: `${skill.prof}%`}}>
                                                    <span>{skill.prof}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;