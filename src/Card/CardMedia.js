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
    borderRadius: isMediaOnly ? '4px 4px 4px 4px' : '4px 4px 0 0'
  }

  return (
    <div className='CardMedia' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default CardMedia
