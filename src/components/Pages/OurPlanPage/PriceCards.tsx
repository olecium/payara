import React, { JSX } from "react"
import PriceCard from '../../PriceCard/PriceCard'
import data from './../../../data/pricePlans.json'

const PriceCards: React.FC = ():JSX.Element => {
  return (
    <div className="price-cards"> 
      {data.pricePlans.map((plan) => <PriceCard plan={plan}/>)}
    </div>
  )
}

export default PriceCards
