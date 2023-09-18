import React, {Component} from "react";
import achievements from "../data/achievements";

class Achievements extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section={'achievements'}>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Honours</span>
                                <h2 className="colorlib-heading">My Achievements</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            {
                                achievements.map(({title, time, place, description}, index) => (
                                    <div key={title} className="col-12 text-center animate-box">
                                        <div className={`services color-${(index % 6) + 1}`}>
                                            <div className="desc">
                                                <h2>{title}</h2>
                                                <h4>{time} &bull; {place}</h4>
                                                <hr/>
                                                <p>{description}</p>
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

export default Achievements;