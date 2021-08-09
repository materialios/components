import { useContext } from 'react'
import { Switch } from 'react-router-dom'

import { ResponsiveContext } from '@materialios/contexts'

import './MainScreen.css'

const MainScreen = ({ children, onChange = () => {} }) => {
  const { orientation, device, width } = useContext(ResponsiveContext)

  onChange({ orientation, device, width })

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
