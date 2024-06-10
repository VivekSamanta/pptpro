import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Popup from '../components/Popup'
import Sidebar from '../components/Sidebar'
import Preloader from '../components/Preloader'

function Blog() {
  return (
    <div>
      
        <Header />

        <Popup />

        <Sidebar />

        <Preloader />

        <section className="page-header" data-background="assets/img/bg-img/page-header-bg.jpg">
            <div className="overlay"></div>
            <div className="shapes">
                <div className="shape shape-1"><img src="assets/img/shapes/page-header-shape-1.png" alt="shape" /></div>
                <div className="shape shape-2"><img src="assets/img/shapes/page-header-shape-2.png" alt="shape" /></div>
                <div className="shape shape-3"><img src="assets/img/shapes/page-header-shape-3.png" alt="shape" /></div>
            </div>
            <div className="container">
                <div className="page-header-content text-center">
                    <h1 className="title">Blog</h1>
                    <h4 className="sub-title"><a className="home" href="/">Home </a><span></span><a className="inner-page" href="blog"> Blog </a></h4>
                </div>
            </div>
        </section>
        

        <section className="blog-section pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="grid-post-wrap-2">
                            <div className="post-card-2 card-3 inner-blog-2">
                                <div className="post-thumb">
                                    <img src="assets/img/blog/grid-post-4.png" alt="post" />
                                </div>
                                <div className="post-content-wrap">
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                            <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                                        </ul>
                                        <h3 className="title"><a href="blogdetails">Unveiling the Strategies and Techniques that Define Agecis's Success"</a></h3>
                                        <p>Where online presence defines success, our agency stands at the forefront of crafting web experiences that transcend mere aesthetics. Our web design strategies are built upon a foundation of user-centricity, innovation, and a deep understanding of your brand.</p>
                                        <a href="blogdetails" className="rr-primary-btn">Read More <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-card-2 card-3 inner-blog-2">
                                <div className="post-thumb">
                                    <img src="assets/img/blog/grid-post-5.png" alt="post" />
                                </div>
                                <div className="post-content-wrap">
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                            <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                                        </ul>
                                        <h3 className="title"><a href="blogdetails">From Concept to Creation with Agecis's Web Design Wizards</a></h3>
                                        <p>Where online presence defines success, our agency stands at the forefront of crafting web experiences that transcend mere aesthetics. Our web design strategies are built upon a foundation of user-centricity, innovation, and a deep understanding of your brand.</p>
                                        <a href="blogdetails" className="rr-primary-btn">Read More <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-card-2 card-3 inner-blog-2">
                                <div className="post-thumb">
                                    <img src="assets/img/blog/grid-post-6.png" alt="post" />
                                </div>
                                <div className="post-content-wrap">
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                            <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                                        </ul>
                                        <h3 className="title"><a href="blogdetails">Exploring the Creative Process at Agecis Where Web Design Meets Imagination</a></h3>
                                        <p>Where online presence defines success, our agency stands at the forefront of crafting web experiences that transcend mere aesthetics. Our web design strategies are built upon a foundation of user-centricity, innovation, and a deep understanding of your brand.</p>
                                        <a href="blogdetails" className="rr-primary-btn">Read More <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-card-2 card-3 inner-blog-2">
                                <div className="post-thumb">
                                    <img src="assets/img/blog/grid-post-7.png" alt="post" />
                                </div>
                                <div className="post-content-wrap">
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                            <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                                        </ul>
                                        <h3 className="title"><a href="blogdetails">How Agecis Puts Your Audience First in Every Website Project</a></h3>
                                        <p>Where online presence defines success, our agency stands at the forefront of crafting web experiences that transcend mere aesthetics. Our web design strategies are built upon a foundation of user-centricity, innovation, and a deep understanding of your brand.</p>
                                        <a href="blogdetails" className="rr-primary-btn">Read More <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                    </div>
                                </div>
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

export default Blog
