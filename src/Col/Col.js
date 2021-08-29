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
  if (orientation === 'Portrait' && device === 'Handset' && portraitHandset) colClasses = colClasses + ' Col-Portrait-Handset-' + portraitHandset
  if (orientation === 'Portrait' && device === 'Tablet' && portraitTablet) colClasses = colClasses + ' Col-Portrait-Tablet-' + portraitTablet
  if (orientation === 'Portrait' && device === 'Desktop' && portraitDesktop) colClasses = colClasses + ' Col-Portrait-Desktop-' + portraitDesktop
  if (orientation === 'Landscape' && device === 'Handset' && landscapeHandset) colClasses = colClasses + ' Col-Landscape-Handset-' + landscapeHandset
  if (orientation === 'Landscape' && device === 'Tablet' && landscapeTablet) colClasses = colClasses + ' Col-Landscape-Tablet-' + landscapeTablet
  if (orientation === 'Landscape' && device === 'Desktop' && landscapeDesktop) colClasses = colClasses + ' Col-Landscape-Desktop-' + landscapeDesktop

  return (
    <div className={`Col${colClasses ? ' ' + colClasses : ''}${className ? ' ' + className : ''}`} style={style}>
      {children}
    </div>
  )
}

export default Col
