import { useContext } from 'react'
import Proptypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { CartContext } from '../../../context/CartProvider'
import logo from '../../../../public/logo.png'
import './Header.css'

const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext)
  const user = localStorage.getItem('user')
  const { pathname } = useLocation()

  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            SUMMER SALE AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 25%!
            <Link to={'/shop'}> SHOP NOW</Link>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={'/'} className="logo">
                <img src={logo} />
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={'/'}
                      className={`menu-link ${pathname === '/' && 'active'}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={'/shop'}
                      className={`menu-link ${
                        pathname === '/shop' && 'active'
                      }`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={'/contact'}
                      className={`menu-link ${
                        pathname === '/contact' && 'active'
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={'/auth'} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                <div className="header-cart">
                  <Link to={'/cart'} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to log out?')) {
                        {
                          localStorage.removeItem('user')
                          window.location.href = '/'
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  setIsSearchShow: Proptypes.func,
}
