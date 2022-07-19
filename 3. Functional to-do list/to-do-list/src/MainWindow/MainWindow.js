import React from 'react'
import './MainWindow.css'

import Sidebar from '../Sidebar/Sidebar'
import LeftWindow from '../LeftWindow/LeftWindow'
import EventList from '../EventList/EventList'

const MainWindow = () => {
  return (
    <div className='MainWindow_main'>
        <Sidebar/>
        <LeftWindow/>
        <EventList/>
    </div>
  )
}

export default MainWindow