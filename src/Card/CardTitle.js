import './CardTitle.css'

const CardTitle = ({
  children,
  height = 'auto',
  style = {}
}) => {
  const thisStyle = {
    height: height || 'auto'
  }

  return (
    <div className='CardTitle' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default CardTitle
