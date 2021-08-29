import './Card.css'

const Card = ({
  children,
  className = '',
  height = 'auto',
  style = {}
}) => {
  const thisStyle = {
    height: height || 'auto'
  }

  return (
    <div className='Card' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default Card
