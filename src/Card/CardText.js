import './CardText.css'

const CardText = ({
  children,
  height = 'auto',
  style = {}
}) => {
  const thisStyle = {
    height: height || 'auto'
  }

  return (
    <div className='CardText' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default CardText
