import { useContext } from 'react'

import { DrawerContext } from '@materialios/contexts'

import './Drawer.css'

const Drawer = ({
  children,
  brand
}) => {
  const { drawer, setDrawer } = useContext(DrawerContext)

  return (
    <div className={`Drawer${drawer.show ? ' show' : ''}`}>
      <div className='Drawer-Board'>
        <div className='Drawer-Board-Header'>
          <div className='Drawer-Board-Header-Content'>
            {brand}
          </div>
        </div>
        <div className='Drawer-Board-Body'>
          {children}
        </div>
      </div>
      <div className='Drawer-Block' onClick={() => setDrawer({ show: !drawer.show })}>{}</div>
    </div>
  )
}

export default Drawer
