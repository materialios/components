import { useEffect } from 'react'

import './CardMedia.css'

const CardMedia = ({
  children,
  style = {},
  height = 'auto',
  img
}) => {
  useEffect(() => {
    const thisEl = document.querySelector('.CardMedia')
    console.log('card-media', [thisEl, thisEl.parentNode, thisEl.parentNode.childNodes])
  }, [])

  const thisStyle = {
    height: height || 'auto',
    backgroundImage: `url(${img})` || 'none'
  }

  return (
    <div className='CardMedia' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default CardMedia
