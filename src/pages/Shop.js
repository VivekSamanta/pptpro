import React from 'react'
import SvgIcon from './Svg'

function Shop() {
  return (
    <div>
      
        
        <header className="header sticky-active">
            <div className="primary-header">
                <div className="primary-header-inner">
                    <div className="header-logo d-lg-block">
                        <a href="index.html">
                            <img src="assets/img/logo/logo-2.png" alt="Logo" />
                        </a>
                    </div>
                    <div className="header-right-wrap">
                        <div className="header-menu-wrap">
                            <div className="mobile-menu-items">
                                <ul>
                                    <li className="menu-item-has-children">
                                        <a href="index.html">Home</a>
                                        <ul>
                                            <li><a href="index.html">Web Design</a></li>
                                            <li><a href="index-2.html">Creative Studio</a></li>
                                            <li><a href="index-3.html">Web Development</a></li>
                                            <li><a href="index-4.html">Modern Agency</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Pages</a>
                                        <ul>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="team-details.html">Team Details</a></li>
                                            <li><a href="project.html">Portfolio</a></li>
                                            <li><a href="project-details.html">Portfolio Details</a></li>
                                            <li><a href="pricing.html">Pricing Plans</a></li>
                                            <li><a href="faq.html">Faq</a></li>
                                            <li><a href="error.html">404 Error</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="service.html">Services</a>
                                        <ul>
                                            <li><a href="service.html">Service</a></li>
                                            <li><a href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children active">
                                        <a href="shop.html">Shop</a>
                                        <ul>
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="shop-details.html">Shop Details</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="blog-grid.html">Blog</a>
                                        <ul>
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            <li><a href="blog-grid-2.html">Blog list</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="header-right">
                            <div className="sidebar-icon">
                                <button className="sidebar-trigger open">
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.300781 0H5.30078V5H0.300781V0Z" fill="currentColor"/>
                                        <path d="M0.300781 9H5.30078V14H0.300781V9Z" fill="currentColor"/>
                                        <path d="M0.300781 18H5.30078V23H0.300781V18Z" fill="currentColor"/>
                                        <path d="M9.30078 0H14.3008V5H9.30078V0Z" fill="currentColor"/>
                                        <path d="M9.30078 9H14.3008V14H9.30078V9Z" fill="currentColor"/>
                                        <path d="M9.30078 18H14.3008V23H9.30078V18Z" fill="currentColor"/>
                                        <path d="M18.3008 0H23.3008V5H18.3008V0Z" fill="currentColor"/>
                                        <path d="M18.3008 9H23.3008V14H18.3008V9Z" fill="currentColor"/>
                                        <path d="M18.3008 18H23.3008V23H18.3008V18Z" fill="currentColor"/>
                                        </svg>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </header>
        

        <div id="popup-search-box">
            <div className="box-inner-wrap d-flex align-items-center">
                <form id="form" action="#" method="get" role="search">
                    <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
                </form>
                <div className="search-close"><i className="fa-sharp fa-regular fa-xmark"></i></div>
            </div>
        </div>
        

        <div id="sidebar-area" className="sidebar-area">
            <button className="sidebar-trigger close">
                <SvgIcon />
            </button>
            <div className="side-menu-content">
                <div className="side-menu-logo">
                    <a href="index.html"><img src="assets/img/logo/logo-2.png" alt="logo" /></a>
                </div>
                <div className="side-menu-wrap"></div>
                <div className="side-menu-about">
                    <div className="side-menu-header">
                        <h3>About Us</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="contact.html" className="rr-primary-btn">Contact Us</a>
                </div>
                <div className="side-menu-contact">
                    <div className="side-menu-header">
                        <h3>Contact Us</h3>
                    </div>
                    <ul className="side-menu-list">
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <p>Valentin, Street Road 24, New York, </p>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <a href="tel:+000123456789">+000 123 (456) 789</a>
                        </li>
                        <li>
                            <i className="fas fa-envelope-open-text"></i>
                            <a href="mailto:runokcontact@gmail.com">runokcontact@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <ul className="side-menu-social">
                    <li className="facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="instagram"><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li className="twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="g-plus"><a href="#"><i className="fab fa-fab fa-google-plus"></i></a></li>
                </ul>
            </div>
        </div>
        

        <div id="preloader">
            <div className="preloader-close">X</div>
            <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
            </div>
        </div>
        

        <section className="page-header" data-background="assets/img/bg-img/page-header-bg.jpg">
            <div className="overlay"></div>
            <div className="shapes">
                <div className="shape shape-1"><img src="assets/img/shapes/page-header-shape-1.png" alt="shape" /></div>
                <div className="shape shape-2"><img src="assets/img/shapes/page-header-shape-2.png" alt="shape" /></div>
                <div className="shape shape-3"><img src="assets/img/shapes/page-header-shape-3.png" alt="shape" /></div>
            </div>
            <div className="container">
                <div className="page-header-content text-center">
                    <h1 className="title">Our Shop Pages</h1>
                    <h4 className="sub-title"><a className="home" href="index.html">Home </a><span></span><a className="inner-page" href="shop.html"> Our Shop Page</a></h4>
                </div>
            </div>
        </section>
        

        <section className="shop-section pt-130 pb-130">
            <div className="container">
                <div className="shop-top heading-space">
                    <span className="left-content">Showing 1 - 12 of 30 Results</span>
                    <div className="nice-select select-control country" tabIndex="0"><span className="current">Short by Category</span><ul className="list"><li data-value="" className="option selected focus">Short by Category</li><li data-value="vdt" className="option">Plan One</li><li data-value="can" className="option">Plan Two</li><li data-value="uk" className="option">Plan Three</li></ul></div>
                </div>
                <div className="row gy-4">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-1.png" alt="shop" />
                                <span className="sale">sale</span>
                                <ul className="shop-list">
                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Watch Series</span>
                                <h3 className="title"><a href="shop-details.html">Multiply Tokon Maxer</a><span> <span className="offer">$350.00</span>$250.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-2.png" alt="shop" />
                                <ul className="shop-list">
                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Headphone Box</span>
                                <h3 className="title"><a href="shop-details.html">Boat Headphone</a><span>$350.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-3.png" alt="shop" />
                                <span className="sale">sale</span>
                                <ul className="shop-list">
                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">UPS Service</span>
                                <h3 className="title"><a href="shop-details.html">Latest Ups available</a><span> <span className="offer">$250.00</span>$157.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-4.png" alt="shop" />
                                <ul className="shop-list">
                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Headphone Box</span>
                                <h3 className="title"><a href="shop-details.html">Beats Headset</a><span>$342.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-5.png" alt="shop" />
                                <ul className="shop-list">
                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Watch Series</span>
                                <h3 className="title"><a href="shop-details.html">Multiply Tokon Maxer</a><span>$223.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-6.png" alt="shop" />
                                <span className="sale">sale</span>
                                <ul className="shop-list">
                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Headphone Box</span>
                                <h3 className="title"><a href="shop-details.html">Boat Headphone</a><span> <span className="offer">$600.00</span>$421.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-7.png" alt="shop" />
                                <ul className="shop-list">
                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">UPS Service</span>
                                <h3 className="title"><a href="shop-details.html">Latest Ups available</a><span>$153.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-8.png" alt="shop" />
                                <span className="sale">sale</span>
                                <ul className="shop-list">
                                    <li><a href="#"><i className="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Headphone Box</span>
                                <h3 className="title"><a href="shop-details.html">Beats Headset</a><span><span className="offer">$400.00</span>$230.00</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <footer className="footer-section bg-dark-1">
            <div className="shape"><img src="assets/img/shapes/footer-shape.png" alt="footer" /></div>
            <div className="container">
                <div className="row footer-wrap">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <div className="widget-header">
                                <div className="footer-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo-2.png" alt="logo" /></a>
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
                            <p>© 2024 Runok. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="social-list">
                                <li className="facebook">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="pinterest">
                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                </li>
                                <li className="twitter">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="instagram">
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        

        <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>
    
    </div>
  )
}

export default Shop
