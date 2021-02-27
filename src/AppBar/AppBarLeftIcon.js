import './AppBarLeftIcon.css'

const AppBarLeftIcon = ({ icon, onClick = () => {} }) => {
  const Icon = icon

  return (
    <div className='AppBarLeftIcon'>
      {icon && (
        <Icon
          onClick={onClick}
        />
      )}
    </div>
  )
}

export default AppBarLeftIcon
