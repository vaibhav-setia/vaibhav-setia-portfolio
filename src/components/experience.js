import React, {Component} from 'react'
import experiences from "../data/experiences";

class Experience extends Component {
    render() {
        const {title, duration, icon, brief, desc, extra, w, h} = this.props.experience;
        console.log(icon)
        return (
            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                        {/* <i className="icon-pen2"/> */}
                        <img src={`../images/${icon}`} alt='mySvgImage' height={w} width={h}/>
                        {/* <img src={require(`../${icon}`).default} alt='mySvgImage' height={20} width={20}/> */}
                    </div>
                    <div className="timeline-label">
                        <h2>{title} <span>{duration}</span></h2>
                        <p>
                            {brief}
                            <ul style={{listStyle: 'circle'}}>
                                {
                                    desc.map((listItem, index) => (
                                        <li key={index}>{listItem}</li>
                                    ))
                                }
                            </ul>
                        </p>
                        {extra !== null ? <p>{extra}</p> : null}
                    </div>
                </div>
            </article>
        )
    }
};

export default class Experiences extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">experience</span>
                                <h2 className="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    {
                                        experiences.map((experience, index) => (
                                            <Experience experience={experience} key={index}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
