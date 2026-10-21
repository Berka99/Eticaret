import { Fragment } from 'react'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
import Header from '../components/Layout/Header/Header'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'

const ShopPage = () => {
  return (
    <Fragment>
      <Categories />
      <Products />
      <CampaignSingle />
    </Fragment>
  )
}

export default ShopPage
