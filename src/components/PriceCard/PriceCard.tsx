import React, { JSX } from "react"
import './_priceCard.less'
import PlanFeatures from "./PlanFeatures/PlanFeatures"
import { IPlan } from "../../interfaces/data-interfaces"
import Button from "../Generic/Button/Button"

interface IPriceCard{
  plan: IPlan
}

const PriceCard: React.FC<IPriceCard> = (props: IPriceCard): JSX.Element => {
  return (
    <div className={`price-card ${props.plan.focus ? "price-card--focus" : "price-card--default"}`}>
      <h2 className="price-card-title">{props.plan.title}</h2>
      <p className="price-card-description">{props.plan.description}</p>
      <p className="price-card-price">&pound;{props.plan.price} <span>/ Month</span></p>
      <Button text="Get started now" btnClassName={`price-card-start-button ${props.plan.focus ? "primary" : "default"}`}/>
      <PlanFeatures features={props.plan.features}/>
    </div>
  )
}

export default PriceCard
