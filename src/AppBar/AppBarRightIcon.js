import './AppBarRightIcon.css'

const AppBarRightIcon = ({ icon, onClick = () => {} }) => {
  const Icon = icon

  return (
    <div className='AppBarRightIcon'>
      {icon && (
        <Icon
          onClick={onClick}
        />
      )}
    </div>
  )
}

export default AppBarRightIcon
