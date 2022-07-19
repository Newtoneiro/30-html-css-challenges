import React from 'react'
import './Sidebar.css'

import inbox from '../svg/inbox.svg'
import star from '../svg/star.svg'
import calendar from '../svg/calender.svg'
import hash from '../svg/hash.svg'
import users from '../svg/users.svg'
import trash from '../svg/trash.svg'
import sun from '../svg/sun.svg'
import trending from '../svg/trending.svg'
import zap from '../svg/zap.svg'

const Sidebar = () => {
  return (
    <div className='Sidebar_main'>
        <div className='Sidebar_top'>
            <div className='Sidebar_circles'>
                <div className='Sidebar_circle1'/>
                <div className='Sidebar_circle2'/>
                <div className='Sidebar_circle3'/>
            </div>
            <div className='Sidebar_more'>
                <div className='Sidebar_more_circle'/>
                <div className='Sidebar_more_circle'/>
                <div className='Sidebar_more_circle'/>
            </div>
        </div>
        <div className='Sidebar_first'>
            <div className='Sidebar_item'>
                <img alt='' src={inbox}></img>
                <h1>inbox</h1>
            </div>
            <div className='Sidebar_item'>
                <img alt='' src={star}></img>
                <h1>today</h1>
            </div>
            <div className='Sidebar_item'>
                <img alt='' src={calendar}></img>
                <h1>upcoming</h1>
            </div>
            <div className='Sidebar_item'>
                <img alt='' src={hash}></img>
                <h1>important</h1>
            </div>
            <div className='Sidebar_item'>
                <img alt='' src={users}></img>
                <h1>meetings</h1>
            </div>
            <div className='Sidebar_item'>
                <img alt='' src={trash}></img>
                <h1>trash</h1>
            </div>
        </div>
        <div className='Sidebar_second'>
            <div className='Sidebar_item'>
                <img alt='' src={users}></img>
                <h1>family</h1>
            </div>
            <div className='Sidebar_item'>
                <img alt='' src={sun}></img>
                <h1>vacation</h1>
            </div>
            <div className='Sidebar_item'>
                <img alt='' src={trending}></img>
                <h1>festival</h1>
            </div>
            <div className='Sidebar_item'>
                <img alt='' src={zap}></img>
                <h1>concerts</h1>
            </div>
        </div> 
    </div>
  )
}

export default Sidebar