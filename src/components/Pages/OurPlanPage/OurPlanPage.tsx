import React, { JSX } from "react"
import './_ourPlan.less'
import PriceCards from "../../PriceCards/PriceCards"

const OurPlanPage: React.FC = ():JSX.Element => {
  return (      
    <div className='our-plan'>
      <div className='our-plan-inner-wrapper'>
          <h1 className='our-plan-title'>Powerful features for <span className='our-plan-title-accent'>powerful creators</span></h1>
          <p className='our-plan-subtitle'>Choose a plan that's right for you</p>     
          <PriceCards />
      </div>
    </div>
  )
}

export default OurPlanPage
