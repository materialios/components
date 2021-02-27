# @materialios/components
@materialios's components

## Features
* MainScreen
* Drawer
* AppBar

## Installation
```s
npm i @materialios/components
```

## Example
```c
import { MaterialProvider } from '@materialios/core'
import { MenuIcon, MoreIcon } from '@materialios/core'
import { AppBar } from '@materialios/components'

const App = () => {
  return (
    <div className='App'>
      <MaterialProvider>
        <AppBar>
          <AppBar.AppBarLeftIcon icon={MenuIcon}>
          <AppBar.AppBarTitle title='Title'>
          <AppBar.AppBarRightIcon icon={MoreIcon}>
        </AppBar>
      </MaterialProvider>
    </div>
  )
}

export default App
```

## Contributing
It's really still early days. So, help us to grow faster. Email me on [muhammadnurrendra@gmail.com](mailto:muhammadnurrendra@gmail.com)

## Creator
[@mnrendra](https://github.com/mnrendra)
