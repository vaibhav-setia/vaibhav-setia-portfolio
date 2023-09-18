import React, {Component} from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-contact" data-section="contact">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Get in Touch</span>
                                <h2 className="colorlib-heading">Contact</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="colorlib-feature colorlib-feature-sm animate-box"
                                     data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-mail"/>
                                    </div>
                                    <div className="colorlib-text">
                                        <p><a href={"mailto:vaibhav.ms2022@gmail.com"}>vaibhav.ms2022@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="colorlib-feature colorlib-feature-sm animate-box"
                                     data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-phone"/>
                                    </div>
                                    <div className="colorlib-text">
                                        <p><a href={"tel:+18573135023"}>+1 8573135023</a></p>
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

export default Contact;