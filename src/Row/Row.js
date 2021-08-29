import './Row.css'

const Row = ({ children, style = {} }) => {
  return (
    <div className='Row' style={style}>
      {children}
    </div>
  )
}

export default Row
