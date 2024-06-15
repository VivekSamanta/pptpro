import React from 'react'
import Header from '../components/Header'
import Popup from '../components/Popup'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

function Shopdetails() {
  return (
    <div>

        <Helmet>
            <title>PPTPRO | Shop-Details</title>
        </Helmet>
      
        <Header />

        <Popup />

        <Sidebar />

        <section class="page-header" data-background="assets/img/bg-img/page-header-bg.jpg">
            <div class="overlay"></div>
            <div class="shapes">
                <div class="shape shape-1"><img src="assets/img/shapes/page-header-shape-1.png" alt="shape" /></div>
                <div class="shape shape-2"><img src="assets/img/shapes/page-header-shape-2.png" alt="shape" /></div>
                <div class="shape shape-3"><img src="assets/img/shapes/page-header-shape-3.png" alt="shape" /></div>
            </div>
            <div class="container">
                <div class="page-header-content text-center">
                    <h1 class="title">Shop Details</h1>
                    <h4 class="sub-title"><a class="home" href="/">Home </a><span></span><a class="inner-page" href="shopdetails"> Shop Details</a></h4>
                </div>
            </div>
        </section>
        

        <section class="shop-section single pt-130 pb-130">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 product-details-wrap">
                        <span class="sale">Sale</span>
                        <div class="swiper product-gallary">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="gallary-item">
                                        <img src="assets/img/shop/shop-slider-1.jpg" alt="shop" />
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="gallary-item">
                                        <img src="assets/img/shop/shop-slider-1.jpg" alt="shop" />
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="gallary-item">
                                        <img src="assets/img/shop/shop-slider-1.jpg" alt="shop" />
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-nav-next"><i class="las la-arrow-right"></i></div>
                            <div class="swiper-nav-prev"><i class="las la-arrow-left"></i></div>
                        </div>
                        <div class="swiper product-gallary-thumb">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="thumb-item">
                                        <img src="assets/img/shop/shop-thumb-1.png" alt="shop" />
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="thumb-item">
                                        <img src="assets/img/shop/shop-thumb-2.png" alt="shop" />
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="thumb-item">
                                        <img src="assets/img/shop/shop-thumb-3.png" alt="shop" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-details">
                            <div class="product-info">
                                <div class="product-inner">
                                    <span class="category">Headset Design</span>
                                    <h3 class="title">Tony Gold Necklace's</h3>
                                    <div class="rating-wrap">
                                        <ul class="rating">
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                        </ul>
                                        <span>(1 customer review)</span>
                                    </div>
                                    <h4 class="price">$260.00 - $360.00</h4>
                                    <p class="desc">Eget taciti odio cum habitant egestas conubia turpis phasellus, ante parturient donec duis primis nam faucibus augue malesuada venenatis</p>
                                    <ul class="details-list">
                                        <li><i class="fa-light fa-arrow-right-arrow-left"></i>Free returns</li>
                                        <li><i class="fa-light fa-truck"></i>Free shipping via DHL, fully insured</li>
                                        <li><i class="fa-light fa-circle-check"></i>All taxes and customs duties included</li>
                                    </ul>
                                </div>
                                <div class="product-btn">
                                    <form>
                                        <input type="number" name="age" id="age" min="1" max="100" step="1" value="1" />
                                    </form>
                                    <div><a href="#" class="rr-primary-btn cart-btn">Add To Cart</a></div>
                                </div>
                                <ul class="product-meta">
                                    <li>SKU:<a href="#">ANQ4O6DWDZ</a></li>
                                    <li>Categories:<a href="#">Light Bulb</a> <a href="#">Table</a></li>
                                    <li>Tags:<a href="#">Iluminate</a> <a href="#">Textured</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section class="product-description pb-130">
            <div class="container">
                <ul class="nav tab-navigation" id="product-tab-navigation" role="tablist">
                    <li role="presentation">
                        <button class="active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                            role="tab" aria-controls="home" aria-selected="true">Description</button>
                    </li>
                    <li role="presentation">
                        <button id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab"
                            aria-controls="profile" aria-selected="false">Additional information</button>
                    </li>
                    <li role="presentation">
                        <button id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab"
                            aria-controls="contact" aria-selected="false">Reviews (3)</button>
                    </li>
                </ul>
                <div class="tab-content" id="product-tab-content">
                    <div class="tab-pane fade show active description" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <p class="mb-30">Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. Compellingly whiteboard client-centric sourcescross-platform schemas. Distinctively develop future-proof outsourcing without multimedia based portals. Progressively coordinate generation architectures for collaborative solutions. Professionally restore backward-compatible quality vectors before customer directed metrics. Holisticly restore technically sound internal or "organic" sources before client-centered human capital underwhelm holistic mindshare for prospective innovation.</p>
                        <p>Seamlessly target fully tested infrastructures whereas just in time process improvements. Dynamically exploit team driven functionalities vis a vis global total linkage redibly synthesize just in time technology rather than open-source strategic theme areas.</p>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <table class="table product-table">
                            <thead>
                                <tr>
                                    <th scope="col">Size</th>
                                    <th scope="col">Bust</th>
                                    <th scope="col">Waist</th>
                                    <th scope="col">Hip</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>S</td>
                                    <td>34 -36</td>
                                    <td>28-30</td>
                                    <td>38-40</td>
                                </tr>
                                <tr>
                                    <td>M</td>
                                    <td>36 -38</td>
                                    <td>30-32.5</td>
                                    <td>40-43</td>
                                </tr>
                                <tr>
                                    <td>L</td>
                                    <td>38-40</td>
                                    <td>32-34.5</td>
                                    <td>42-45.5</td>
                                </tr>
                                <tr>
                                    <td>XL</td>
                                    <td>40-42</td>
                                    <td>35-37</td>
                                    <td>46-38</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade review" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div class="row product-review gy-lg-0 gy-4">
                            <div class="col-lg-5 col-md-12">
                                <div class="reviewr-wrap">
                                    <div class="review-list">
                                        <div class="review-item">
                                            <div class="review-thumb">
                                                <img src="assets/img/shop/review-list-1.jpg" alt="img" />
                                            </div>
                                            <div class="content">
                                                <div class="content-top">
                                                    <h4 class="name">Eleanor Fant <span>06 March, 2023</span></h4>
                                                    <ul class="review">
                                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    </ul>
                                                </div>
                                                <p>Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.</p>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-thumb">
                                                <img src="assets/img/shop/review-list-2.jpg" alt="img" />
                                            </div>
                                            <div class="content">
                                                <div class="content-top">
                                                    <h4 class="name">Haliey White <span>06 March, 2023</span></h4>
                                                    <ul class="review">
                                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    </ul>
                                                </div>
                                                <p>Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-12">
                                <div class="review-form-wrap">
                                    <h4 class="title">Review this product</h4>
                                    <span class="publish">Your email address will not be published. Required fields are marked *</span>
                                    <div class="review-box">
                                        <span>Your ratings :</span>
                                        <ul class="review">
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="blog-contact-form form-2 review-form">
                                        <div class="request-form">
                                            <form action="contact.php" method="post" id="ajax_contact" class="form-horizontal">
                                                <div class="form-group row">
                                                    <div class="col-md-12">
                                                        <div class="form-item">
                                                            <input type="text" id="fullname" name="fullname" class="form-control" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-item">
                                                            <input type="text" id="email" name="email" class="form-control" placeholder="Your Email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-12">
                                                        <div class="form-item message-item">
                                                            <textarea id="message" name="message" cols="30" rows="5" class="form-control address" placeholder="Comment"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="checkbox-wrap">
                                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                                <label for="vehicle3">Save my name, email, and website in this browser for the next time I comment.</label><br />
                                                </div>
                                                <div class="submit-btn">
                                                    <button id="submit" class="rr-primary-btn" type="submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section class="shop-section pb-130">
            <div class="container">
                <div class="section-heading text-center">
                    <h4 class="sub-heading" data-text-animation="fade-in" data-duration="1.5">Similar Products</h4>
                    <h2 class="section-title" data-text-animation data-split="word" data-duration="1">Most Recent Products</h2>
                </div>
                <div class="row gy-lg-0 gy-4">
                    
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="shop-item">
                            <div class="shop-thumb">
                                <div class="overlay"></div>
                                <img src="assets/img/shop/shop-5.png" alt="shop" />
                                <ul class="shop-list">
                                    <li><a href="#"><i class="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i class="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div class="shop-content">
                                <span class="category">Watch Series</span>
                                <h3 class="title"><a href="shop-details.html">Multiply Tokon Maxer</a><span>$223.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="shop-item">
                            <div class="shop-thumb">
                                <div class="overlay"></div>
                                <img src="assets/img/shop/shop-6.png" alt="shop" />
                                <span class="sale">sale</span>
                                <ul class="shop-list">
                                    <li><a href="#"><i class="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i class="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div class="shop-content">
                                <span class="category">Headphone Box</span>
                                <h3 class="title"><a href="shop-details.html">Boat Headphone</a><span> <span class="offer">$600.00</span>$421.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="shop-item">
                            <div class="shop-thumb">
                                <div class="overlay"></div>
                                <img src="assets/img/shop/shop-7.png" alt="shop" />
                                <ul class="shop-list">
                                    <li><a href="#"><i class="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i class="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div class="shop-content">
                                <span class="category">UPS Service</span>
                                <h3 class="title"><a href="shop-details.html">Latest Ups available</a><span>$153.00</span></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="shop-item">
                            <div class="shop-thumb">
                                <div class="overlay"></div>
                                <img src="assets/img/shop/shop-8.png" alt="shop" />
                                <span class="sale">sale</span>
                                <ul class="shop-list">
                                    <li><a href="#"><i class="fa-regular fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i class="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa-light fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <div class="shop-content">
                                <span class="category">Headphone Box</span>
                                <h3 class="title"><a href="shop-details.html">Beats Headset</a><span><span class="offer">$400.00</span>$230.00</span></h3>
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

export default Shopdetails
