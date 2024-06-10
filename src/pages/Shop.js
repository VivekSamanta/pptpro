import React from 'react'
import Header from '../components/Header'
import Popup from '../components/Popup'
import Sidebar from '../components/Sidebar'
import Preloader from '../components/Preloader'
import Footer from '../components/Footer'

function Shop() {
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
                    <h1 className="title">Our Shop Pages</h1>
                    <h4 className="sub-title"><a className="home" href="/">Home </a><span></span><a className="inner-page" href="shop"> Our Shop Page</a></h4>
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
                                <li><a href="/"><i className="fa-light fa-arrow-down"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Watch Series</span>
                                <h3 className="title"><a href="/">Multiply Tokon Maxer</a><span> <span className="offer">$350.00</span>$250.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-2.png" alt="shop" />
                                <ul className="shop-list">
                                <li><a href="/"><i className="fa-light fa-arrow-down"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Headphone Box</span>
                                <h3 className="title"><a href="/">Boat Headphone</a><span>$350.00</span></h3>
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
                                <li><a href="/"><i className="fa-light fa-arrow-down"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">UPS Service</span>
                                <h3 className="title"><a href="/">Latest Ups available</a><span> <span className="offer">$250.00</span>$157.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-4.png" alt="shop" />
                                <ul className="shop-list">
                                <li><a href="/"><i className="fa-light fa-arrow-down"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Headphone Box</span>
                                <h3 className="title"><a href="/">Beats Headset</a><span>$342.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-5.png" alt="shop" />
                                <ul className="shop-list">
                                    <li><a href="/"><i className="fa-light fa-arrow-down"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Watch Series</span>
                                <h3 className="title"><a href="/">Multiply Tokon Maxer</a><span>$223.00</span></h3>
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
                                    <li><a href="/"><i className="fa-light fa-arrow-down"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Headphone Box</span>
                                <h3 className="title"><a href="/">Boat Headphone</a><span> <span className="offer">$600.00</span>$421.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="shop-item">
                            <div className="shop-thumb">
                                <div className="overlay"></div>
                                <img src="assets/img/shop/shop-7.png" alt="shop" />
                                <ul className="shop-list">
                                    <li><a href="/"><i className="fa-light fa-arrow-down"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">UPS Service</span>
                                <h3 className="title"><a href="/">Latest Ups available</a><span>$153.00</span></h3>
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
                                    <li><a href="/"><i className="fa-light fa-arrow-down"></i></a></li>
                                </ul>
                            </div>
                            <div className="shop-content">
                                <span className="category">Headphone Box</span>
                                <h3 className="title"><a href="/">Beats Headset</a><span><span className="offer">$400.00</span>$230.00</span></h3>
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

export default Shop
