import React, { JSX } from "react"
import './_priceCard.less'
import PlanFeatures from "../PlanFeatures/PlanFeatures"
import { IPlan } from "../../../interfaces/data-interfaces"
import Button from "../../Common/Button/Button"
import { PriceRange } from "../../../interfaces/enums"
import Price from "./Price"

interface IPriceCard{
  plan: IPlan;
  toggleMonthYearPrice: () => void;
  range: PriceRange;
}

const PriceCard: React.FC<IPriceCard> = (props: IPriceCard): JSX.Element => {
  
  return (
    <div className={`price-card ${props.plan.focus ? "price-card--focus" : "price-card--default"}`}>
      <h2 className="price-card-title">{props.plan.title}</h2>
      <p className="price-card-description">{props.plan.description}</p>
      <Price toggleMonthYearPrice={props.toggleMonthYearPrice} range={props.range} price={props.plan.price}/>
      <Button text="Get started now" btnClassName={`price-card-start-button ${props.plan.focus ? "primary" : "default"}`}/>
      <PlanFeatures features={props.plan.features}/>
    </div>
  )
}

export default PriceCard
