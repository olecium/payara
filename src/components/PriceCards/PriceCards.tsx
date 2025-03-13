import React, { JSX, useState } from "react"
import PriceCard from './PriceCard/PriceCard'
import data from '../../data/pricePlans.json'
import { PriceRange } from "../../interfaces/enums";

const PriceCards: React.FC = ():JSX.Element => {
  const [range, setRange] = useState<number>(1);

  const toggleMonthYearPrice = (): void => {
    setRange(range === PriceRange.month ? PriceRange.year : PriceRange.month)
  }

  return (
    <div className="price-cards"> 
      {data.pricePlans.map((plan, i) => <PriceCard key={i} plan={plan} range={range} toggleMonthYearPrice={toggleMonthYearPrice}/>)}
    </div>
  )
}

export default PriceCards
