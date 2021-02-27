import { useContext } from 'react'
import { Switch } from 'react-router-dom'

import { ResponsiveContext } from '@materialios/contexts'

import './MainScreen.css'

const MainScreen = ({ children }) => {
  const { orientation, device, width } = useContext(ResponsiveContext)

  const style = {
    width: `${orientation === 'Landscape' && device === 'Desktop' ? (width - 320) : width}px`
  }

  return (
    <div className='MainScreen' style={style}>
      <Switch>
        {children}
      </Switch>
    </div>
  )
}

export default MainScreen
