import './CardMedia.css'

const CardMedia = ({
  children,
  height = 'auto',
  style = {}
}) => {
  const thisStyle = {
    height: height || 'auto'
  }

  return (
    <div className='CardMedia' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default CardMedia
