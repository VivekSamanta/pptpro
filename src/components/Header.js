import React from 'react'

function Header() {
  return (
    <header className="header sticky-active">
            <div className="primary-header">
                <div className="primary-header-inner">
                    <div className="header-logo d-lg-block">
                        <a href="/">
                            <img src="assets/img/logo/logo-2.png" alt="Logo" />
                        </a>
                    </div>
                    <div className="header-right-wrap">
                        <div className="header-menu-wrap">
                            <div className="mobile-menu-items">
                                <ul>
                                    <li>
                                        <a href="about">About</a>
                                    </li>
                                    <li>
                                        <a href="team">Team</a>
                                    </li>
                                    <li>
                                        <a href="service">Services</a>
                                    </li>
                                    <li>
                                        <a href="shop">Shop</a>
                                    </li>
                                    <li>
                                        <a href="blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="contact">Contact</a>
                                    </li>
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
  )
}

export default Header
