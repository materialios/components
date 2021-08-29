import { useContext } from 'react'

import { ResponsiveContext } from '@materialios/contexts'

import './Container.css'

const getWidth = (orientation, device, size, width = 0) => {
  if (orientation === 'Landscape') {
    if (device === 'Handset') return width - 24 // (width - (2 x 12))
    else {
      if (size === 'Medium') return width - 24 // (width - (2 x (12)))
      else return 1000 //  ((960 + 160) - (2 x (12 + 24 + 24)))
    }
  } else {
    if (device === 'Handset') return width - 16 // (width - (2 x 8))
    else {
      if (size === 'Medium') return width - 24 // (width - (2 x (12)))
      else return 600 //  ((600 + 120) - (2 x (12 + 24 + 24)))
    }
  }
}

const Container = ({ children, style = {} }) => {
  const { orientation, device, size, width } = useContext(ResponsiveContext)

  const mainScreenWidth = orientation === 'Landscape' && device === 'Desktop' ? (width - 320) : width
  const containerWidth = getWidth(orientation, device, size, mainScreenWidth)
  console.log('containerWidth', containerWidth)

  const thisStyle = {
    width: `${containerWidth}px`
  }

  return (
    <div className='Container' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default Container
