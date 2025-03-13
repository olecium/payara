import React, { JSX } from "react"
import PlanFeature from './PlanFeature'
import { IFeature } from "../../../interfaces/data-interfaces"

interface IPlanFeatures{
  features: IFeature[]
}

const PlanFeatures: React.FC<IPlanFeatures> = (props: IPlanFeatures): JSX.Element => {
  return (
    <ul className="price-card-features">
        {props.features.map((feature, i) => <PlanFeature key={i} feature={feature}/>)}
    </ul>
  )
}

export default PlanFeatures