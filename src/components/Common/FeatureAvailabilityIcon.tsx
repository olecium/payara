import React, { JSX } from "react"
import { DisabledIcon, EnabledIcon } from "./SVGExports"

interface IFeatureAvalabilityIcon{
    available: boolean
}

const FeatureAvailabilityIcon: React.FC<IFeatureAvalabilityIcon> = (props: IFeatureAvalabilityIcon): JSX.Element => {
  return (
    <>{props.available ? <EnabledIcon/> : <DisabledIcon/>}</>
  )
}

export default FeatureAvailabilityIcon