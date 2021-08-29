import { useContext } from 'react'

import { ResponsiveContext } from '@materialios/contexts'

import './Container.css'

const getWidth = (orientation, device, size, width = 0) => {
  if (orientation === 'Landscape') {
    if (device === 'Handset') return width - 24 // (width - (2 x 12))
    else {
      if (width > 1120) return 1120 - 120 // (max-width - (2 x (24 + 24 + 12)))
      else return width - 120 // (width - (2 x (24 + 24 + 12)))
    }
  } else {
    if (device === 'Handset') return width - 16 // (width - (2 x 8))
    else {
      if (size === 'Medium') return width - 24 // (width - (2 x 12))
      else return width - 120 // (width - (2 x (24 + 24 + 12)))
    }
  }
}

const Container = ({ children, withPadding = false, style = {} }) => {
  const { orientation, device, size, width } = useContext(ResponsiveContext)

  const mainScreenWidth = orientation === 'Landscape' && device === 'Desktop' ? (width - 320) : width
  const containerWidth = getWidth(orientation, device, size, mainScreenWidth)
  const padding = orientation === 'Landscape' && device === 'Handset' ? 16 : 12

  const thisStyle = {
    width: `${containerWidth}px`,
    margin: `0 ${(mainScreenWidth - containerWidth) / 2}px`,
    paddingLeft: `${withPadding ? padding : 0}px`,
    paddingRight: `${withPadding ? padding : 0}px`
  }

  return (
    <div className='Container' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default Container
