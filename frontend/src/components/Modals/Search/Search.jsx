import React, { useState } from 'react'
import './Search.css'
import { message } from 'antd'
import { Link } from 'react-router-dom'

function Search({ isSearchShow, setIsSearchShow }) {
  const [searchResults, setsearchResults] = useState(null)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const handleSearch = async (e) => {
    const productName = e.target.value

    if (productName.trim().length === 0) {
      setsearchResults(null)
      return
    }

    try {
      const res = await fetch(
        `${apiUrl}/api/products/search/${productName.trim()}`
      )
      if (!res.ok) {
        message.error('Search failed')
        return
      }
      const data = await res.json()
      setsearchResults(data)
    } catch (error) {
      console.log('Search error:', error)
    }
  }

  const handleCloseModal = () => {
    setIsSearchShow(false)
    setsearchResults(null)
  }
  return (
    <div className={`modal-search ${isSearchShow ? 'show' : ''} `}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Search for products</h3>
        <p className="modal-text">
          Start typing to see products you are looking for.
        </p>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search a product"
            onChange={handleSearch}
          />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>RESULTS FROM PRODUCT</h3>
          </div>
          <div
            className="results"
            style={{
              display: `${
                searchResults?.length === 0 || !searchResults ? 'flex' : 'grid'
              }`,
            }}
          >
            {searchResults?.length === 0 && (
              <a
                href="#"
                className="result-item"
                style={{
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                😔We couldn't find the product you are looking for. 😔
              </a>
            )}
            {!searchResults && (
              <b
                className="result-item"
                style={{
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                Search Product
              </b>
            )}
            {searchResults?.length > 0 &&
              searchResults?.map((resultItem) => (
                <Link
                  to={`product/${resultItem._id}`}
                  className="result-item"
                  key={resultItem._id}
                  onClick={handleCloseModal}
                >
                  <img
                    src={resultItem.img[0]}
                    className="search-thumb"
                    alt=""
                  />
                  <div className="search-info">
                    <h4>{resultItem.name}</h4>

                    <span className="search-price">
                      ${resultItem.price.current.toFixed(2)}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={handleCloseModal}
        ></i>
      </div>
      <div className="modal-overlay" onClick={handleCloseModal}></div>
    </div>
  )
}

export default Search
