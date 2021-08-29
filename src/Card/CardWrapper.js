import './CardWrapper.css'

const CardWrapper = ({
  children,
  height = 'auto',
  style = {}
}) => {
  const thisStyle = {
    height: height || 'auto'
  }

  return (
    <div className='CardWrapper' style={{ ...thisStyle, ...style }}>
      {children}
    </div>
  )
}

export default CardWrapper
