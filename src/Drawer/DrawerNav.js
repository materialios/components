import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { DrawerContext } from '@materialios/contexts'

import './DrawerNav.css'

const DrawerNav = ({ name = '', href = '', onClick = () => {} }) => {
  const { setDrawer } = useContext(DrawerContext)
  const location = useLocation()

  const handleClick = ({ name = '', href = '' }) => {
    onClick({ name, href })
    setDrawer({ show: false })
  }

  console.log('location', location)

  return (
    <Link
      className='DrawerNav'
      to={href}
      onClick={() => handleClick({ name, href })}
    >
      {name}
    </Link>
  )
}

export default DrawerNav
