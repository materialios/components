import { useContext } from 'react'

import { ResponsiveContext } from '@materialios/contexts'

import './Col.css'

const Col = ({
  children,
  portraitHandset = 0,
  portraitTablet = 0,
  portraitDesktop = 0,
  landscapeHandset = 0,
  landscapeTablet = 0,
  landscapeDesktop = 0,
  className = '',
  style = {}
}) => {
  const { orientation, device } = useContext(ResponsiveContext)

  let colClasses = ''
  if (orientation === 'portrait' && device === 'Handset' && portraitHandset) colClasses = colClasses + ' Col-Portrait-Handset-' + portraitHandset
  if (orientation === 'portrait' && device === 'Tablet' && portraitTablet) colClasses = colClasses + ' Col-Portrait-Tablet-' + portraitTablet
  if (orientation === 'portrait' && device === 'Desktop' && portraitDesktop) colClasses = colClasses + ' Col-Portrait-Desktop-' + portraitDesktop
  if (orientation === 'landscape' && device === 'Handset' && landscapeHandset) colClasses = colClasses + ' Col-Landscape-Handset-' + landscapeHandset
  if (orientation === 'landscape' && device === 'Tablet' && landscapeTablet) colClasses = colClasses + ' Col-Landscape-Tablet-' + landscapeTablet
  if (orientation === 'landscape' && device === 'Desktop' && landscapeDesktop) colClasses = colClasses + ' Col-Landscape-Desktop-' + landscapeDesktop

  return (
    <div className={`Col${colClasses ? ' ' + colClasses : ''}${className ? ' ' + className : ''}`} style={style}>
      {children}
    </div>
  )
}

export default Col
