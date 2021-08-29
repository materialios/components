import { useState } from 'react'

import { ExpandMoreIcon } from '@materialios/icons'

import './DrawerNavExpandable.css'

const DrawerNavExpandable = ({ name = '', children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

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
          <ExpandMoreIcon />
        </div>
      </div>
      {children}
    </div>
  )
}

export default DrawerNavExpandable
