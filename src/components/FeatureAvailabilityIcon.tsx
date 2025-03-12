import React, { JSX } from "react"
import { NotAvailableIcon, TickIcon } from "./SVGExports"

interface IFeatureAvalabilityIcon{
    available: boolean
}

const FeatureAvailabilityIcon: React.FC<IFeatureAvalabilityIcon> = (props: IFeatureAvalabilityIcon): JSX.Element => {
  return (
    <>{props.available ? <TickIcon/> : <NotAvailableIcon/>}</>
  )
}

export default FeatureAvailabilityIcon