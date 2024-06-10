import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Popup from '../components/Popup'
import Sidebar from '../components/Sidebar'
import Preloader from '../components/Preloader'

function Blogdetails() {
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
                    <h1 className="title">Blog Details</h1>
                    <h4 className="sub-title"><a className="home" href="/">Home </a><span></span><a className="inner-page" href="blogdetails"> Blog Details</a></h4>
                </div>
            </div>
        </section>
        

        <section className="blog-details pt-130 pb-130">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-details-wrap">
                            <div className="blog-details-img mb-40">
                                <img src="assets/img/blog/blog-details-img.png" alt="blog" />
                            </div>
                            <ul className="post-meta">
                                <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                            </ul>
                            <div className="blog-details-content">
                                <h2 className="details-title mb-25">Strategies for Effective Web Design by Our Agency</h2>
                                <p className="mb-40">In the dynamic world of web design, where first impressions are currency and user experience reigns supreme, our agency has honed a repertoire of strategies that redefine digital landscapes. Our commitment to creating effective web design goes beyond aesthetics; it encompasses user-centricity, innovation, and a profound understanding of your brand. Discover the intricate strategies that propel our agency's expertise in crafting web experiences that captivate and convert:</p>
                                <blockquote className="mb-40">
                                    <div className="icon"><i className="fa-light fa-quote-right"></i></div>
                                    <div className="content">
                                        <p>“Primis inceptos phasellus commodo conubia blandit  neque quis, mi suspendisse vivamus cum dapibus”</p>
                                        <h4 className="author">Monalisa Saisha</h4>
                                    </div>
                                </blockquote>
                                <h2 className="details-title mb-25">Holistic User-Centric Approach:</h2>
                                <p>Effective web design starts with understanding your audience's desires, pain points, and behavior. Our agency delves deep into user research to develop a comprehensive understanding that forms the foundation of our design decisions. Seamless navigation is key to engagement.</p>
                                <div className="details-img-wrap mt-40 mb-40">
                                    <img src="assets/img/blog/blog-details-img-1.png" alt="blog" />
                                    <img src="assets/img/blog/blog-details-img-2.png" alt="blog" />
                                </div>
                                <p className="mb-40">We meticulously organize content, creating intuitive pathways that lead users to their desired destinations effortlessly. Our information architecture is a symphony of clarity and convenience. Visuals transcend words. We employ visual storytelling that resonates with your brand's narrative, evoking emotions and forging an authentic connection with your audience. Our designs weave a visual tale that lingers in memory.</p>
                                <div className="blog-details-thumb mb-40">
                                    <img src="assets/img/blog/blog-details-img-3.png" alt="blog" />
                                </div>
                                <p className="mb-50">where online presence defines success, our agency stands at the forefront of crafting web experiences that transcend mere aesthetics. Our web design strategies are built upon a foundation of user-centricity, innovation, and a deep understanding of your brand.</p>
                            </div>
                            <div className="tags">
                                <div className="tag-left">
                                    <ul className="tag-list">
                                        <li><a href="/">Technology</a></li>
                                        <li><a href="/">Repair</a></li>
                                        <li><a href="/">Services</a></li>
                                    </ul>
                                </div>
                                <div className="social-list-wrap">
                                    <h4 className="follow">Follow Us:</h4>
                                    <ul className="social-list">
                                        <li>
                                            <a href="/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="/" className="twitter"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="/" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a href="/" className="instagram"><i className="fab fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog-author-wrap">
                                <div className="blog-author-item">
                                    <div className="author-img">
                                        <img src="assets/img/blog/author-img.png" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h3 className="name">About Auhor</h3>
                                        <p>Optimize resource eveling innoaion whereas visionary value Comlingly engage extensible process with business process improvements solution program make it easy.</p>
                                        <ul className="social-list">
                                            <li>
                                                <a href="/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a href="/" className="twitter"><i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="/" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                            <li>
                                                <a href="/" className="instagram"><i className="fab fa-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-area">
                                <div className="section-heading">
                                    <h2 className="section-title">Comments (3)</h2>
                                </div>
                                <div className="comment-item">
                                    <div className="comment-thumb">
                                        <img src="assets/img/blog/comment-thumb-1.jpg" alt="author" />
                                    </div>
                                    <div className="comment-info">
                                        <div className="comments-meta">
                                            <span><i className="fa-light fa-circle-user"></i>10 Dec, 2023 </span>
                                        </div>
                                        <h3 className="author">Daniel Adam </h3>
                                        <p>
                                            Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug and play markets whereas synergistic scenarios.
                                        </p>
                                        <button className="reply">Reply<i className="fa-solid fa-reply"></i></button>
                                    </div>
                                </div>
                                <div className="comment-item item-2">
                                    <div className="comment-thumb">
                                        <img src="assets/img/blog/comment-thumb-2.jpg" alt="author" />
                                    </div>
                                    <div className="comment-info">
                                        <div className="comments-meta">
                                            <span><i className="fa-light fa-circle-user"></i>10 Dec, 2023 </span>
                                        </div>
                                        <h3 className="author">Daniel Adam </h3>
                                        <p>
                                            Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate.
                                        </p>
                                        <button className="reply">Reply<i className="fa-solid fa-reply"></i></button>
                                    </div>
                                </div>
                                <div className="comment-item">
                                    <div className="comment-thumb">
                                        <img src="assets/img/blog/comment-thumb-3.jpg" alt="author" />
                                    </div>
                                    <div className="comment-info">
                                        <div className="comments-meta">
                                            <span><i className="fa-light fa-circle-user"></i>10 Dec, 2023 </span>
                                        </div>
                                        <h3 className="author">Daniel Adam </h3>
                                        <p>
                                            Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug and play markets whereas synergistic scenarios.
                                        </p>
                                        <button className="reply">Reply<i className="fa-solid fa-reply"></i></button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-wrap pt-70">
                                <div className="blog-contact-form">
                                    <h2 className="title">Leave A Reply</h2>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <div className="request-form">
                                        <form action="mail.php" method="post" id="ajax_contact" className="form-horizontal">
                                            <div className="form-group row">
                                                <div className="col-md-6">
                                                    <div className="form-item">
                                                        <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Your Name" />
                                                        <div className="icon"><i className="fa-regular fa-user"></i></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-item">
                                                        <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" />
                                                        <div className="icon"><i className="fa-sharp fa-regular fa-envelope"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <div className="form-item">
                                                        <div className="nice-select select-control form-control country" tabindex="0"><span className="current">Select Queary Topic</span><ul className="list"><li data-value="" className="option selected focus">Select Queary Topic</li><li data-value="vdt" className="option">Plan One</li><li data-value="can" className="option">Plan Two</li><li data-value="uk" className="option">Plan Three</li></ul></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <div className="form-item message-item">
                                                        <textarea id="message" name="message" cols="30" rows="5" className="form-control address" placeholder="Message"></textarea>
                                                        <div className="icon"><i className="fa-light fa-messages"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="submit-btn">
                                                <button id="submit" className="rr-primary-btn" type="submit">Submit Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="sidebar-widget blog-author text-center">
                            <img src="assets/img/blog/blog-author-img.png" alt="img" />
                            <h3 className="name">James W. David</h3>
                            <p>We denounce with righteous indignation <br />dislike beguiled and demoralized</p>
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
                        <div className="sidebar-widget">
                            <h3 className="widget-title">Category</h3>
                            <ul className="category-list">
                                <li><a href="/">Web Development<i className="fa-sharp fa-regular fa-arrow-right"></i></a></li>
                                <li><a href="/">Digital Marketing<i className="fa-sharp fa-regular fa-arrow-right"></i></a></li>
                                <li><a href="/">Business Solution<i className="fa-sharp fa-regular fa-arrow-right"></i></a></li>
                                <li><a href="/">Content Strategy<i className="fa-sharp fa-regular fa-arrow-right"></i></a></li>
                                <li><a href="/">Software Design<i className="fa-sharp fa-regular fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                        <div className="sidebar-widget">
                            <h3 className="widget-title">Recent Post</h3>
                            <div className="sidebar-post">
                                <img src="assets/img/blog/sidebar-thumb-1.png" alt="post" />
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-light fa-circle-user"></i>by David Smith</li>
                                    </ul>
                                    <h3 className="title"><a href="/">How to Start  Creative Agency & Get Ahead</a></h3>
                                </div>
                            </div>
                            <div className="sidebar-post">
                                <img src="assets/img/blog/sidebar-thumb-2.png" alt="post" />
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-light fa-circle-user"></i>by David Smith</li>
                                    </ul>
                                    <h3 className="title"><a href="/">Technical Wizardry of Our Web Design Agency</a></h3>
                                </div>
                            </div>
                            <div className="sidebar-post">
                                <img src="assets/img/blog/sidebar-thumb-3.png" alt="post" />
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-light fa-circle-user"></i>by David Smith</li>
                                    </ul>
                                    <h3 className="title"><a href="/">Adaptable & Accessible Design by Our Web Design Agency</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-widget sticky-widget">
                            <h3 className="widget-title">Tags</h3>
                            <ul className="tags">
                                <li><a href="/">3D Design</a></li>
                                <li><a href="/">Product Design</a></li>
                                <li><a href="/">Tips</a></li>
                                <li><a href="/">Marketing</a></li>
                                <li><a href="/">UI/UX Design</a></li>
                                <li><a href="/">Development</a></li>
                                <li><a href="/">Speed</a></li>
                                <li><a href="/">Mobile App</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <Footer />
        
    </div>
  )
}

export default Blogdetails
