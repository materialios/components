import './CardMedia.css'

const CardMedia = ({
  children,
  style = {},
  height = 'auto',
  img
}) => {
  console.log('img', img)
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
