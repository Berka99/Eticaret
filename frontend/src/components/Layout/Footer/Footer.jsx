import React from 'react'
import './Footer.css'
import Policy from '../Policy/Policy'
import logo from '../../../../public/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <Policy />
      <footer className="footer">
        <div className="subscribe-row">
          <div className="container">
            <div className="footer-row-wrapper">
              <div className="footer-subscribe-wrapper">
                <div className="footer-subscribe">
                  <div className="footer-subscribe-top">
                    <h3 className="subscribe-title">
                      Get our emails for info on new items, sales and more.
                    </h3>
                    <p className="subscribe-desc">
                      We'll email you a voucher worth $10 off your first order
                      over $50.
                    </p>
                  </div>
                  <div className="footer-subscribe-bottom">
                    <form>
                      <input
                        type="text"
                        placeholder="Enter your email address."
                      />
                      <button className="btn">Subscribe</button>
                    </form>
                    <p className="privacy-text">
                      By subscribing you agree to our{' '}
                      <a href="#">
                        Terms & Conditions and Privacy & Cookies Policy.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-contact-wrapper">
                <div className="footer-contact-top">
                  <h3 className="contact-title">Download our app!</h3>
                </div>
                <div className="footer-contact-bottom">
                  <div className="download-app">
                    <a href="#">
                      <img src="/img/footer/app-store.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/img/footer/google-play.png" alt="" />
                    </a>
                  </div>
                  <p className="privacy-text">
                    <strong>Shopping App:</strong> Try our View in Your Room
                    feature, manage registries and save payment info.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets-row">
          <div className="container">
            <div className="footer-widgets">
              <div className="brand-info">
                <div className="footer-logo">
                  <Link to={'/'} className="logo">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <div className="footer-desc">
                  <p>
                    {' '}
                    Beykent Univercity, Ayazaga, Hadim Koruyolu Cd. No:19, 34398
                    Sarıyer/Istanbul
                  </p>
                </div>
                <div className="footer-contact">
                  <p>
                    <a href="tel:444 555 55 55">+90 444 1 997</a> –{' '}
                    <a href="mailto:beykent@beykent.edu.tr">
                      Email: beykent@beykent.edu.tr
                    </a>
                  </p>
                </div>
              </div>
              <div className="widget-nav-menu">
                <h4>Information</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Account</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <a href="#">My Orders</a>
                  </li>
                  <li>
                    <a href="#">My Wishlist</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Categories</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Accessory</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Shoes</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Shop</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Affiliate</a>
                  </li>
                  <li>
                    <a href="#">Bestsellers</a>
                  </li>
                  <li>
                    <a href="#">Latest Products</a>
                  </li>
                  <li>
                    <a href="#">Sale Products</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-row">
          <div className="container">
            <div className="footer-copyright">
              <div className="site-copyright">
                <p>Copyright 2024 © All right reserved.</p>
              </div>
              <a href="#">
                <img src="/img/footer/cards.png" alt="" />
              </a>
              <div className="footer-menu">
                <ul className="footer-menu-list">
                  <li className="list-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Returns Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
