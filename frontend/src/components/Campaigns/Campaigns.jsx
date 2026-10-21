import React from 'react'
import './Campaigns.css'
import CampaignItem from './CampaignItem'

function Campaigns() {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <CampaignItem
            message={'Fashion Month Ready in Capital Shop'}
          ></CampaignItem>
          <CampaignItem
            message={'Discover the Latest Trends at Unbeatable Prices'}
          ></CampaignItem>
        </div>
        <div className="campaigns-wrapper">
          <CampaignItem
            message={'Upgrade Your Wardrobe with Our New Season Collection'}
          ></CampaignItem>
          <CampaignItem
            message={'Exclusive Deals for Your Summer Essentials'}
          ></CampaignItem>
        </div>
      </div>
    </section>
  )
}

export default Campaigns
