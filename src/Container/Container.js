import { useContext } from 'react'

import { ResponsiveContext } from '@materialios/contexts'

import './Container.css'

const getWidth = (orientation, device, size, width = 0) => {
  if (orientation === 'Landscape') {
    if (device === 'Handset') return width - 0 // (width - (2 x (0)))
    else {
      if (width > 1120) return 1120 - 96 // (max-width - (2 x (24 + 24 + 0)))
      else return width - 96 // (width - (2 x (24 + 24 + 12)))
    }
  } else {
    if (device === 'Handset') return width - 0 // (width - (2 x (0)))
    else {
      if (size === 'Medium') return width - 0 // (width - (2 x (0)))
      else return width - 96 // (width - (2 x (24 + 24 + 0)))
    }
  }
}

const getPadding = (orientation, device) => {
  if (orientation === 'Landscape') {
    if (device === 'Handset') return '8px 12px'
    else return '12px'
  } else {
    if (device === 'Handset') return '8px'
    else return '12px'
  }
}

const Container = ({ children, withPadding = false, style = {} }) => {
  const { orientation, device, size, width } = useContext(ResponsiveContext)

  const mainScreenWidth = orientation === 'Landscape' && device === 'Desktop' ? (width - 320) : width
  const containerWidth = getWidth(orientation, device, size, mainScreenWidth)
  const padding = getPadding(orientation, device)

  const thisStyle = {
    width: `${containerWidth}px`,
    margin: `0 ${(mainScreenWidth - containerWidth) / 2}px`,
    padding: `${withPadding ? padding : 0}`
  }

  return (
    <div className='Container' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default Container
