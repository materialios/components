import { useContext } from 'react'

import { DrawerContext } from '@materialios/contexts'

import './Drawer.css'

const Drawer = ({ children }) => {
  const [{ show }, setDrawer] = useContext(DrawerContext)

  return (
    <div className={`Drawer${show ? ' show' : ''}`}>
      <div className='Drawer-Board'>
        <div className='Drawer-Board-Header'>{}</div>
        <div className='Drawer-Board-Body'>
          {children}
        </div>
      </div>
      <div className='Drawer-Block' onClick={() => setDrawer({ show: !show })}>{}</div>
    </div>
  )
}

export default Drawer
