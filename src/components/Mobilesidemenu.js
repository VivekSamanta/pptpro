import React from 'react'

function Mobilesidemenu() {
  return (
    <>
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
    </>
  )
}

export default Mobilesidemenu
