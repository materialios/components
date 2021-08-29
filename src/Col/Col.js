import './Row.css'

const Row = ({
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
  let colClasses = ''
  if (portraitHandset) colClasses = colClasses + ' Col-Portrait-Handset-' + portraitHandset
  if (portraitTablet) colClasses = colClasses + ' Col-Portrait-Tablet-' + portraitTablet
  if (portraitDesktop) colClasses = colClasses + ' Col-Portrait-Desktop-' + portraitDesktop
  if (landscapeHandset) colClasses = colClasses + ' Col-Landscape-Handset-' + landscapeHandset
  if (landscapeTablet) colClasses = colClasses + ' Col-Landscape-Tablet-' + landscapeTablet
  if (landscapeDesktop) colClasses = colClasses + ' Col-Landscape-Desktop-' + landscapeDesktop

  return (
    <div className={`Row${colClasses ? ' ' + colClasses : ''}${className ? ' ' + className : ''}`} style={style}>
      {children}
    </div>
  )
}

export default Row
