import React from 'react'
import SvgIcon from './Svg'

function Sidebar() {
  return (
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
  )
}

export default Sidebar
