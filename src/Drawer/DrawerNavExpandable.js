import { useState } from 'react'

import './DrawerNavExpandable.css'

const DrawerNavExpandable = ({ name = '', children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`DrawerNavExpandable${isExpanded ? ' expanded' : ''}`}>
      <div
        className='DrawerNavExpandable-Nav'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {name}
      </div>
      {children}
    </div>
  )
}

export default DrawerNavExpandable
