import { useContext } from 'react'
import { Routes } from 'react-router-dom'

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
      <Routes>
        {children}
      </Routes>
    </div>
  )
}

export default MainScreen
