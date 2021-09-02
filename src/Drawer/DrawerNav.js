import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { DrawerContext } from '@materialios/contexts'

import './DrawerNav.css'

const DrawerNav = ({
  name = '',
  href = '',
  isDefault = false,
  onClick = () => {}
}) => {
  const { setDrawer } = useContext(DrawerContext)
  const location = useLocation()

  const handleClick = ({ name = '', href = '' }) => {
    onClick({ name, href })
    setDrawer({ show: false })
  }

  const getIsActive = (path = '') => {
    if (path === '/' && isDefault) return true
    else if (path === href) return true
  }

  const isActive = getIsActive(location.pathname)

  return (
    <Link
      className={`DrawerNav${isActive ? ' Active' : ''}`}
      to={href}
      onClick={() => handleClick({ name, href })}
    >
      {name}
    </Link>
  )
}

export default DrawerNav
