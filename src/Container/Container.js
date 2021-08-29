import { useContext } from 'react'

import { ResponsiveContext } from '@materialios/contexts'

import './Container.css'

const getPadding = (orientation, device, size, width = 0, withPadding = false) => {
  if (orientation === 'Landscape') {
    if (device === 'Handset') return `8px ${withPadding ? 8 : 0}px`
    else {
      if (width > 1120) return `12px ${withPadding ? ((width - 1120) / 2) + 60 : ((width - 1120) / 2) + 48}px`
      else return `12px ${withPadding ? 60 : 48}px`
    }
  } else {
    if (device === 'Handset') return `8px ${withPadding ? 8 : 0}px`
    else {
      if (size === 'Medium') return `12px ${withPadding ? 60 : 48}px`
      else return `12px ${withPadding ? ((width - 720) / 2) + 60 : ((width - 720) / 2) + 48}px`
    }
  }
}

// const getPadding = (orientation, device) => {
//   if (orientation === 'Landscape') {
//     if (device === 'Handset') return '8px 12px'
//     else return '12px'
//   } else {
//     if (device === 'Handset') return '8px'
//     else return '12px'
//   }
// }

const getHeight = (orientation, device, height) => {
  if (orientation === 'Landscape') {
    if (device === 'Handset') return height - 48
    else if (device === 'Tablet') return height - 56
    else if (device === 'Desktop') return height - 64
  } else {
    if (device === 'Handset') return height - 56
    else if (device === 'Tablet') return height - 64
    else if (device === 'Desktop') return height - 72
  }
}

const Container = ({
  children,
  withPadding = false,
  autoHeight = false,
  style = {}
}) => {
  const { orientation, device, size, width, height } = useContext(ResponsiveContext)

  const mainScreenWidth = orientation === 'Landscape' && device === 'Desktop' ? (width - 320) : width
  // const containerWidth = getWidth(orientation, device, size, mainScreenWidth)
  // const padding = getPadding(orientation, device)
  const padding = getPadding(orientation, device, size, mainScreenWidth, withPadding)
  const containerHeight = getHeight(orientation, device, height)

  const thisStyle = {
    // width: `${containerWidth}px`,
    width: `${mainScreenWidth}px`,
    // margin: `0 ${(mainScreenWidth - containerWidth) / 2}px`,
    // padding: `${withPadding ? padding : 0}`,
    padding: padding,
    height: autoHeight ? 'auto' : containerHeight + 'px',
    overflow: 'auto'
  }

  return (
    <div className='Container' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default Container
