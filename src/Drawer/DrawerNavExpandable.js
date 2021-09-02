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
    for (const child in children) {
      console.log('child', [
        children,
        children[0],
        child,
        child.props ? child.props.href : 'susi',
        location.pathname,
        child.props && child.props.href === location.pathname
      ])
      if (child.props && child.props.href === location.pathname) setIsExpanded(true)
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
