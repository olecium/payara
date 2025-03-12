import { useState } from 'react'
import './assets/less/style.less'
import OurPlan from './components/Pages/OurPlanPage/OurPlanPage'
import { Theme } from './interfaces/enums'
import Button from './components/Common/Button/Button'

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.light)

  const toggleTheme = (): void => {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark)
  }

  return (
    <div className={`theme-${theme.valueOf()}`}>
      <Button 
          clickHandler={toggleTheme}
          btnClassName="theme-toggle-button"
          text={theme === Theme.dark ? `${Theme.light.valueOf()}en` : `${Theme.dark.valueOf()}en`}
      />
      <OurPlan/>
    </div>
  )
}

export default App
