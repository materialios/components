import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {
  ExpandMoreIcon,
  ExpandLessIcon
} from '@materialios/icons'

import './DrawerNavExpandable.css'

const DrawerNavExpandable = ({ name = '', children }) => {
  const location = useLocation()

  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    for (let i = 0; i < children.length; i++) {
      if (children[i].props && children[i].props.href === location.pathname) setIsExpanded(true)
    }
  }, [location, children])

  const handleClick = () => {
    // const drawerNavExpandables = document.querySelectorAll('.DrawerNavExpandable')
    // for (let i = 0; i < drawerNavExpandables.length; i++) {
    //   drawerNavExpandables[i].classList.remove('expanded')
    // }
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`DrawerNavExpandable${isExpanded ? ' expanded' : ''}`}>
      <div
        className='DrawerNavExpandable-Nav'
        onClick={handleClick}
      >
        <div className='DrawerNavExpandable-Nav-Text'>
          {name}
        </div>
        <div className='DrawerNavExpandable-Nav-Icon'>
          {
            isExpanded
              ? <ExpandLessIcon />
              : <ExpandMoreIcon />
          }
        </div>
      </div>
      {children}
    </div>
  )
}

export default DrawerNavExpandable
