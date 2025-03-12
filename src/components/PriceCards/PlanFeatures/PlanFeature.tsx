import React, { JSX } from "react"
import FeatureAvalabilityIcon from '../../FeatureAvailabilityIcon'
import { IFeature } from "../../../interfaces/data-interfaces"

interface IPlanFeature{
  feature: IFeature
}

const PlanFeature: React.FC<IPlanFeature> = (props: IPlanFeature): JSX.Element => {
  return (
    <li className={`price-card-feature ${!props.feature.enabled && 'price-card-feature--not-available'}`}>
      <FeatureAvalabilityIcon available={props.feature.enabled}/>
      {props.feature.description}
    </li>
  )
}

export default PlanFeature