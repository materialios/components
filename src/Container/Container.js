import { useContext } from 'react'

import { ResponsiveContext } from '@materialios/contexts'

import './Container.css'

const getPadding = (orientation, device, size, width = 0, withPadding = false) => {
  if (withPadding) {
    if (orientation === 'Landscape') {
      if (device === 'Handset') return '8px 8px'
      else {
        if (width > 1120) return `12px ${((width - 1120) / 2) + 60}px`
        else return '12px 60px'
      }
    } else {
      if (device === 'Handset') return '8px 8px'
      else {
        if (size === 'Medium') return '12px 60px'
        else return `12px ${((width - 720) / 2) + 60}px`
      }
    }
  } else {
    if (orientation === 'Landscape') {
      if (device === 'Handset') return '0 0'
      else {
        if (width > 1120) return `0 ${((width - 1120) / 2) + 48}px`
        else return '0 48px'
      }
    } else {
      if (device === 'Handset') return '0 0'
      else {
        if (size === 'Medium') return '0 0'
        else return `0 ${((width - 720) / 2) + 48}px`
      }
    }
  }
}

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
  withPadding = false,
  autoHeight = false,
  //
  children,
  style = {}
}) => {
  const { orientation, device, size, width, height } = useContext(ResponsiveContext)

  const mainScreenWidth = orientation === 'Landscape' && device === 'Desktop' ? (width - 320) : width
  const padding = getPadding(orientation, device, size, mainScreenWidth, withPadding)
  const containerHeight = getHeight(orientation, device, height)

  const thisStyle = {
    width: `${mainScreenWidth}px`,
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
