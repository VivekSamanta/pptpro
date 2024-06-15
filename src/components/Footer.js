import React from 'react'

function Footer() {
  return (
    <>
        <footer className="footer-section bg-dark-1">
            <div className="shape"></div>
            <div className="container">
                <div className="row footer-wrap">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <div className="widget-header">
                                <div className="footer-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo-1.webp" alt="logo" /></a>
                                </div>
                            </div>
                            <p className="mb-20">Centric aplications productize before front end vortals visualize front end is results and value added</p>
                            <h4 className="title">WE ARE AVAILABLE <span>Mon-Sat: 09.00 am to 6.30 pm</span></h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget footer-col-2">
                            <div className="widget-header">
                                <h3 className="widget-title">Useful Links</h3>
                            </div>
                            <ul className="footer-list">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="project.html">Our Gallery</a></li>
                                <li><a href="service.html">Our Services</a></li>
                                <li><a href="team.html">Our Team</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <div className="widget-header">
                                <h3 className="widget-title">Contact Us</h3>
                            </div>
                            <ul className="address-list">
                                <li><a href="mailto:support@agency.com">support@agency.com</a></li>
                                <li><a href="tel:+2585492153215">+258 (549) 2158 3215</a></li>
                                <li>2589 Dorland Street Luke INUA <br /> Berlin, Germany</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <div className="widget-header">
                                <h3 className="widget-title">Subscribe newsletter</h3>
                            </div>
                            <div className="footer-form mb-20">
                                <form action="#" className="rr-subscribe-form">
                                    <input className="form-control" type="email" name="email" placeholder="Email address" />
                                    <input type="hidden" name="action" value="mailchimpsubscribe" />
                                    <button className="submit">Sign Up</button>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                            <div className="form-check form-item">
                                <input className="form-check-input" type="checkbox" value="" id="man" />
                                <label className="form-check-label" htmlFor="man">
                                    I’m okay with getting emails and having
                                    that tracked to improve my experience
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row copyright-content">
                        <div className="col-md-6">
                            <p>© 2024 PPTPRO. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="social-list">
                                <li className="facebook">
                                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="pinterest">
                                    <a href="/"><i className="fab fa-pinterest"></i></a>
                                </li>
                                <li className="twitter">
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="instagram">
                                    <a href="/"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>
        
    </>
  )
}

export default Footer
