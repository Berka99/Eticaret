import React from 'react'
import './CampaignItem.css'

function CampaignItem({ message }) {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">{message || 'Default message'}</h3>
    </div>
  )
}

export default CampaignItem
