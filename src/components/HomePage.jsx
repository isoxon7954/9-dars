import React from 'react'
import Drawer from './Drawer'
import Test from './Test'
import BottomNav from './BottomNav'
import Menu from './Menu'

const HomePage = () => {
  return (
    <div>
      <Menu>
      <Drawer />
      <BottomNav />
      </Menu>
      <Test />
    </div>
  )
}

export default HomePage