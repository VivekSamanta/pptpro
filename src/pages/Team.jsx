import React from 'react'
import Header from '../components/Header'
import Popup from '../components/Popup'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

function Team() {
  return (
    <div>

        <Helmet>
            <title>PPTPRO | Team</title>
        </Helmet>

        <Header />

        <Popup />

        <Sidebar />

        

        <section className="page-header" data-background="assets/img/bg-img/page-header-bg.jpg">
            <div className="overlay"></div>
            <div className="shapes">
                <div className="shape shape-1"><img src="assets/img/shapes/page-header-shape-1.png" alt="shape" /></div>
                <div className="shape shape-2"><img src="assets/img/shapes/page-header-shape-2.png" alt="shape" /></div>
                <div className="shape shape-3"><img src="assets/img/shapes/page-header-shape-3.png" alt="shape" /></div>
            </div>
            <div className="container">
                <div className="page-header-content text-center">
                    <h1 className="title">Team Members</h1>
                    <h4 className="sub-title"><a className="home" href="/">Home </a><a className="inner-page" href="team">Our Team</a></h4>
                </div>
            </div>
        </section>
        

        <section className="team-section pt-130 pb-130">
            <div className="container">
                <div className="row gy-5 fade-wrapper">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item fade-top">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-1.png" alt="team" />
                                <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="/">Charlotte Amitina</a></h3>
                                <span>Ui/Ux Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item fade-top">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-2.png" alt="team" />
                                <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="/">William Edward</a></h3>
                                <span>Project Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item fade-top">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-3.png" alt="team" />
                                <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="/">Hannah Chloe</a></h3>
                                <span>Product Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item fade-top">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-4.png" alt="team" />
                                <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="/">Maiselan Willam</a></h3>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item fade-top">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-5.png" alt="team" />
                                <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="/">Sophia Williams</a></h3>
                                <span>Ui/Ux Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item fade-top">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-6.png" alt="team" />
                                <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="/">Isabella Anderson</a></h3>
                                <span>Project Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item fade-top">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-7.png" alt="team" />
                                <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="/">Jonathan Clark</a></h3>
                                <span>Product Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item fade-top">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-8.png" alt="team" />
                                <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="/">Amelia Clark</a></h3>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <Footer />
        
    </div>
  )
}

export default Team
