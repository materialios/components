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
      console.log('abc', [
        children[i],
        children[i].props ? children[i].props.href : 'susi',
        location.pathname,
        children[i].props && children[i].props.href === location.pathname
      ])
      if (children[i].props && children[i].props.href === location.pathname) setIsExpanded(true)
    }
  }, [location, children])

  return (
    <div className={`DrawerNavExpandable${isExpanded ? ' expanded' : ''}`}>
      <div
        className='DrawerNavExpandable-Nav'
        onClick={() => setIsExpanded(!isExpanded)}
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
