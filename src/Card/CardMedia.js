import { useEffect, useState } from 'react'

import './CardMedia.css'

const CardMedia = ({
  children,
  style = {},
  height = 'auto',
  img
}) => {
  const [isMediaOnly, setIsMediaOnly] = useState(false)

  useEffect(() => {
    const thisEl = document.querySelector('.CardMedia')
    thisEl.parentNode.childNodes.length === 1 && setIsMediaOnly(true)
  }, [])

  const thisStyle = {
    height: height || 'auto',
    backgroundImage: `url(${img})` || 'none',
    borderRadius: isMediaOnly ? 'inherit inherit inherit inherit' : 'inherit inherit 0 0'
  }

  console.log('isMediaOnly', [isMediaOnly, thisStyle])

  return (
    <div className='CardMedia' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default CardMedia
