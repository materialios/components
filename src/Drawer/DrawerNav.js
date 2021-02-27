import { Link } from 'react-router-dom'

import './DrawerNav.css'

const DrawerNav = ({ name = '', href = '', onClick = () => {} }) => {
  return (
    <Link
      className='DrawerNav'
      to={href}
      onClick={() => onClick({ name, href })}
    >
      {name}
    </Link>
  )
}

export default DrawerNav
