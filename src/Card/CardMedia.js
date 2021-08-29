import './CardMedia.css'

const CardMedia = ({
  children,
  style = {},
  height = 'auto',
  img
}) => {
  const thisStyle = {
    height: height || 'auto',
    backgroundImage: img || 'none'
  }

  return (
    <div className='CardMedia' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default CardMedia
