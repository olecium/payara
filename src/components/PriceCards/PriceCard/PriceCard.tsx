import React, { JSX } from "react"
import './_priceCard.less'
import PlanFeatures from "../PlanFeatures/PlanFeatures"
import { IPlan } from "../../../interfaces/data-interfaces"
import Button from "../../Common/Button/Button"
import { PriceRange } from "../../../interfaces/enums"
import { usePrice } from "../../hooks/usePrice"

interface IPriceCard{
  plan: IPlan;
  toggleMonthYearPrice: () => void;
  range: PriceRange;
}

const PriceCard: React.FC<IPriceCard> = (props: IPriceCard): JSX.Element => {
  const price = usePrice(props.range, props.plan.price)

  return (
    <div className={`price-card ${props.plan.focus ? "price-card--focus" : "price-card--default"}`}>
      <h2 className="price-card-title">{props.plan.title}</h2>
      <p className="price-card-description">{props.plan.description}</p>
      <p className="price-card-price">
        <span className="price-card-price-number">&pound;{price}</span>
        <span className="price-card-price-range">
          / <button onClick={props.toggleMonthYearPrice}>
              {props.range === PriceRange.month ? "Month" : "Year"}
            </button>
          </span>
      </p>
      <Button text="Get started now" btnClassName={`price-card-start-button ${props.plan.focus ? "primary" : "default"}`}/>
      <PlanFeatures features={props.plan.features}/>
    </div>
  )
}

export default PriceCard
