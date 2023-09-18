import React, {Component} from "react";
import interests from "../data/interests";

class Interests extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section={'interests'}>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">My Interests & Expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            {
                                interests.map((interest, index) => (
                                    <div key={interest.name} className="col-12 text-center animate-box">
                                        <div className={`services color-${(index % 6) + 1}`}>
                                            <span className="icon">
                                                <i className={interest.icon}/>
                                            </span>
                                            <div className="desc">
                                                <h3>{interest.name}</h3>
                                                <p>{interest.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Interests;