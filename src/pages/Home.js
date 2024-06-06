import React from 'react'
import SvgIcon from './Svg'
import { Link } from 'react-router-dom'

function Home() {
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
                                    <li className="menu-item-has-children active">
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
                                    <li>
                                        <Link to="shop">Shop</Link>
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
        

        <div className="mobile-side-menu">
            <div className="side-menu-content">
                <div className="side-menu-head">
                    <a href="index.html"><img src="assets/img/logo/logo-2.png" alt="logo" /></a>
                    <button className="mobile-side-menu-close"><i className="fa-regular fa-xmark"></i></button>
                </div>
                <div className="side-menu-wrap"></div>
                <ul className="side-menu-list">
                    <li><i className="fa-light fa-location-dot"></i>Address : <span>Amsterdam, 109-74</span></li>
                    <li><i className="fa-light fa-phone"></i>Phone : <a href="tel:+01569896654">+01 569 896 654</a></li>
                    <li><i className="fa-light fa-envelope"></i>Email : <a href="mailto:info@example.com">info@example.com</a></li>
                </ul>
            </div>
        </div>
        
        <div className="mobile-side-menu-overlay"></div>

        <div id="preloader">
            <div className="preloader-close">X</div>
            <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
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
        

        <section className="hero-section-3">
            <div className="hero-round-img">
                <img src="assets/img/images/hero-img-5.png" alt="img" />
            </div>
            <div className="shapes">
                <div className="round-shape"></div>
                <div className="round-shape-2"></div>
                <div className="border-shape"></div>
                <a href="#sponsor" className="scroll-down-btn"><img src="assets/img/icon/scroll.png" alt="scroll" /></a>
            </div>
            <div className="container">
                <div className="hero-content-3">
                    <h1 className="title mb-0 anim-text">Turned</h1>
                    <h1 className="title anim-text"><br />Int<span>o</span> Reality</h1>
                    <p>With every single one of our clients, we bring forth a deep passion for creative
                        problem solving — which is what we deliver.</p>
                    <a href="about.html" className="rr-primary-btn">Get Started Now<i className="fa-thin fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
        

        <section id="sponsor" className="sponsor-section p-relative z-1 pb-130">
            <div className="container">
                <div className="sponsor-text text-center">
                    <h4 className="title mb-50">WE WORKED WITH GLOBAL LARGEST BRANDS</h4>
                </div>
                <div className="sponsor-carousel-2 swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="sponsor-item text-center">
                                <a href="#"><img src="assets/img/sponsor/sponsor-img-1.png" alt="sponsor" /></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sponsor-item text-center">
                                <a href="#"><img src="assets/img/sponsor/sponsor-img-2.png" alt="sponsor" /></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sponsor-item text-center">
                                <a href="#"><img src="assets/img/sponsor/sponsor-img-3.png" alt="sponsor" /></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sponsor-item text-center">
                                <a href="#"><img src="assets/img/sponsor/sponsor-img-4.png" alt="sponsor" /></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sponsor-item text-center">
                                <a href="#"><img src="assets/img/sponsor/sponsor-img-5.png" alt="sponsor" /></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="sponsor-item text-center">
                                <a href="#"><img src="assets/img/sponsor/sponsor-img-6.png" alt="sponsor" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="about-section-4 pb-130">
            <div className="shape"><img src="assets/img/shapes/about-shape-3.png" alt="shape" /></div>
            <div className="container">
                <div className="row gy-lg-0 gy-4 align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img-wrap-4">
                            <div className="about-img img-1 reveal">
                                <img src="assets/img/images/about-img-6.png" alt="img" />
                            </div>
                            <div className="about-img img-2 reveal">
                                <img src="assets/img/images/about-img-7.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content-4">
                            <div className="section-heading heading-3 mb-0">
                                <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">About Our Company</h4>
                                <h2 className="section-title t-up" data-text-animation data-split="word" data-duration="1">We want to bring business and the digital world together</h2>
                                <p>This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service. Through our years of experience, we’ve also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels.</p>
                            </div>
                            <div className="about-counter-wrap">
                                <div className="about-counter">
                                    <div className="icon"><img src="assets/img/icon/about-3.png" alt="icon" /></div>
                                    <div className="content">
                                        <h3 className="title"><span className="odometer" data-count="25">0</span>+</h3>
                                        <p>Years on the market</p>
                                    </div>
                                </div>
                                <div className="about-counter">
                                    <div className="icon"><img src="assets/img/icon/about-4.png" alt="icon" /></div>
                                    <div className="content">
                                        <h3 className="title"><span className="odometer" data-count="375">0</span>+</h3>
                                        <p>Projects delivered so far</p>
                                    </div>
                                </div>
                            </div>
                            <a href="about.html" className="rr-primary-btn">Get Started Now <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="service-section-3 pb-130 fade-wrapper">
            <div className="container">
                <div className="row gy-lg-0 gy-4">
                    <div className="col-lg-4 col-md-12">
                        <div className="service-left sticky-widget">
                            <div className="section-heading heading-3">
                                <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">Service We Offer</h4>
                                <h2 className="section-title" data-text-animation data-split="word" data-duration="1">We’ve amazing web solutions</h2>
                                <a href="service.html" className="rr-primary-btn">More Services <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="service-box-wrap fade-top">
                            <div className="service-box">
                                <span className="number">01</span>
                                <div className="icon">
                                    <svg width="61" height="61" viewBox="0 0 61 61" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8887 0.563477C10.244 0.563477 8.89062 1.91686 8.89062 3.56156V35.5616C8.89062 36.8962 10.8926 36.8962 10.8926 35.5616V10.5674H50.8867V35.5616C50.8565 36.9252 52.9173 36.9252 52.8867 35.5616V3.56156C52.8867 1.91686 51.5353 0.563477 49.8906 0.563477H11.8887ZM11.8887 2.56547H49.8906C50.4619 2.56547 50.8867 2.99025 50.8867 3.56156V8.56544H10.8926V3.56156C10.8926 2.99025 11.3174 2.56547 11.8887 2.56547ZM13.8906 4.56354C13.3383 4.56354 12.8906 5.01129 12.8906 5.56355C12.8906 6.11586 13.3383 6.56345 13.8906 6.56345C14.4429 6.56345 14.8906 6.11586 14.8906 5.56355C14.8906 5.01129 14.4429 4.56354 13.8906 4.56354ZM17.8906 4.56354C17.3384 4.56354 16.8906 5.01129 16.8906 5.56355C16.8906 6.11586 17.3384 6.56345 17.8906 6.56345C18.4429 6.56345 18.8906 6.11586 18.8906 5.56355C18.8906 5.01129 18.4429 4.56354 17.8906 4.56354ZM21.8906 4.56354C21.3384 4.56354 20.8906 5.01129 20.8906 5.56355C20.8906 6.11586 21.3384 6.56345 21.8906 6.56345C22.4429 6.56345 22.8906 6.11586 22.8906 5.56355C22.8906 5.01129 22.4429 4.56354 21.8906 4.56354ZM35.8398 4.5655C34.4897 4.65734 34.5818 6.5986 35.8867 6.56553H47.8906C49.1947 6.53529 49.1947 4.59441 47.8906 4.5655H35.8398ZM3.89453 6.56553C2.24984 6.56553 0.890625 7.91695 0.890625 9.56165V45.5635C0.890625 47.2082 2.24984 48.5616 3.89453 48.5616H57.8926C59.5373 48.5616 60.8906 47.2082 60.8906 45.5635V9.56154C60.8906 7.91684 59.5373 6.56541 57.8926 6.56541H55.8926C54.5293 6.53518 54.5293 8.59568 55.8926 8.56544H57.8926C58.4639 8.56544 58.8887 8.99022 58.8887 9.56154V38.5654H2.89062V9.56154C2.89062 8.99022 3.32325 8.56544 3.89453 8.56544H5.88671C7.24995 8.59568 7.24995 6.53518 5.88671 6.56541L3.89453 6.56553ZM33.9023 14.5479C33.4627 14.5449 33.0728 14.8296 32.9414 15.2492L26.9395 33.2471C26.5163 34.5128 28.4147 35.1475 28.8379 33.8819L34.8398 15.878C35.0662 15.2305 34.5883 14.5524 33.9023 14.5479ZM38.25 20.3292L43.3281 24.5655L38.25 28.796C37.165 29.6454 38.5047 31.2483 39.5332 30.3312L45.5273 25.3331C46.006 24.9333 46.006 24.1978 45.5273 23.798L39.5332 18.7921C39.354 18.6387 39.1264 18.5536 38.8398 18.5539C37.8946 18.6367 37.5519 19.7642 38.25 20.3292ZM22.8652 18.5558C22.64 18.5634 22.4239 18.6465 22.252 18.792L16.252 23.7979C15.7733 24.1977 15.7733 24.9332 16.252 25.3329L22.252 30.3311C23.2839 31.2922 24.662 29.6358 23.5293 28.7959L18.4512 24.5653L23.5293 20.3291C24.2682 19.7241 23.8198 18.5267 22.8652 18.5558ZM2.89062 40.5674H58.8887V45.5635C58.8887 46.1348 58.4639 46.5596 57.8926 46.5596H3.89453C3.32325 46.5596 2.89062 46.1348 2.89062 45.5635V40.5674ZM32.9453 42.5655L28.8418 42.5675C27.5671 42.7198 27.6527 44.5255 28.8887 44.5597H32.8906C34.264 44.681 34.3783 42.5931 32.9453 42.5655ZM25.2812 50.4834C24.8799 50.4758 24.5123 50.7071 24.3477 51.0732C23.8661 52.1061 23.0034 53.3122 21.5137 54.5615H19.8906C18.2459 54.5615 16.8945 55.9228 16.8945 57.5675V59.5597C16.8925 60.1119 17.3384 60.5613 17.8906 60.5635H43.8887C44.444 60.5655 44.8947 60.115 44.8926 59.5597V57.5675C44.8926 55.9228 43.5334 54.5615 41.8887 54.5615H40.2676C38.778 53.3123 37.9151 52.106 37.4336 51.0732C37.2643 50.6976 36.8821 50.4643 36.4707 50.4853C35.7563 50.5231 35.3101 51.2748 35.6211 51.919C36.0109 52.7552 36.6062 53.652 37.4082 54.5615H24.373C25.175 53.652 25.7703 52.7552 26.1602 51.919C26.4776 51.2632 26.0097 50.4989 25.2812 50.4834ZM19.8906 56.5635H41.8887C42.4599 56.5635 42.8926 56.9962 42.8926 57.5675V58.5636H18.8945V57.5675C18.8945 56.9962 19.3193 56.5635 19.8906 56.5635Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <h3 className="title"><a href="service-details.html">Web Development</a></h3>
                                <div className="service-img"><img src="assets/img/service/service-img-1.png" alt="service" /></div>
                            </div>
                            <div className="service-box">
                                <span className="number">02</span>
                                <div className="icon">
                                    <svg width="65" height="54" viewBox="0 0 65 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M63.4256 11.1626H1.95054C1.36547 11.1626 0.890625 10.6878 0.890625 10.1027V3.74322C0.890625 1.99012 2.31727 0.563477 4.07037 0.563477H61.3058C63.0589 0.563477 64.4855 1.99012 64.4855 3.74322V10.1027C64.4855 10.6878 64.0107 11.1626 63.4256 11.1626ZM3.01045 9.0428H62.3657V3.74322C62.3657 3.16027 61.8887 2.68331 61.3058 2.68331H4.07037C3.48742 2.68331 3.01045 3.16027 3.01045 3.74322V9.0428Z" fill="currentColor"/>
                                        <path d="M12.5497 23.8816H6.1902C5.60513 23.8816 5.13028 23.4068 5.13028 22.8217C5.13028 22.2366 5.60513 21.7618 6.1902 21.7618H12.5497C13.1348 21.7618 13.6096 22.2366 13.6096 22.8217C13.6096 23.4068 13.1348 23.8816 12.5497 23.8816Z" fill="currentColor"/>
                                        <path d="M18.9092 19.642H6.1902C5.60513 19.642 5.13028 19.1671 5.13028 18.582C5.13028 17.997 5.60513 17.5221 6.1902 17.5221H18.9092C19.4943 17.5221 19.9691 17.997 19.9691 18.582C19.9691 19.1671 19.4943 19.642 18.9092 19.642Z" fill="currentColor"/>
                                        <path d="M14.6695 6.92297C15.2549 6.92297 15.7294 6.44843 15.7294 5.86305C15.7294 5.27768 15.2549 4.80314 14.6695 4.80314C14.0841 4.80314 13.6096 5.27768 13.6096 5.86305C13.6096 6.44843 14.0841 6.92297 14.6695 6.92297Z" fill="currentColor"/>
                                        <path d="M10.4299 6.92297C11.0152 6.92297 11.4898 6.44843 11.4898 5.86305C11.4898 5.27768 11.0152 4.80314 10.4299 4.80314C9.84448 4.80314 9.36994 5.27768 9.36994 5.86305C9.36994 6.44843 9.84448 6.92297 10.4299 6.92297Z" fill="currentColor"/>
                                        <path d="M6.1902 6.92297C6.77557 6.92297 7.25011 6.44843 7.25011 5.86305C7.25011 5.27768 6.77557 4.80314 6.1902 4.80314C5.60483 4.80314 5.13028 5.27768 5.13028 5.86305C5.13028 6.44843 5.60483 6.92297 6.1902 6.92297Z" fill="currentColor"/>
                                        <path d="M61.3058 53.5592H54.9463C54.3612 53.5592 53.8864 53.0844 53.8864 52.4993C53.8864 51.9142 54.3612 51.4394 54.9463 51.4394H61.3058C61.8887 51.4394 62.3657 50.9646 62.3657 50.3795V3.74322C62.3657 3.15815 61.8887 2.68331 61.3058 2.68331H4.07037C3.48742 2.68331 3.01045 3.15815 3.01045 3.74322V50.3795C3.01045 50.9646 3.48742 51.4394 4.07037 51.4394H27.3885C27.9736 51.4394 28.4484 51.9142 28.4484 52.4993C28.4484 53.0844 27.9736 53.5592 27.3885 53.5592H4.07037C2.31727 53.5592 0.890625 52.1326 0.890625 50.3795V3.74322C0.890625 1.99012 2.31727 0.563477 4.07037 0.563477H61.3058C63.0589 0.563477 64.4855 1.99012 64.4855 3.74322V50.3795C64.4855 52.1326 63.0589 53.5592 61.3058 53.5592Z" fill="currentColor"/>
                                        <path d="M49.6912 53.5635C49.4051 53.5635 49.121 53.449 48.9132 53.2222L46.3059 50.3943C46.0133 50.0785 45.9412 49.6164 46.1236 49.2284C46.645 48.1092 47.0245 46.9517 47.2492 45.7879C47.3319 45.364 47.6604 45.0333 48.0844 44.9485L51.7665 44.2108V41.7094L48.0844 40.9717C47.6626 40.8869 47.334 40.5562 47.2492 40.1322C47.0266 38.9684 46.645 37.811 46.1236 36.6896C45.9412 36.2996 46.0133 35.8396 46.3059 35.5237L48.8581 32.7552L47.3891 30.7308L43.9656 32.3058C43.5734 32.4839 43.1134 32.4139 42.7997 32.1193C41.8945 31.2756 40.9109 30.5548 39.8743 29.9804C39.4991 29.7726 39.2871 29.3571 39.3359 28.931L39.7747 25.2023L37.3941 24.4285L35.552 27.71C35.34 28.0852 34.9139 28.2887 34.4984 28.2421C33.3092 28.0958 32.0691 28.0958 30.8799 28.2421C30.458 28.2972 30.0383 28.0852 29.8242 27.71L27.9842 24.4285L25.6036 25.2023L26.0424 28.931C26.0912 29.3571 25.8792 29.7726 25.504 29.9804C24.4674 30.5548 23.4838 31.2756 22.5786 32.1193C22.267 32.4139 21.8049 32.4839 21.4127 32.3058L17.9892 30.7308L16.5201 32.7573L19.0724 35.5258C19.3649 35.8417 19.437 36.3038 19.2547 36.6917C18.7332 37.811 18.3538 38.9684 18.1291 40.1322C18.0464 40.5562 17.7178 40.8869 17.2939 40.9717L13.6096 41.7094V44.2108L17.2917 44.9485C17.7136 45.0333 18.0422 45.364 18.127 45.7879C18.2563 46.4514 18.4365 47.1298 18.6718 47.7997C18.8625 48.3529 18.57 48.955 18.0167 49.1479C17.4635 49.3408 16.8614 49.0482 16.6664 48.495C16.482 47.965 16.3251 47.4266 16.1958 46.8924L12.3419 46.1186C11.8459 46.019 11.4898 45.5844 11.4898 45.0799V40.8403C11.4898 40.3357 11.8459 39.9012 12.3419 39.8015L16.1958 39.0299C16.4057 38.1608 16.6855 37.298 17.0395 36.4522L14.3685 33.5565C14.0251 33.1855 13.9912 32.6238 14.2901 32.2147L16.783 28.7827C17.0819 28.3757 17.6224 28.2294 18.0824 28.4435L21.6628 30.0906C22.356 29.4928 23.0895 28.9565 23.8505 28.488L23.3905 24.5854C23.3333 24.0851 23.6364 23.6103 24.1176 23.4534L28.1495 22.1412C28.6244 21.9865 29.1543 22.1879 29.4023 22.6309L31.325 26.0608C32.2238 25.9824 33.1417 25.9824 34.0405 26.0608L35.9653 22.6309C36.2112 22.19 36.7433 21.9865 37.216 22.1412L41.2479 23.4513C41.7291 23.6082 42.0323 24.0809 41.975 24.5833L41.515 28.488C42.2761 28.9565 43.0095 29.4928 43.7027 30.0906L47.2831 28.4435C47.7431 28.2294 48.2879 28.3757 48.5826 28.7827L51.0755 32.2125C51.3744 32.6217 51.3405 33.1834 50.997 33.5544L48.3261 36.4501C48.6801 37.2938 48.962 38.1587 49.1698 39.0278L53.0236 39.7994C53.5302 39.9012 53.8864 40.3357 53.8864 40.8403V45.0799C53.8864 45.5844 53.5302 46.019 53.0342 46.1186L49.1804 46.8903C48.9705 47.7594 48.6907 48.6222 48.3367 49.468L50.4734 51.7849C50.872 52.2153 50.8444 52.8851 50.4141 53.2837C50.2085 53.4702 49.9498 53.5635 49.6912 53.5635ZM32.6881 53.5592C32.103 53.5592 31.6282 53.0844 31.6282 52.4993C31.6282 51.9142 32.103 51.4394 32.6881 51.4394C37.3644 51.4394 41.1674 47.6364 41.1674 42.9601C41.1674 38.2837 37.3644 34.4808 32.6881 34.4808C28.0117 34.4808 24.2088 38.2837 24.2088 42.9601C24.2088 44.6687 24.7133 46.3158 25.6693 47.7212C25.9979 48.2045 25.8749 48.8638 25.3895 49.1945C24.9104 49.5231 24.2512 49.4022 23.9183 48.9147C22.7228 47.1552 22.0889 45.0969 22.0889 42.9601C22.0889 37.1157 26.8437 32.3609 32.6881 32.3609C38.5324 32.3609 43.2872 37.1157 43.2872 42.9601C43.2872 48.8045 38.5324 53.5592 32.6881 53.5592Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <h3 className="title"><a href="service-details.html">Mobile Application</a></h3>
                                <div className="service-img"><img src="assets/img/service/service-img-2.png" alt="service" /></div>
                            </div>
                            <div className="service-box">
                                <span className="number">03</span>
                                <div className="icon">
                                    <svg width="61" height="61" viewBox="0 0 61 61" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M56.0519 47.0151H33.6971C33.59 46.5836 33.3854 46.1823 33.099 45.8422L27.7542 39.6119C27.6634 39.5058 27.5508 39.4206 27.424 39.3621C27.2972 39.3036 27.1593 39.2733 27.0197 39.2732H16.3745V38.3054C16.3745 38.0487 16.2725 37.8026 16.0911 37.6211C15.9096 37.4396 15.6634 37.3377 15.4068 37.3377H1.85837C1.60171 37.3377 1.35556 37.4396 1.17407 37.6211C0.992583 37.8026 0.890625 38.0487 0.890625 38.3054V59.5957C0.890625 59.8524 0.992583 60.0985 1.17407 60.28C1.35556 60.4615 1.60171 60.5635 1.85837 60.5635H9.6003C9.85696 60.5635 10.1031 60.4615 10.2846 60.28C10.4661 60.0985 10.568 59.8524 10.568 59.5957V58.628H15.4068C15.6634 58.628 15.9096 58.526 16.0911 58.3445C16.2725 58.1631 16.3745 57.9169 16.3745 57.6602V56.6925H22.8584L28.4209 60.4009C28.5792 60.5064 28.765 60.5629 28.9551 60.5635C29.0248 60.5633 29.0942 60.5558 29.1622 60.5412L60.13 53.767C60.3456 53.7198 60.5386 53.6003 60.6769 53.4283C60.8153 53.2563 60.8907 53.0423 60.8906 52.8215V51.8538C60.8891 50.571 60.3788 49.3411 59.4717 48.434C58.5646 47.5269 57.3347 47.0166 56.0519 47.0151ZM8.63256 58.628H2.82611V39.2732H8.63256V58.628ZM14.439 56.6925H10.568V39.2732H14.439V56.6925ZM58.9551 52.0473L29.1487 58.5632L23.6848 54.9196C23.5259 54.814 23.3395 54.7575 23.1487 54.757H16.3745V41.2086H26.5745L31.6251 47.1012C31.7756 47.2766 31.8583 47.5001 31.8584 47.7312V48.9506C31.8584 49.2072 31.7564 49.4534 31.5749 49.6349C31.3934 49.8164 31.1473 49.9183 30.8906 49.9183H29.7574C29.6302 49.9184 29.5042 49.8934 29.3866 49.8448C29.269 49.7961 29.1622 49.7248 29.0722 49.6348L24.8006 45.3632L23.4322 46.7315L27.7038 51.0032C27.9728 51.2738 28.2928 51.4884 28.6453 51.6344C28.9978 51.7804 29.3758 51.855 29.7574 51.8538H30.8906C31.6606 51.8538 32.3991 51.5479 32.9435 51.0035C33.488 50.459 33.7938 49.7206 33.7938 48.9506H56.0519C56.8219 48.9506 57.5603 49.2564 58.1048 49.8009C58.6493 50.3454 58.9551 51.0838 58.9551 51.8538V52.0473Z" fill="currentColor"/>
                                        <path d="M59.9229 29.5957H57.9874V8.30541C57.9874 7.53543 57.6815 6.79698 57.1371 6.25252C56.5926 5.70806 55.8542 5.40219 55.0842 5.40219H48.2577C48.2438 5.37848 48.2286 5.35555 48.2122 5.33348L45.4755 2.59573C45.294 2.41431 45.0479 2.31239 44.7913 2.31239C44.5347 2.31239 44.2886 2.41431 44.1071 2.59573L43.1026 3.60025C42.6005 3.33776 42.0762 3.12014 41.5358 2.94993V1.53122C41.5358 1.27456 41.4338 1.02841 41.2523 0.846922C41.0709 0.665435 40.8247 0.563477 40.568 0.563477H36.6971C36.4404 0.563477 36.1943 0.665435 36.0128 0.846922C35.8313 1.02841 35.7293 1.27456 35.7293 1.53122V2.94993C35.1889 3.12014 34.6646 3.33776 34.1626 3.60025L33.158 2.59573C32.9766 2.41431 32.7305 2.31239 32.4739 2.31239C32.2172 2.31239 31.9711 2.41431 31.7897 2.59573L29.0519 5.33348C29.0359 5.35557 29.021 5.37851 29.0074 5.40219H22.1809C21.411 5.40219 20.6725 5.70806 20.1281 6.25252C19.5836 6.79698 19.2777 7.53543 19.2777 8.30541V14.1119H1.85837C1.60171 14.1119 1.35556 14.2138 1.17407 14.3953C0.992583 14.5768 0.890625 14.8229 0.890625 15.0796V26.6925C0.890625 26.9492 0.992583 27.1953 1.17407 27.3768C1.35556 27.5583 1.60171 27.6602 1.85837 27.6602H19.2777V29.5957H17.3422C17.0856 29.5957 16.8394 29.6977 16.6579 29.8792C16.4765 30.0607 16.3745 30.3068 16.3745 30.5635V34.4344C16.3745 35.2044 16.6804 35.9429 17.2248 36.4873C17.7693 37.0318 18.5077 37.3377 19.2777 37.3377H57.9874C58.7574 37.3377 59.4958 37.0318 60.0403 36.4873C60.5847 35.9429 60.8906 35.2044 60.8906 34.4344V30.5635C60.8906 30.3068 60.7887 30.0607 60.6072 29.8792C60.4257 29.6977 60.1795 29.5957 59.9229 29.5957ZM56.0519 8.30541V29.5957H54.1164V10.2409C54.1164 9.98423 54.0145 9.73809 53.833 9.5566C53.6515 9.37511 53.4053 9.27315 53.1487 9.27315H47.859C47.6888 8.73277 47.4712 8.20847 47.2087 7.70638L47.5774 7.33767H55.0842C55.3408 7.33767 55.587 7.43963 55.7685 7.62112C55.95 7.8026 56.0519 8.04875 56.0519 8.30541ZM26.0519 26.6925V15.0796C26.0519 14.8229 25.95 14.5768 25.7685 14.3953C25.587 14.2138 25.3408 14.1119 25.0842 14.1119V11.2086H27.0197V14.1119C27.0197 14.3685 27.1216 14.6147 27.3031 14.7962C27.4846 14.9776 27.7307 15.0796 27.9874 15.0796H29.4061C29.5763 15.62 29.7939 16.1443 30.0564 16.6464L29.0519 17.6509C28.8705 17.8324 28.7686 18.0785 28.7686 18.3351C28.7686 18.5917 28.8705 18.8378 29.0519 19.0193L31.7897 21.757C31.9711 21.9384 32.2172 22.0404 32.4739 22.0404C32.7305 22.0404 32.9766 21.9384 33.158 21.757L34.1626 20.7525C34.6646 21.015 35.1889 21.2327 35.7293 21.4028V22.8215C35.7293 23.0782 35.8313 23.3244 36.0128 23.5058C36.1943 23.6873 36.4404 23.7893 36.6971 23.7893H40.568C40.8247 23.7893 41.0709 23.6873 41.2523 23.5058C41.4338 23.3244 41.5358 23.0782 41.5358 22.8215V21.4028C42.0762 21.2324 42.6005 21.0144 43.1026 20.7515L44.1071 21.757C44.2886 21.9384 44.5347 22.0404 44.7913 22.0404C45.0479 22.0404 45.294 21.9384 45.4755 21.757L48.2132 19.0193C48.3946 18.8378 48.4965 18.5917 48.4965 18.3351C48.4965 18.0785 48.3946 17.8324 48.2132 17.6509L47.2097 16.6464C47.4718 16.1443 47.6891 15.62 47.859 15.0796H49.2777C49.5344 15.0796 49.7805 14.9776 49.962 14.7962C50.1435 14.6147 50.2455 14.3685 50.2455 14.1119V11.2086H52.1809V29.5957H25.0842V27.6602C25.3408 27.6602 25.587 27.5583 25.7685 27.3768C25.95 27.1953 26.0519 26.9492 26.0519 26.6925ZM31.09 10.4557C31.283 9.60735 31.6191 8.79803 32.0839 8.06251C32.201 7.87677 32.2515 7.6567 32.2271 7.43845C32.2027 7.2202 32.1047 7.01676 31.9493 6.86154L31.1055 6.01767L32.4739 4.64928L33.3177 5.49315C33.4729 5.64852 33.6764 5.74647 33.8946 5.77091C34.1129 5.79536 34.3329 5.74484 34.5187 5.62767C35.2542 5.16289 36.0635 4.8268 36.9119 4.6338C37.1259 4.58507 37.317 4.46505 37.4538 4.29342C37.5906 4.1218 37.665 3.90876 37.6648 3.68928V2.49896H39.6003V3.68928C39.6001 3.90876 39.6745 4.1218 39.8113 4.29342C39.9481 4.46505 40.1392 4.58507 40.3532 4.6338C41.2016 4.8268 42.0109 5.16289 42.7464 5.62767C42.9322 5.74484 43.1522 5.79536 43.3705 5.77091C43.5887 5.74647 43.7922 5.64852 43.9474 5.49315L44.7913 4.64928L46.1597 6.01767L45.3158 6.86154C45.1604 7.01676 45.0625 7.2202 45.038 7.43845C45.0136 7.6567 45.0641 7.87677 45.1813 8.06251C45.646 8.79803 45.9821 9.60735 46.1751 10.4557C46.2239 10.6697 46.3439 10.8608 46.5155 10.9976C46.6871 11.1344 46.9002 11.2088 47.1197 11.2086H48.31V13.1441H47.1197C46.9002 13.1439 46.6871 13.2183 46.5155 13.3551C46.3439 13.4919 46.2239 13.683 46.1751 13.897C45.9821 14.7454 45.646 15.5547 45.1813 16.2902C45.0641 16.476 45.0136 16.6961 45.038 16.9143C45.0625 17.1326 45.1604 17.336 45.3158 17.4912L46.1597 18.3351L44.7913 19.7035L43.9474 18.8596C43.7922 18.7045 43.589 18.6067 43.371 18.5822C43.1529 18.5578 42.933 18.6082 42.7474 18.7251C42.0117 19.1896 41.2025 19.5257 40.3542 19.719C40.1401 19.7675 39.949 19.8873 39.812 20.0587C39.675 20.2301 39.6004 20.4431 39.6003 20.6625V21.8538H37.6648V20.6625C37.6648 20.4431 37.5901 20.2301 37.4531 20.0587C37.3162 19.8873 37.125 19.7675 36.9109 19.719C36.0627 19.5257 35.2534 19.1896 34.5177 18.7251C34.3321 18.6082 34.1122 18.5578 33.8942 18.5822C33.6761 18.6067 33.4729 18.7045 33.3177 18.8596L32.4739 19.7035L31.1055 18.3351L31.9493 17.4912C32.1047 17.336 32.2027 17.1326 32.2271 16.9143C32.2515 16.6961 32.201 16.476 32.0839 16.2902C31.6191 15.5547 31.283 14.7454 31.09 13.897C31.0413 13.683 30.9212 13.4919 30.7496 13.3551C30.578 13.2183 30.3649 13.1439 30.1455 13.1441H28.9551V11.2086H30.1455C30.3649 11.2088 30.578 11.1344 30.7496 10.9976C30.9212 10.8608 31.0413 10.6697 31.09 10.4557ZM21.2132 8.30541C21.2132 8.04875 21.3152 7.8026 21.4966 7.62112C21.6781 7.43963 21.9243 7.33767 22.1809 7.33767H29.6877L30.0564 7.70638C29.7939 8.20847 29.5763 8.73277 29.4061 9.27315H24.1164C23.8598 9.27315 23.6136 9.37511 23.4321 9.5566C23.2506 9.73809 23.1487 9.98423 23.1487 10.2409V14.1119H21.2132V8.30541ZM2.82611 16.0473H24.1164V25.7248H2.82611V16.0473ZM21.2132 27.6602H23.1487V29.5957H21.2132V27.6602ZM58.9551 34.4344C58.9551 34.6911 58.8532 34.9373 58.6717 35.1187C58.4902 35.3002 58.2441 35.4022 57.9874 35.4022H19.2777C19.0211 35.4022 18.7749 35.3002 18.5934 35.1187C18.4119 34.9373 18.31 34.6911 18.31 34.4344V31.5312H58.9551V34.4344Z" fill="currentColor"/>
                                        <path d="M38.6326 17.9828C39.781 17.9828 40.9036 17.6423 41.8584 17.0043C42.8133 16.3662 43.5575 15.4594 43.997 14.3984C44.4365 13.3374 44.5515 12.1699 44.3274 11.0436C44.1034 9.91726 43.5504 8.88265 42.7383 8.0706C41.9263 7.25855 40.8917 6.70554 39.7653 6.4815C38.639 6.25745 37.4715 6.37244 36.4105 6.81192C35.3495 7.25139 34.4427 7.99562 33.8047 8.95049C33.1666 9.90535 32.8261 11.028 32.8261 12.1764C32.8276 13.7159 33.4399 15.1919 34.5285 16.2805C35.6171 17.3691 37.0931 17.9813 38.6326 17.9828ZM38.6326 8.30541C39.3982 8.30541 40.1466 8.53244 40.7832 8.95779C41.4197 9.38313 41.9159 9.9877 42.2089 10.695C42.5019 11.4024 42.5785 12.1807 42.4291 12.9316C42.2798 13.6825 41.9111 14.3722 41.3697 14.9136C40.8284 15.4549 40.1386 15.8236 39.3877 15.973C38.6369 16.1223 37.8585 16.0457 37.1512 15.7527C36.4439 15.4597 35.8393 14.9636 35.414 14.327C34.9886 13.6904 34.7616 12.942 34.7616 12.1764C34.7616 11.1497 35.1694 10.1651 35.8954 9.43919C36.6213 8.71324 37.6059 8.30541 38.6326 8.30541Z" fill="currentColor"/>
                                        <path d="M7.94837 17.2986L5.04514 20.2019C4.86372 20.3833 4.7618 20.6294 4.7618 20.8861C4.7618 21.1427 4.86372 21.3888 5.04514 21.5703L7.94837 24.4735L9.31675 23.1051L7.09772 20.8861L9.31675 18.667L7.94837 17.2986Z" fill="currentColor"/>
                                        <path d="M18.9942 17.2986L17.6258 18.667L19.8448 20.8861L17.6258 23.1051L18.9942 24.4735L21.8974 21.5703C22.0788 21.3888 22.1807 21.1427 22.1807 20.8861C22.1807 20.6294 22.0788 20.3833 21.8974 20.2019L18.9942 17.2986Z" fill="currentColor"/>
                                        <path d="M14.5415 16.5821L10.6706 24.3238L12.4018 25.1894L16.2726 17.4477L14.5415 16.5821Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <h3 className="title"><a href="service-details.html">Design & Branding</a></h3>
                                <div className="service-img"><img src="assets/img/service/service-img-3.png" alt="service" /></div>
                            </div>
                            <div className="service-box">
                                <span className="number">04</span>
                                <div className="icon">
                                    <svg width="61" height="61" viewBox="0 0 61 61" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M57.8906 0.3125H3.89062C3.09525 0.31341 2.33272 0.629772 1.77031 1.19218C1.2079 1.7546 0.891535 2.51713 0.890625 3.3125V47.3125C0.891535 48.1079 1.2079 48.8704 1.77031 49.4328C2.33272 49.9952 3.09525 50.3116 3.89062 50.3125H24.5466L22.1466 58.3125H18.8906V60.3125H42.8906V58.3125H39.6347L37.2346 50.3125H57.8906C58.686 50.3116 59.4485 49.9952 60.0109 49.4328C60.5734 48.8704 60.8897 48.1079 60.8906 47.3125V3.3125C60.8897 2.51713 60.5734 1.7546 60.0109 1.19218C59.4485 0.629772 58.686 0.31341 57.8906 0.3125ZM37.5466 58.3125H24.2347L26.6347 50.3125H35.1466L37.5466 58.3125ZM58.8906 47.3125C58.8903 47.5776 58.7849 47.8318 58.5974 48.0193C58.4099 48.2067 58.1557 48.3122 57.8906 48.3125H3.89062C3.6255 48.3122 3.37132 48.2067 3.18385 48.0193C2.99638 47.8318 2.89093 47.5776 2.89062 47.3125V44.3125H58.8906V47.3125ZM58.8906 42.3125H2.89062V3.3125C2.89093 3.04738 2.99638 2.7932 3.18385 2.60573C3.37132 2.41826 3.6255 2.3128 3.89062 2.3125H57.8906C58.1557 2.3128 58.4099 2.41826 58.5974 2.60573C58.7849 2.7932 58.8903 3.04738 58.8906 3.3125V42.3125Z" fill="currentColor"/>
                                        <path d="M53.8906 17.3125H40.7191C40.5877 17.3129 40.4575 17.2872 40.3361 17.2369C40.2147 17.1866 40.1045 17.1127 40.0119 17.0195L37.1835 14.1912C36.9056 13.9117 36.575 13.6902 36.2109 13.5393C35.8467 13.3885 35.4563 13.3114 35.0622 13.3125H23.8906C23.0953 13.3134 22.3327 13.6298 21.7703 14.1922C21.2079 14.7546 20.8915 15.5171 20.8906 16.3125V37.3125C20.8915 38.1079 21.2079 38.8704 21.7703 39.4328C22.3327 39.9952 23.0953 40.3116 23.8906 40.3125H53.8906C54.686 40.3116 55.4485 39.9952 56.0109 39.4328C56.5734 38.8704 56.8897 38.1079 56.8906 37.3125V20.3125C56.8897 19.5171 56.5734 18.7546 56.0109 18.1922C55.4485 17.6298 54.686 17.3134 53.8906 17.3125ZM54.8906 37.3125C54.8903 37.5776 54.7849 37.8318 54.5974 38.0193C54.4099 38.2067 54.1557 38.3122 53.8906 38.3125H23.8906C23.6255 38.3122 23.3713 38.2067 23.1839 38.0193C22.9964 37.8318 22.8909 37.5776 22.8906 37.3125V16.3125C22.8909 16.0474 22.9964 15.7932 23.1839 15.6057C23.3713 15.4183 23.6255 15.3128 23.8906 15.3125H35.0622C35.1936 15.3121 35.3237 15.3378 35.4451 15.3881C35.5665 15.4384 35.6767 15.5123 35.7693 15.6055L38.5977 18.4338C38.8757 18.7133 39.2062 18.9348 39.5704 19.0857C39.9345 19.2365 40.3249 19.3136 40.7191 19.3125H53.8906C54.1557 19.3128 54.4099 19.4183 54.5974 19.6057C54.7849 19.7932 54.8903 20.0474 54.8906 20.3125V37.3125Z" fill="currentColor"/>
                                        <path d="M32.1835 22.6054L26.4765 28.3125L32.1835 34.0196L33.5978 32.6054L29.3048 28.3125L33.5978 24.0196L32.1835 22.6054Z" fill="currentColor"/>
                                        <path d="M36.0251 32.8446L41.0288 23.8462L42.7767 24.8182L37.773 33.8166L36.0251 32.8446Z" fill="currentColor"/>
                                        <path d="M44.1835 24.0196L48.4765 28.3125L44.1835 32.6054L45.5978 34.0196L51.3047 28.3125L45.5978 22.6054L44.1835 24.0196Z" fill="currentColor"/>
                                        <path d="M24.2399 6.3125L25.8592 10.0899L29.4305 11.5696L33.2529 10.0422L35.2303 12.0196L36.6444 10.6054L33.735 7.69575L29.4443 9.41037L27.3768 8.55375L25.5585 4.3125H20.2227L18.4046 8.55375L16.337 9.41037L12.0464 7.69575L8.274 11.4683L9.9885 15.7589L9.13188 17.8264L4.89062 19.6446V24.9804L9.13175 26.7986L9.9885 28.8661L8.27388 33.1567L12.0463 36.9292L16.337 35.2146L18.5077 36.1141L19.2735 34.2665L16.3507 33.0554L12.5284 34.5827L10.6204 32.6748L12.1477 28.8524L10.6679 25.281L6.89062 23.6618V20.9632L10.668 19.344L12.1477 15.7726L10.6204 11.9502L12.5285 10.0422L16.3507 11.5696L19.922 10.0899L21.5414 6.3125H24.2399Z" fill="currentColor"/>
                                        <path d="M19.3356 15.1436L18.4456 13.3525C16.7774 14.1808 15.3735 15.4584 14.392 17.0414C13.4106 18.6244 12.8906 20.4499 12.8906 22.3125C12.8906 24.1751 13.4106 26.0006 14.392 27.5836C15.3735 29.1666 16.7774 30.4442 18.4456 31.2725L19.3356 29.4814C18.0007 28.8188 16.8774 27.7967 16.0921 26.5301C15.3067 25.2635 14.8906 23.8028 14.8906 22.3125C14.8906 20.8222 15.3067 19.3615 16.0921 18.0949C16.8774 16.8283 18.0007 15.8062 19.3356 15.1436Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <h3 className="title"><a href="service-details.html">App Development</a></h3>
                                <div className="service-img"><img src="assets/img/service/service-img-4.png" alt="service" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="process-section-3 pt-130 pb-130" data-background="assets/img/bg-img/process-bg.png">
            <div className="container">
                <div className="section-heading heading-3 text-center">
                    <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">Our Work Process</h4>
                    <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Follow 4 Easy Work Steps</h2>
                </div>
                <div className="row gy-lg-0 gy-4 fade-wrapper">
                    <div className="col-lg-3 col-md-6">
                        <div className="process-item-wrap fade-top">
                            <div className="process-item-2 text-center">
                                <div className="icon">
                                    <svg width="51" height="51" viewBox="0 0 51 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.97127 5.60316C7.30272 5.60316 5.13256 7.77455 5.13256 10.4446C5.13256 13.1147 7.30272 15.286 9.97127 15.286C12.6398 15.286 14.81 13.1147 14.81 10.4446C14.81 7.77455 12.6398 5.60316 9.97127 5.60316ZM9.97127 13.6722C8.19224 13.6722 6.74546 12.2246 6.74546 10.4446C6.74546 8.66457 8.19224 7.21698 9.97127 7.21698C11.7503 7.21698 13.1971 8.66457 13.1971 10.4446C13.1971 12.2246 11.7503 13.6722 9.97127 13.6722Z" fill="currentColor"/>
                                        <path d="M45.9971 39.2286L44.8568 38.0876L38.9753 43.9724L37.9326 42.9291L36.7922 44.07L38.9753 46.2543L45.9971 39.2286Z" fill="currentColor"/>
                                        <path d="M27.685 9.60946H29.2979V11.2233H27.685V9.60946Z" fill="currentColor"/>
                                        <path d="M37.3624 9.60946H38.9753V11.2233H37.3624V9.60946Z" fill="currentColor"/>
                                        <path d="M34.1366 9.60946H35.7495V11.2233H34.1366V9.60946Z" fill="currentColor"/>
                                        <path d="M30.9108 9.60946H32.5237V11.2233H30.9108V9.60946Z" fill="currentColor"/>
                                        <path d="M18.814 29.7821H31.7172C33.0511 29.7821 34.1366 28.696 34.1366 27.3614V26.5545H44.6205C47.7326 26.5545 50.2656 24.0208 50.2656 20.9062V15.2578C50.2656 12.1431 47.7326 9.60946 44.6205 9.60946H42.2011V8.80255C42.2011 7.46792 41.1156 6.38183 39.7818 6.38183H26.8785C25.5447 6.38183 24.4592 7.46792 24.4592 8.80255V9.60946H19.6487V8.21512L17.5318 7.63657C17.4624 7.45098 17.385 7.2662 17.3011 7.08384L18.3906 5.17469L15.239 2.0213L13.3318 3.11063C13.1487 3.02671 12.9648 2.94924 12.7793 2.87985L12.2003 0.761719H7.74304L7.16401 2.87985C6.97853 2.94924 6.79466 3.0259 6.6124 3.11063L4.70433 2.0213L1.55272 5.17469L2.64143 7.08384C2.55756 7.2662 2.48014 7.45098 2.41079 7.63657L0.293851 8.21512V12.6741L2.41079 13.2534C2.48014 13.439 2.55756 13.6238 2.64143 13.8062L1.55192 15.7153L4.70353 18.8679L6.61159 17.7786C6.79385 17.8625 6.97772 17.94 7.16321 18.0094L7.74224 20.1275H12.1995L12.7785 18.0094C12.9632 17.94 13.1479 17.8625 13.3309 17.7786L15.2382 18.8671L18.3898 15.7145L17.3003 13.8054C17.3842 13.623 17.4616 13.4382 17.5309 13.2526L19.6479 12.6733V11.2233H24.4592V12.0302C24.4592 13.3648 25.5447 14.4509 26.8785 14.4509H39.7818C41.1156 14.4509 42.2011 13.3648 42.2011 12.0302V11.2233H44.6205C46.8439 11.2233 48.6527 13.0332 48.6527 15.2578V20.9062C48.6527 23.1308 46.8439 24.9407 44.6205 24.9407H34.1366V24.1338C34.1366 22.7992 33.0511 21.7131 31.7172 21.7131H18.814C17.4801 21.7131 16.3947 22.7992 16.3947 24.1338V24.9407H5.91079C2.79869 24.9407 0.265625 27.4752 0.265625 30.589V37.0443C0.265625 40.1582 2.79869 42.6926 5.91079 42.6926H8.33014V43.4996C8.33014 44.8342 9.41562 45.9203 10.7495 45.9203H23.6527C24.9866 45.9203 26.0721 44.8342 26.0721 43.4996V42.6926H32.5648C32.9737 47.2097 36.7753 50.7617 41.3947 50.7617C46.2858 50.7617 50.2656 46.7796 50.2656 41.8857C50.2656 36.9918 46.2858 33.0098 41.3947 33.0098C36.7753 33.0098 32.9737 36.5618 32.5648 41.0788H26.0721V40.2719C26.0721 38.9373 24.9866 37.8512 23.6527 37.8512H10.7495C9.41562 37.8512 8.33014 38.9373 8.33014 40.2719V41.0788H5.91079C3.6874 41.0788 1.87853 39.2689 1.87853 37.0443V30.589C1.87853 28.3644 3.6874 26.5545 5.91079 26.5545H16.3947V27.3614C16.3947 28.696 17.4801 29.7821 18.814 29.7821ZM18.0358 11.4427L16.2672 11.9269L16.1374 12.3505C16.0213 12.7241 15.8664 13.0961 15.6761 13.456L15.468 13.8481L16.3793 15.445L14.9697 16.8563L13.3729 15.9453L12.9818 16.1527C12.6229 16.3431 12.2511 16.498 11.8769 16.6134L11.4543 16.7441L10.9697 18.5137H8.9753L8.49063 16.7441L8.06804 16.6134C7.69546 16.498 7.32369 16.3439 6.96321 16.1527L6.57127 15.9453L4.9753 16.8563L3.56401 15.445L4.4753 13.8481L4.26724 13.456C4.07692 13.0961 3.92127 12.7241 3.80595 12.3505L3.67611 11.9269L1.90756 11.4427V9.44646L3.67611 8.96312L3.80675 8.5395C3.92208 8.1659 4.07692 7.79391 4.26724 7.43484L4.4753 7.04188L3.56401 5.44501L4.97369 4.03373L6.56966 4.94473L6.96159 4.73735C7.32369 4.54611 7.69546 4.39038 8.06643 4.2758L8.48901 4.14508L8.97369 2.37553H10.968L11.4527 4.14508L11.8753 4.2758C12.2479 4.39119 12.6197 4.54611 12.9801 4.73735L13.3713 4.94473L14.968 4.03373L16.3777 5.44501L15.4664 7.04188L15.6745 7.43403C15.8648 7.79311 16.0205 8.16509 16.135 8.53869L16.2656 8.96232L18.0342 9.44565V11.4427H18.0358ZM40.5882 12.0302C40.5882 12.4748 40.2269 12.8371 39.7818 12.8371H26.8785C26.4334 12.8371 26.0721 12.4748 26.0721 12.0302V8.80255C26.0721 8.35794 26.4334 7.99564 26.8785 7.99564H39.7818C40.2269 7.99564 40.5882 8.35794 40.5882 8.80255V12.0302ZM41.3947 34.6236C45.3971 34.6236 48.6527 37.8811 48.6527 41.8857C48.6527 45.8904 45.3971 49.1479 41.3947 49.1479C37.3922 49.1479 34.1366 45.8904 34.1366 41.8857C34.1366 37.8811 37.3922 34.6236 41.3947 34.6236ZM9.94304 40.2719C9.94304 39.8265 10.3043 39.465 10.7495 39.465H23.6527C24.0979 39.465 24.4592 39.8265 24.4592 40.2719V43.4996C24.4592 43.945 24.0979 44.3065 23.6527 44.3065H10.7495C10.3043 44.3065 9.94304 43.945 9.94304 43.4996V40.2719ZM18.0076 24.1338C18.0076 23.6892 18.3689 23.3269 18.814 23.3269H31.7172C32.1624 23.3269 32.5237 23.6892 32.5237 24.1338V27.3614C32.5237 27.8068 32.1624 28.1683 31.7172 28.1683H18.814C18.3689 28.1683 18.0076 27.8068 18.0076 27.3614V24.1338Z" fill="currentColor"/>
                                        <path d="M26.0721 24.9407H27.685V26.5545H26.0721V24.9407Z" fill="currentColor"/>
                                        <path d="M22.8463 24.9407H24.4592V26.5545H22.8463V24.9407Z" fill="currentColor"/>
                                        <path d="M19.6205 24.9407H21.2334V26.5545H19.6205V24.9407Z" fill="currentColor"/>
                                        <path d="M29.2979 24.9407H30.9108V26.5545H29.2979V24.9407Z" fill="currentColor"/>
                                        <path d="M14.7818 41.0788H16.3947V42.6926H14.7818V41.0788Z" fill="currentColor"/>
                                        <path d="M21.2334 41.0788H22.8463V42.6926H21.2334V41.0788Z" fill="currentColor"/>
                                        <path d="M18.0076 41.0788H19.6205V42.6926H18.0076V41.0788Z" fill="currentColor"/>
                                        <path d="M11.5559 41.0788H13.1689V42.6926H11.5559V41.0788Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <span>Process-1</span>
                                <h3 className="title">Project Research</h3>
                                <div className="process-bottom">
                                    <p>This includes the use of robots & computer solution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-item-wrap fade-top">
                            <div className="process-item-2 text-center">
                                <div className="icon">
                                    <svg width="55" height="51" viewBox="0 0 55 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5304 50.7617C22.4038 50.7617 22.2774 50.7343 22.1599 50.6797C22.1013 50.6522 16.1305 47.7734 10.4313 41.495C7.2387 37.978 4.75525 34.0831 3.04982 29.9191C0.928105 24.738 0.0116844 19.1249 0.325823 13.2354C0.348157 12.8191 0.659732 12.4756 1.07199 12.4134C6.55001 11.5856 11.644 9.50011 16.2118 6.21521C19.4531 3.88406 21.3475 1.69791 21.8509 1.08355C22.0179 0.879978 22.2672 0.761719 22.5308 0.761719C22.794 0.761719 23.0437 0.879978 23.2107 1.08355L23.2458 1.12675C24.2425 2.35291 28.0088 6.58793 34.6394 9.6008C35.0813 9.80144 35.2765 10.3224 35.0758 10.7644C34.8752 11.2063 34.3542 11.4018 33.9123 11.2008C30.7551 9.76629 27.855 7.91514 25.2918 5.6986C24.5423 5.05018 23.5106 4.09825 22.5227 2.98778C21.566 4.03674 19.7922 5.80478 17.2377 7.64164C15.1247 9.16108 12.8562 10.4579 10.4954 11.4955C7.79302 12.6832 4.95479 13.5367 2.04882 14.0353C1.68599 23.9941 4.94161 32.8324 11.7326 40.3135C13.9154 42.7182 16.4952 44.9747 19.1928 46.8387C20.7598 47.9213 21.9596 48.5942 22.5319 48.897C23.6647 48.3021 27.2279 46.2891 31.0645 42.6794C36.976 37.1172 40.7446 30.5353 42.2648 23.1161C42.3622 22.6405 42.8271 22.3344 43.302 22.4318C43.7776 22.5292 44.0841 22.9934 43.9863 23.469C43.1109 27.741 41.4897 31.8113 39.1677 35.5667C37.3023 38.5839 34.981 41.4075 32.2687 43.9594C27.3593 48.5785 22.9453 50.6588 22.9013 50.6793C22.7834 50.7343 22.6567 50.7617 22.5304 50.7617Z" fill="currentColor"/>
                                        <path d="M22.5304 45.6231C22.4038 45.6231 22.2774 45.5956 22.1599 45.5411C22.1134 45.5195 17.3801 43.2374 12.8705 38.269C10.3435 35.485 8.37736 32.4015 7.02708 29.1045C5.34655 25.0013 4.62088 20.5565 4.86948 15.8942C4.89181 15.4779 5.20339 15.1345 5.61565 15.0722C9.89716 14.4253 13.8784 12.7953 17.4489 10.2276C19.9814 8.40612 21.4588 6.70179 21.8509 6.22253C22.0179 6.01896 22.2672 5.9007 22.5308 5.9007C22.7944 5.9007 23.0437 6.01896 23.2107 6.22253L23.2466 6.26683C24.2003 7.44467 27.8096 11.4644 34.2173 13.7351C34.6746 13.8973 34.914 14.3993 34.7522 14.8569C34.59 15.3142 34.088 15.5537 33.6304 15.3919C30.5373 14.2957 27.6991 12.7008 25.1948 10.6509C24.4684 10.0563 23.4721 9.17572 22.5209 8.12091C21.7345 8.96593 20.3776 10.2866 18.4756 11.6548C16.802 12.8582 15.0054 13.8852 13.1356 14.7072C11.0413 15.6276 8.84454 16.2944 6.59505 16.6931C6.34974 24.418 8.8969 31.2771 14.1724 37.089C17.7323 41.0106 21.3823 43.1419 22.5323 43.758C23.545 43.2191 26.4817 41.5261 29.5458 38.5458C34.3817 33.8429 37.285 28.2649 38.1755 21.9675C38.2436 21.4872 38.6881 21.1525 39.1684 21.2206C39.6488 21.2884 39.9834 21.7332 39.9153 22.2136C37.6094 38.5239 23.0485 45.4737 22.9017 45.5422C22.7834 45.5956 22.6567 45.6231 22.5304 45.6231Z" fill="currentColor"/>
                                        <path d="M43.856 24.198C40.9474 24.198 38.2128 23.0655 36.1563 21.0097C34.0994 18.9536 32.9669 16.2197 32.9669 13.3119C32.9669 10.4041 34.0997 7.6702 36.1563 5.61402C38.2128 3.55784 40.9474 2.42577 43.856 2.42577C46.7645 2.42577 49.4991 3.55821 51.5557 5.61402C53.6126 7.6702 54.745 10.4041 54.745 13.3119C54.745 16.2197 53.6122 18.9536 51.5557 21.0097C49.4987 23.0655 46.7645 24.198 43.856 24.198ZM43.856 4.18283C38.8206 4.18283 34.7243 8.27798 34.7243 13.3115C34.7243 18.3451 38.821 22.4402 43.856 22.4402C48.891 22.4402 52.9876 18.3454 52.9876 13.3119C52.9876 8.27834 48.891 4.18283 43.856 4.18283Z" fill="currentColor"/>
                                        <path d="M41.0943 17.5637C40.8566 17.5637 40.6201 17.4678 40.4473 17.2796L38.1246 14.7533C37.7962 14.396 37.8196 13.8402 38.1766 13.5118C38.5336 13.1834 39.0897 13.2068 39.4181 13.5638L41.1656 15.4643L48.3681 9.27201C48.7361 8.95568 49.2908 8.99742 49.6071 9.36538C49.9235 9.73334 49.8817 10.288 49.5138 10.6047L41.6669 17.3514C41.501 17.4934 41.2971 17.5637 41.0943 17.5637Z" fill="currentColor"/>
                                        <path d="M23.0046 30.5353C20.3443 30.5353 18.1801 28.3711 18.1801 25.7108C18.1801 23.0505 20.3443 20.8864 23.0046 20.8864C25.6649 20.8864 27.829 23.0505 27.829 25.7108C27.829 28.3711 25.6645 30.5353 23.0046 30.5353ZM23.0046 22.6441C21.3134 22.6441 19.9375 24.02 19.9375 25.7112C19.9375 27.4023 21.3134 28.7783 23.0046 28.7783C24.6957 28.7783 26.0716 27.4023 26.0716 25.7112C26.0716 24.02 24.6954 22.6441 23.0046 22.6441Z" fill="currentColor"/>
                                        <path d="M24.1103 36.4087H21.4372C20.9898 36.4087 20.6134 36.0723 20.564 35.6274L20.3468 33.6822C19.8383 33.5127 19.348 33.2952 18.8805 33.0312L17.394 34.2189C17.0444 34.4983 16.5406 34.4705 16.2242 34.1538L14.3339 32.2634C14.0176 31.9471 13.9894 31.4433 14.2687 31.0937L15.5194 29.5288C15.2804 29.0613 15.0867 28.574 14.9398 28.0702L13.0232 27.8563C12.5783 27.8066 12.2418 27.4305 12.2418 26.9831V24.31C12.2418 23.8622 12.5783 23.4862 13.0232 23.4368L14.9798 23.2186C15.139 22.7042 15.3477 22.2077 15.6033 21.7332L14.4317 20.2672C14.1523 19.9176 14.1801 19.4138 14.4968 19.0974L16.3872 17.2071C16.7035 16.8904 17.2073 16.8626 17.5569 17.142L19.0222 18.3128C19.5245 18.0415 20.0514 17.8237 20.5976 17.6608L20.7946 15.8964C20.8444 15.4515 21.2204 15.1151 21.6678 15.1151H24.3409C24.7883 15.1151 25.1647 15.4515 25.2142 15.8964L25.4111 17.6608C25.9871 17.8325 26.541 18.0653 27.0675 18.3571L28.3841 17.3049C28.7338 17.0255 29.2375 17.0534 29.5539 17.3701L31.4442 19.2604C31.7605 19.5767 31.7887 20.0809 31.5094 20.4302L30.4304 21.7804C30.7185 22.3227 30.9444 22.8924 31.1066 23.4837L32.7549 23.6675C33.1998 23.7173 33.5363 24.0933 33.5363 24.5407V27.2138C33.5363 27.6616 33.1998 28.0376 32.7549 28.087L31.0041 28.2825C30.8211 28.8529 30.5779 29.3999 30.277 29.9187L31.3464 31.2569C31.6258 31.6066 31.598 32.1104 31.2813 32.4267L29.391 34.3171C29.0746 34.6334 28.5705 34.6616 28.2212 34.3822L26.7698 33.2223C26.2624 33.4772 25.7326 33.6789 25.1849 33.8257L24.9839 35.6278C24.9341 36.0723 24.5581 36.4087 24.1103 36.4087ZM22.2232 34.6513H23.3242L23.5073 33.0096C23.5501 32.6248 23.8401 32.3132 24.2208 32.2429C24.9956 32.0998 25.7322 31.8215 26.4096 31.4162C26.7241 31.228 27.1228 31.2547 27.4095 31.4839L28.7041 32.5186L29.4825 31.7402L28.513 30.5269C28.271 30.2241 28.256 29.7983 28.4764 29.479C28.9413 28.8054 29.2734 28.0621 29.4638 27.2694C29.5502 26.9095 29.853 26.6426 30.2206 26.6016L31.7785 26.4277V25.3268L30.2942 25.1613C29.9112 25.1184 29.6011 24.8314 29.5286 24.4532C29.373 23.6404 29.0691 22.8719 28.6257 22.17C28.4258 21.8533 28.4485 21.4447 28.6821 21.1522L29.6454 19.9469L28.867 19.1685L27.6863 20.1124C27.389 20.35 26.9719 20.369 26.6541 20.1596C25.9695 19.7085 25.2175 19.3918 24.4189 19.219C24.0502 19.1392 23.7734 18.8327 23.7317 18.4578L23.5549 16.8728H22.4539L22.2771 18.4578C22.2353 18.8327 21.9585 19.1392 21.5898 19.219C20.8177 19.3863 20.088 19.6884 19.4209 20.1164C19.1035 20.32 18.6919 20.2987 18.3976 20.0633L17.0736 19.0052L16.2953 19.7836L17.3537 21.1079C17.5888 21.4022 17.6104 21.8138 17.4072 22.1308C16.9946 22.7745 16.6987 23.4778 16.5285 24.2211C16.445 24.5854 16.1408 24.8567 15.7695 24.8984L13.9993 25.0961V26.1971L15.7406 26.3915C16.1177 26.4336 16.4252 26.7129 16.5032 27.0842C16.6574 27.8186 16.9342 28.5172 17.3252 29.1598C17.517 29.475 17.4914 29.8766 17.2611 30.1652L16.1327 31.5773L16.9111 32.3557L18.2661 31.2727C18.5656 31.0332 18.9863 31.0157 19.3048 31.2299C19.9382 31.6557 20.6335 31.9658 21.3705 32.1521C21.7257 32.2418 21.9878 32.5424 22.0285 32.9067L22.2232 34.6513Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <span>Process-2</span>
                                <h3 className="title">Start Working</h3>
                                <div className="process-bottom">
                                    <p>This includes the use of robots & computer solution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-item-wrap fade-top">
                            <div className="process-item-2 text-center">
                                <div className="icon">
                                    <svg width="45" height="51" viewBox="0 0 45 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M27.9969 31.6791C28.1157 31.955 28.378 32.142 28.6776 32.1643C28.6978 32.1658 28.7177 32.1665 28.7378 32.1665C29.0152 32.1665 29.2751 32.0235 29.4229 31.7853L31.3769 28.6365L35.0073 29.3799C35.302 29.44 35.6051 29.3319 35.7947 29.0989C35.9844 28.8659 36.0287 28.5468 35.91 28.2708L33.2138 22.0109C33.2962 21.9759 33.3806 21.9399 33.4695 21.9019C34.8599 21.3066 35.6734 19.8974 35.4939 18.3957C35.4605 18.1167 35.4294 17.8685 35.4015 17.6457C35.2895 16.752 35.2331 16.3034 35.2936 15.9607C35.3541 15.6179 35.5604 15.2156 35.9714 14.4141C36.0739 14.2142 36.188 13.9918 36.3147 13.7409C36.9971 12.3911 36.7145 10.7887 35.6117 9.75379C35.4069 9.56154 35.2234 9.39147 35.0589 9.23865C34.3985 8.62612 34.067 8.31865 33.8932 8.01723C33.7191 7.71581 33.6185 7.27506 33.4182 6.397C33.3682 6.17804 33.3126 5.93408 33.2485 5.66048C32.9035 4.18785 31.6571 3.14204 30.1469 3.05806C29.8665 3.04244 29.6167 3.03004 29.3924 3.01885C28.4927 2.97409 28.0412 2.95161 27.7142 2.83255C27.3872 2.7135 27.0269 2.4405 26.3089 1.89653C26.1299 1.76084 25.9304 1.60982 25.7056 1.44147C24.4947 0.535185 22.8678 0.535084 21.6569 1.44147C21.4321 1.60982 21.2326 1.76084 21.0536 1.89653C20.3357 2.4405 19.9754 2.7135 19.6483 2.83255C19.3213 2.95161 18.8697 2.97409 17.9702 3.01885C17.7458 3.03004 17.496 3.04244 17.2156 3.05806C15.7055 3.14204 14.4589 4.18795 14.1141 5.66048C14.0499 5.93408 13.9943 6.17794 13.9443 6.397C13.744 7.27506 13.6435 7.71591 13.4694 8.01723C13.2954 8.31865 12.9639 8.62612 12.3036 9.23865C12.139 9.39147 11.9556 9.56154 11.7509 9.75379C10.6481 10.7888 10.3654 12.3912 11.0477 13.741C11.1744 13.9917 11.2885 14.2141 11.391 14.4139C11.802 15.2155 12.0083 15.6178 12.0688 15.9606C12.1293 16.3032 12.073 16.7518 11.961 17.6454C11.933 17.8683 11.9019 18.1166 11.8685 18.3957C11.6891 19.8974 12.5025 21.3066 13.8929 21.9019C14.1512 22.0125 14.3816 22.1097 14.5886 22.1969C14.6515 22.2234 14.7112 22.2486 14.7694 22.2732L11.4621 29.3767C11.3353 29.6491 11.3705 29.9693 11.5532 30.2078C11.7359 30.4462 12.0361 30.5637 12.3321 30.5115L15.9828 29.8737L17.8446 33.0778C17.9895 33.3269 18.2555 33.479 18.5419 33.479C18.5539 33.479 18.5662 33.4787 18.5784 33.4782C18.8787 33.4646 19.1463 33.2852 19.2731 33.013L22.5645 25.9432C23.0925 25.7845 23.4126 25.7046 23.6815 25.7046C24.0295 25.7046 24.4615 25.8379 25.3223 26.1035C25.4219 26.1343 25.5273 26.1668 25.6379 26.2007L27.9969 31.6791ZM31.1498 26.9435C30.8189 26.8758 30.4808 27.0214 30.3027 27.3083L28.8671 29.6219L27.4964 26.4394C28.4372 26.3089 29.2982 25.7817 29.8486 24.94C30.0024 24.7048 30.1381 24.4947 30.2599 24.306C30.7486 23.5493 30.9937 23.1695 31.2604 22.9457C31.3801 22.8453 31.5304 22.7546 31.7342 22.6535L33.8171 27.4897L31.1498 26.9435ZM18.4623 30.9314L17.0944 28.5773C16.9247 28.2852 16.591 28.1301 16.2583 28.1881L13.5761 28.6566L16.195 23.0318C16.429 23.2643 16.6707 23.6383 17.1019 24.3061C17.2238 24.4948 17.3594 24.7049 17.5132 24.94C18.1937 25.9806 19.3482 26.5412 20.5418 26.4648L18.4623 30.9314ZM23.6809 24.0908C23.132 24.0908 22.583 24.248 21.5644 24.5623C21.3524 24.6277 21.1165 24.7005 20.851 24.7808C20.0831 25.0126 19.3025 24.729 18.863 24.0572C18.7111 23.825 18.5771 23.6174 18.4569 23.4311C17.3003 21.6401 17.1791 21.5385 15.2144 20.7106C15.0101 20.6245 14.7824 20.5285 14.5274 20.4192C13.7896 20.1032 13.3743 19.384 13.4696 18.587C13.5025 18.3115 13.5333 18.0662 13.5609 17.8461C13.8261 15.7309 13.7986 15.5751 12.8257 13.6778C12.7245 13.4804 12.6119 13.2608 12.4868 13.0133C12.1247 12.2969 12.2689 11.4792 12.8542 10.9298C13.0566 10.74 13.2376 10.5721 13.4002 10.4212C14.9633 8.9712 15.0423 8.8342 15.5165 6.75579C15.5658 6.53945 15.6208 6.29861 15.6841 6.02834C15.8671 5.24686 16.5033 4.71307 17.3047 4.66851C17.5817 4.65309 17.8284 4.64079 18.05 4.6298C20.1793 4.52375 20.3281 4.46961 22.0274 3.18216C22.2042 3.04819 22.4011 2.89899 22.6232 2.73275C23.2658 2.25178 24.0961 2.25178 24.7388 2.73275C24.9608 2.89899 25.1577 3.04819 25.3346 3.18216C27.0338 4.46961 27.1826 4.52375 29.3119 4.6298C29.5334 4.64079 29.7802 4.65309 30.0572 4.66851C30.8587 4.71307 31.4948 5.24686 31.6778 6.02834C31.7412 6.29851 31.7961 6.53935 31.8454 6.75569C32.3196 8.8341 32.3986 8.9712 33.9617 10.4211C34.1243 10.572 34.3054 10.7399 34.5077 10.9297C35.093 11.4791 35.2371 12.2968 34.875 13.0132C34.7499 13.2608 34.6372 13.4806 34.5359 13.678C33.5632 15.5751 33.5357 15.7309 33.801 17.8463C33.8285 18.0664 33.8594 18.3115 33.8922 18.5869C33.9875 19.3839 33.5723 20.1032 32.8344 20.4191C32.5794 20.5283 32.3518 20.6243 32.1474 20.7105C30.1828 21.5384 30.0617 21.6401 28.9051 23.431C28.7848 23.6174 28.6508 23.8249 28.4989 24.0572C28.0597 24.7289 27.2796 25.013 26.5109 24.7808C26.2454 24.7005 26.0094 24.6276 25.7975 24.5623C24.7787 24.248 24.2297 24.0908 23.6809 24.0908ZM31.6849 13.6164C31.6849 9.20296 28.0943 5.6124 23.6809 5.6124C19.2675 5.6124 15.6769 9.20296 15.6769 13.6164C15.6769 18.0299 19.2675 21.6206 23.6809 21.6206C28.0942 21.6206 31.6849 18.03 31.6849 13.6164ZM23.6808 20.0076C20.1567 20.0076 17.2898 17.1406 17.2898 13.6164C17.2898 10.0924 20.1567 7.22536 23.6808 7.22536C27.2048 7.22536 30.0718 10.0924 30.0718 13.6164C30.0719 17.1406 27.2048 20.0076 23.6808 20.0076ZM28.1102 11.7149L22.603 16.7127C22.449 16.8525 22.2549 16.922 22.0611 16.922C21.8543 16.922 21.6478 16.8429 21.4908 16.6858L19.2233 14.4184C18.9084 14.1035 18.9084 13.5928 19.2233 13.2779C19.5384 12.963 20.0489 12.963 20.3639 13.2779L22.0881 15.0021L27.0263 10.5206C27.356 10.2213 27.8661 10.2459 28.1654 10.5758C28.4647 10.9054 28.44 11.4155 28.1102 11.7149ZM43.4207 38.1389C44.4838 37.076 45.0236 35.7351 44.982 34.2612L44.5892 20.3964C44.5505 19.0273 43.1894 17.8006 41.7217 17.8006C41.7076 17.8006 41.6936 17.8007 41.6795 17.8009C40.9635 17.8124 38.6288 18.1981 38.6458 22.6794L38.6745 30.2108C38.6752 30.383 38.6643 30.5503 38.6419 30.7133C38.5851 30.6453 38.5242 30.5789 38.4593 30.514C37.4639 29.5187 35.8337 29.5061 34.748 30.4852C34.721 30.5095 34.6956 30.5356 34.6722 30.5634C33.4573 31.9997 31.9646 33.2578 30.7651 34.2686C30.3444 34.6232 29.9472 34.958 29.621 35.2519C28.2531 36.4849 28.0705 38.1836 28.0724 39.6827L28.0788 45.0464L27.3833 45.0404C26.9124 45.0361 26.4687 45.2164 26.132 45.5473C25.7953 45.8783 25.6075 46.3196 25.6035 46.7899L25.5855 48.888C25.5814 49.3582 25.7615 49.8027 26.0924 50.1394C26.4233 50.4761 26.8647 50.6637 27.3349 50.6678L38.2341 50.7614C38.2393 50.7614 38.2444 50.7615 38.2496 50.7615C38.7141 50.7615 39.1525 50.5818 39.4855 50.2544C39.8222 49.9235 40.0098 49.4822 40.0139 49.012L40.0319 46.9139C40.0359 46.4436 39.8559 45.9991 39.5249 45.6624C39.1941 45.3257 38.7527 45.1381 38.2824 45.1341L37.3857 45.1264V44.1739L43.4207 38.1389ZM38.4189 46.9001L38.4009 48.9981C38.4005 49.0488 38.3756 49.0838 38.3547 49.1043C38.3339 49.1249 38.3015 49.1489 38.2479 49.1487L27.3486 49.055C27.2981 49.0546 27.2631 49.0297 27.2426 49.0088C27.2221 48.988 27.1978 48.9526 27.1983 48.902L27.2164 46.8039C27.2168 46.7533 27.2417 46.7182 27.2626 46.6978C27.2831 46.6775 27.3182 46.6534 27.3679 46.6534H27.3694L38.2686 46.747C38.3509 46.7479 38.4197 46.8178 38.4189 46.9001ZM29.6918 45.0604L29.6853 39.6808C29.6833 38.0381 29.9776 37.1022 30.701 36.4502C31.0072 36.1742 31.3766 35.8628 31.8045 35.5023C33.0376 34.4629 34.5694 33.172 35.8639 31.6521C36.3166 31.2724 36.9347 31.2706 37.3187 31.6546C37.7274 32.0632 37.7279 32.5493 37.3221 33.0995C36.6809 33.8203 36.0066 34.4733 35.2932 35.1636C34.9508 35.4951 34.5965 35.8379 34.2392 36.1952C33.9243 36.5102 33.9243 37.0208 34.2393 37.3357C34.3968 37.4932 34.6031 37.5719 34.8095 37.5719C35.016 37.5719 35.2224 37.4932 35.3798 37.3356C35.7277 36.9877 36.077 36.6496 36.4149 36.3227C37.1603 35.6014 37.8643 34.9201 38.5539 34.142C38.5575 34.1379 39.0941 33.4816 39.0941 33.4816C39.9016 32.4874 40.292 31.4155 40.2874 30.2049L40.2587 22.6733C40.2512 20.6772 40.8055 19.4282 41.7053 19.4137C41.7109 19.4136 41.7162 19.4136 41.7217 19.4136C42.3206 19.4136 42.9627 19.9373 42.9769 20.4422L43.3696 34.3069C43.3989 35.3409 43.0323 36.2464 42.2802 36.9984L36.009 43.2696C35.8577 43.4208 35.7728 43.626 35.7728 43.8398V45.1126L29.6918 45.0604ZM27.9922 47.6241C28.1252 47.2895 28.5043 47.1261 28.8389 47.2592C29.1735 47.3921 29.3369 47.7713 29.204 48.1059C29.0709 48.4405 28.6918 48.6039 28.3573 48.4708C28.0226 48.3377 27.8591 47.9587 27.9922 47.6241ZM19.1178 45.5475C18.7811 45.2164 18.3363 45.037 17.8663 45.0406L17.1709 45.0466L17.1774 39.6829C17.1792 38.1837 16.9966 36.485 15.6287 35.2521C15.3027 34.9581 14.9053 34.6234 14.4847 34.2689C13.2853 33.258 11.7925 31.9999 10.5776 30.5636C10.5542 30.5358 10.5289 30.5097 10.5019 30.4854C9.4157 29.5063 7.78549 29.519 6.79059 30.5142C6.72557 30.5791 6.66478 30.6455 6.60793 30.7135C6.58544 30.5505 6.57466 30.3833 6.57536 30.2111L6.6041 22.6795C6.62103 18.1982 4.28637 17.8126 3.57031 17.801C3.5562 17.8008 3.54238 17.8007 3.52817 17.8007C2.06047 17.8007 0.699231 19.0275 0.660621 20.3965L0.267864 34.2614C0.226229 35.7353 0.766068 37.0761 1.82901 38.139L7.86402 44.1741V45.1266L6.96731 45.1343C6.49703 45.1383 6.05569 45.3259 5.72483 45.6626C5.39387 45.9993 5.21382 46.4438 5.21785 46.9141L5.2359 49.0122C5.23993 49.4824 5.42754 49.9237 5.76424 50.2546C6.09722 50.582 6.53554 50.7617 7.00018 50.7617C7.00532 50.7617 7.01056 50.7617 7.0156 50.7616L17.9148 50.668C18.3851 50.6639 18.8264 50.4763 19.1573 50.1396C19.4883 49.8029 19.6683 49.3584 19.6643 48.8882L19.6462 46.7901C19.6423 46.3198 19.4545 45.8785 19.1178 45.5475ZM9.47699 43.8398C9.47699 43.6259 9.392 43.4208 9.24079 43.2696L2.96948 36.9983C2.21743 36.2463 1.85089 35.3409 1.88012 34.3069L2.27288 20.4421C2.2873 19.9326 2.94508 19.405 3.5444 19.4137C4.44423 19.4282 4.99859 20.6772 4.99103 22.6732L4.9623 30.2049C4.95776 31.4155 5.3481 32.4873 6.1571 33.4833L6.67486 34.1172C6.67839 34.1216 6.6923 34.1379 6.69593 34.142C7.38558 34.9201 8.08954 35.6014 8.83493 36.3227C9.17284 36.6497 9.52205 36.9877 9.87005 37.3356C10.0275 37.4931 10.2339 37.5719 10.4403 37.5719C10.6467 37.5719 10.8531 37.4932 11.0105 37.3357C11.3255 37.0208 11.3255 36.5102 11.0106 36.1952C10.6533 35.838 10.2991 35.4951 9.95664 35.1636C9.24321 34.4732 8.56899 33.8203 7.92773 33.0995C7.52207 32.5494 7.52248 32.0633 7.93116 31.6547C8.31535 31.2706 8.93322 31.2724 9.38606 31.6521C10.6805 33.1721 12.2122 34.463 13.4455 35.5024C13.8732 35.863 14.2427 36.1743 14.549 36.4504C15.2723 37.1022 15.5665 38.0382 15.5645 39.681L15.5581 45.0605L9.47709 45.1127L9.47699 43.8398ZM18.0071 49.0089C17.9866 49.0298 17.9515 49.0547 17.901 49.0551L7.00179 49.1488C6.95028 49.1489 6.9157 49.125 6.89493 49.1044C6.87406 49.0839 6.84917 49.049 6.84876 48.9982L6.83072 46.9002C6.83021 46.8496 6.85451 46.8141 6.87497 46.7933C6.89544 46.7726 6.93052 46.7476 6.98103 46.7472L17.8801 46.6535H17.8816C17.9314 46.6535 17.9665 46.6776 17.9871 46.6979C18.008 46.7183 18.0329 46.7534 18.0333 46.804L18.0513 48.9021C18.0518 48.9527 18.0275 48.9881 18.0071 49.0089ZM17.2575 47.6241C17.3906 47.9587 17.2272 48.3377 16.8926 48.4708C16.558 48.6039 16.1789 48.4405 16.0459 48.1059C15.9128 47.7713 16.0762 47.3922 16.4108 47.2592C16.7454 47.1261 17.1245 47.2895 17.2575 47.6241Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <span>Process-3</span>
                                <h3 className="title">Quality Products</h3>
                                <div className="process-bottom">
                                    <p>This includes the use of robots & computer solution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-item-wrap">
                            <div className="process-item-2 text-center fade-top">
                                <div className="icon">
                                    <svg width="53" height="51" viewBox="0 0 53 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M52.2183 23.6601C49.1008 22.1093 46.2175 20.1266 43.6537 17.7705C44.9725 12.7773 45.9512 7.70055 46.5831 2.57502C46.7745 1.89474 46.4595 1.17392 45.8302 0.852257C45.2282 0.620899 44.5465 0.844847 44.1989 1.38815C39.6665 6.80971 33.4488 6.18711 26.8698 5.53094C20.8992 4.93356 14.7607 4.33863 9.87876 8.44075C9.55563 6.09588 7.58047 4.33089 5.21415 4.27251C2.84784 4.21413 0.788044 5.87956 0.349674 8.20565C-0.0886963 10.5317 1.22361 12.8327 3.44885 13.6396L13.3005 48.9091C13.4814 49.5571 13.9125 50.1065 14.4989 50.4363C15.0852 50.7661 15.7786 50.8492 16.4263 50.6674L17.2207 50.44C17.8661 50.2604 18.4135 49.8313 18.7422 49.2476C19.0709 48.6638 19.1538 47.9733 18.9727 47.3283L15.8518 36.1489C20.4107 30.3087 26.7645 30.9279 33.4912 31.6002C40.2366 32.2727 47.2136 32.9706 52.3432 26.8362L52.3457 26.8332C52.8572 26.1958 53.068 25.3683 52.9236 24.5639C52.8461 24.1674 52.5841 23.8316 52.2183 23.6601ZM2.02311 9.10376C2.02311 7.4056 3.39974 6.02897 5.0979 6.02897C6.79606 6.02897 8.17269 7.4056 8.17269 9.10376C8.17028 9.66441 8.01298 10.2135 7.71815 10.6904C7.60631 10.8325 7.48974 10.9583 7.38001 11.1075C7.36725 11.1332 7.35584 11.1596 7.34583 11.1865C6.49015 12.1187 5.14953 12.4293 3.97114 11.9681C2.79275 11.507 2.01888 10.3691 2.02311 9.10376ZM17.2113 48.3859C17.1101 48.565 16.9412 48.696 16.7425 48.7496L15.948 48.9769C15.535 49.0896 15.1083 48.8479 14.9927 48.4356L5.35267 13.9227C6.15534 13.8815 6.93475 13.6391 7.61923 13.2178L14.0374 36.1866L14.0403 36.1932L17.2807 47.8016C17.3363 47.9978 17.3113 48.2081 17.2113 48.3859ZM50.9937 25.711C46.4617 31.1301 40.2471 30.5093 33.6659 29.8517C27.1122 29.1967 20.3489 28.5212 15.2757 34.0862C13.6231 28.1826 11.9733 22.2777 10.3265 16.3716L9.06605 11.8535C9.11814 11.7787 9.16549 11.7007 9.21337 11.6228C13.7614 5.99726 20.0482 6.61608 26.6952 7.27918C33.0546 7.91399 39.6194 8.57059 44.6949 3.45406C44.0758 8.14004 43.1581 12.7817 41.9473 17.3507C41.7721 17.9655 41.9661 18.6263 42.4458 19.049C45.083 21.4611 48.0329 23.5075 51.2159 25.1329C51.1939 25.3418 51.1172 25.5411 50.9937 25.711Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <span>Process-4</span>
                                <h3 className="title">Quality Finished</h3>
                                <div className="process-bottom">
                                    <p>This includes the use of robots & computer solution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <div className="running-text running-3">
            <div className="bg-img" data-background="assets/img/bg-img/running-bg.jpg"></div>
            <div className="container">
                <div className="scroller" data-speed="slow">
                    <ul className="text-anim scroller__inner inner-3">
                        <li>Latest Projects</li>
                        <li className="stroke-text">Web Development</li>
                        <li>Latest Projects</li>
                        <li className="stroke-text">Web Development</li>
                        <li>Latest Projects</li>
                        <li className="stroke-text">Web Development</li>
                        <li>Latest Projects</li>
                        <li className="stroke-text">Web Development</li>
                    </ul>
                </div>
            </div>
        </div>
        

        <section className="project-section pt-130 overflow-hidden">
            <div className="container">
                <div className="project-top heading-space">
                    <div className="section-heading heading-3 mb-0">
                        <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">Recent Works Gallery</h4>
                        <h2 className="section-title" data-text-animation data-split="word" data-duration="1">our recent project gallery</h2>
                    </div>
                    <div className="swiper-pagination-wrap wow fade-in-bottom" data-wow-delay="600ms">
                        <div className="swiper-arrow">
                            <div className="swiper-nav swiper-next"><i className="fa-regular fa-arrow-left"></i></div>
                            <div className="swiper-nav swiper-prev"><i className="fa-regular fa-arrow-right"></i></div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="project-carousel swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="project-box">
                                        <div className="project-thumb">
                                            <div className="shape"></div>
                                            <img src="assets/img/project/project-img-4.png" alt="project" />
                                        </div>
                                        <a href="project-details.html" className="project-btn"><i className="fa-light fa-arrow-right-long"></i></a>
                                        <div className="project-content">
                                            <span>Team Members</span>
                                            <h3 className="title"><a href="project-details.html">Advertisement Design</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="project-box">
                                        <div className="project-thumb">
                                            <div className="shape"></div>
                                            <img src="assets/img/project/project-img-3.png" alt="project" />
                                        </div>
                                        <a href="project-details.html" className="project-btn"><i className="fa-light fa-arrow-right-long"></i></a>
                                        <div className="project-content">
                                            <span>Team Members</span>
                                            <h3 className="title"><a href="project-details.html">Web Application Design</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="project-box">
                                        <div className="shape"></div>
                                        <div className="project-thumb">
                                            <img src="assets/img/project/project-img-2.png" alt="project" />
                                        </div>
                                        <a href="project-details.html" className="project-btn"><i className="fa-light fa-arrow-right-long"></i></a>
                                        <div className="project-content">
                                            <span>Team Members</span>
                                            <h3 className="title"><a href="project-details.html">Medical Application Design</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="project-box">
                                        <div className="project-thumb">
                                            <div className="shape"></div>
                                            <img src="assets/img/project/project-img-3.png" alt="project" />
                                        </div>
                                        <a href="project-details.html" className="project-btn"><i className="fa-light fa-arrow-right-long"></i></a>
                                        <div className="project-content">
                                            <span>Team Members</span>
                                            <h3 className="title"><a href="project-details.html">Advertisement Design</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="counter-section counter-2">
            <div className="container">
                <div className="row gy-lg-0 gy-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item">
                            <h3 className="title"><span className="odometer" data-count="10">0</span></h3>
                            <p>Years of <br />Experience</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item">
                            <h3 className="title"><span className="odometer" data-count="18">0</span></h3>
                            <p>Sillded <br /> Perforamce</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item">
                            <h3 className="title"><span className="odometer" data-count="32">0</span></h3>
                            <p>Visited <br /> Conference</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-item">
                            <h3 className="title"><span className="odometer" data-count="1">0</span>k</h3>
                            <p>Years of <br />Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="team-section-2 pt-130 pb-130 fade-wrapper" data-background="assets/img/bg-img/team-bg.png">
            <div className="container">
                <div className="section-heading heading-3 text-center">
                    <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">Team Members</h4>
                    <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Experience Team Member</h2>
                </div>
                <div className="row gy-lg-0 gy-5">
                    <div className="col-lg-3 col-md-6 fade-top">
                        <div className="team-item team-item-2">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-1.png" alt="team" />
                            </div>
                            <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="team-details.html">Charlotte Amitina</a></h3>
                                <span>Ui/Ux Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 fade-top">
                        <div className="team-item team-item-2">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-2.png" alt="team" />
                            </div>
                            <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="team-details.html">William Edward</a></h3>
                                <span>Project Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 fade-top">
                        <div className="team-item team-item-2">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-3.png" alt="team" />
                            </div>
                            <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="team-details.html">Hannah Chloe</a></h3>
                                <span>Product Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 fade-top">
                        <div className="team-item team-item-2">
                            <div className="team-thumb">
                                <div className="gradient-color"></div>
                                <img src="assets/img/team/team-4.png" alt="team" />
                            </div>
                            <ul className="team-social-2">
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
                            <div className="team-content">
                                <h3 className="title"><a href="team-details.html">Maiselan Willam</a></h3>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="pricing-section pt-130 pb-130">
            <div className="container">
                <div className="section-heading heading-3 text-center">
                    <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">Our Pricing Plans</h4>
                    <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Our Flexible Pricing</h2>
                </div>
                <div className="pricing-tab wow fade-in-bottom" data-wow-delay="500ms">
                    <nav className="nav-wrap">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Billed Yearly <span>30%</span></button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Billed Monthly</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="row gy-lg-0 gy-4 justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h4 className="plan">Basic Plan</h4>
                                        <h2 className="price">$39</h2>
                                        <span>Basic features for up to 10 Users</span>
                                        <div className="pricing-btn-wrap">
                                            <a href="contact.html" className="rr-primary-btn pricing-btn">Get in Touch <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                            <a href="pricing.html" className="rr-primary-btn pricing-btn">View Details <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                        </div>
                                        <h3 className="feature">Features:</h3>
                                        <p>Everything in our free plan it’s included with all premium packages.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h4 className="plan">Strandard Plan</h4>
                                        <h2 className="price">$49</h2>
                                        <span>Basic features for up to 10 Users</span>
                                        <div className="pricing-btn-wrap">
                                            <a href="contact.html" className="rr-primary-btn pricing-btn">Get in Touch <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                            <a href="pricing.html" className="rr-primary-btn pricing-btn">View Details <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                        </div>
                                        <h3 className="feature">Features:</h3>
                                        <p>Everything in our free plan it’s included with all premium packages.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h4 className="plan">Premium Plan</h4>
                                        <h2 className="price">$59</h2>
                                        <span>Basic features for up to 10 Users</span>
                                        <div className="pricing-btn-wrap">
                                            <a href="contact.html" className="rr-primary-btn pricing-btn">Get in Touch <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                            <a href="pricing.html" className="rr-primary-btn pricing-btn">View Details <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                        </div>
                                        <h3 className="feature">Features:</h3>
                                        <p>Everything in our free plan it’s included with all premium packages.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="row gy-lg-0 gy-4 justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h4 className="plan">Basic Plan</h4>
                                        <h2 className="price">$69</h2>
                                        <span>Basic features for up to 10 Users</span>
                                        <div className="pricing-btn-wrap">
                                            <a href="contact.html" className="rr-primary-btn pricing-btn">Get in Touch <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                            <a href="pricing.html" className="rr-primary-btn pricing-btn">View Details <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                        </div>
                                        <h3 className="feature">Features:</h3>
                                        <p>Everything in our free plan it’s included with all premium packages.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h4 className="plan">Strandard Plan</h4>
                                        <h2 className="price">$79</h2>
                                        <span>Basic features for up to 10 Users</span>
                                        <div className="pricing-btn-wrap">
                                            <a href="contact.html" className="rr-primary-btn pricing-btn">Get in Touch <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                            <a href="pricing.html" className="rr-primary-btn pricing-btn">View Details <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                        </div>
                                        <h3 className="feature">Features:</h3>
                                        <p>Everything in our free plan it’s included with all premium packages.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h4 className="plan">Premium Plan</h4>
                                        <h2 className="price">$99</h2>
                                        <span>Basic features for up to 10 Users</span>
                                        <div className="pricing-btn-wrap">
                                            <a href="contact.html" className="rr-primary-btn pricing-btn">Get in Touch <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                            <a href="pricing.html" className="rr-primary-btn pricing-btn">View Details <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                        </div>
                                        <h3 className="feature">Features:</h3>
                                        <p>Everything in our free plan it’s included with all premium packages.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="appointment-section pb-130">
            <div className="container">
                <div className="row appointment-wrap align-items-center">
                    <div className="col-lg-5">
                        <div className="appointment-img reveal">
                            <img src="assets/img/images/apppoint-img.jpg" alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="appointment-content">
                            <div className="section-heading heading-3">
                                <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">Make An Appointment</h4>
                                <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Let’s Start A Discussion About Your Next Projects</h2>
                            </div>
                            <div className="appointment-form fade-wrapper">
                                <form action="mail.php" method="post" id="ajax_contact" className="form-horizontal">
                                    <div className="form-group row fade-top">
                                        <div className="col-md-6">
                                            <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Your Name*" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" id="email" name="email" className="form-control" placeholder="Your Email*" />
                                        </div>
                                    </div>
                                    <div className="form-group row fade-top">
                                        <div className="col-md-12">
                                            <input type="text" id="website" name="website" className="form-control" placeholder="Website URL*" />
                                        </div>
                                    </div>
                                    <div className="form-group row fade-top">
                                        <div className="col-md-12">
                                            <textarea id="message" name="message" cols="30" rows="5" className="form-control address" placeholder="Type Comment*"></textarea>
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                        <button id="submit" className="rr-primary-btn" type="submit">Get in Touch <i className="fa-sharp fa-regular fa-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="testimonial-section pb-130 fade-wrapper">
            <div className="container">
                <div className="section-heading heading-3 text-center">
                    <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">Testimonials</h4>
                    <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Clients feedback</h2>
                </div>
                <div className="row gy-lg-0 gy-4 testi-wrap justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="testi-item item-3 text-center fade-top">
                            <div className="testi-thumb">
                                <img src="assets/img/testi/testi-author-1.png" alt="img" />
                            </div>
                            <div className="testi-content">
                                <h3 className="author">Daniel Joseph <span>Writter</span></h3>
                                <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="testi-item item-3 text-center fade-top">
                            <div className="testi-thumb">
                                <img src="assets/img/testi/testi-author-3.png" alt="img" />
                            </div>
                            <div className="testi-content">
                                <h3 className="author">Victoria Madison <span>Developer</span></h3>
                                <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="testi-item item-3 mb-0 text-center fade-top">
                            <div className="testi-thumb">
                                <img src="assets/img/testi/testi-author-2.png" alt="img" />
                            </div>
                            <div className="testi-content">
                                <h3 className="author">Nicholas Thomas <span>Marketer</span></h3>
                                <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="blog-section-3 pb-130 fade-wrapper">
            <div className="shapes">
                <div className="shape shape-1"><img src="assets/img/shapes/blog-round-shape-1.png" alt="shape" /></div>
                <div className="shape shape-2"><img src="assets/img/shapes/blog-round-shape-2.png" alt="shape" /></div>
            </div>
            <div className="container">
                <div className="section-heading text-center">
                    <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">NEWS & LATEST UPDATES</h4>
                    <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Check Our Company Inside Story</h2>
                </div>
                <div className="row gy-lg-0 gy-5 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="post-card-2 card-3 fade-top">
                            <div className="post-thumb">
                                <img src="assets/img/blog/post-6.png" alt="post" />
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                        <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                                    </ul>
                                    <h3 className="title"><a href="blog-details.html">Redefining User Experience with Our Web Design Agency...</a></h3>
                                    <a href="blog-details.html" className="rr-primary-btn">Read More <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="post-card-2 card-3 fade-top">
                            <div className="post-thumb">
                                <img src="assets/img/blog/post-7.png" alt="post" />
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                        <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                                    </ul>
                                    <h3 className="title"><a href="blog-details.html">Why Prioritizes User Experience in Every Web Design Project</a></h3>
                                    <a href="blog-details.html" className="rr-primary-btn">Read More <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="post-card-2 card-3 fade-top">
                            <div className="post-thumb">
                                <img src="assets/img/blog/post-8.png" alt="post" />
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                        <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                                    </ul>
                                    <h3 className="title"><a href="blog-details.html">Demystifying the Wizardry of Our Web Design Agency</a></h3>
                                    <a href="blog-details.html" className="rr-primary-btn">Read More <i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <footer className="footer-section footer-2 footer-3 bg-dark-1 overflow-hidden">
            <div className="shape"><img src="assets/img/shapes/footer-shape-2.png" alt="footer" /></div>
            <div className="container">
                <div className="footer-top">
                    <h2 className="title" data-text-animation data-split="word" data-duration="1">Let’s Start Your Next <br /> Dream Project</h2>
                    <a href="contact.html" className="footer-btn"><i className="fa-sharp fa-regular fa-arrow-right"></i></a>
                </div>
                <div className="row footer-wrap">
                    <ul className="footer-text-social">
                        <li><a href="#">facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">twitter</a></li>
                        <li><a href="#">pinterest</a></li>
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">Skype</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row copyright-content content-2">
                        <div className="col-md-6">
                            <div className="site-logo"><a href="index.html"><img src="assets/img/logo/logo-2.png" alt="logo" /></a></div>
                        </div>
                        <div className="col-md-6">
                            <p>© 2024 Runok. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        

        <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>
    
    </div>
  )
}

export default Home