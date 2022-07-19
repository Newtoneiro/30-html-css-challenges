import React from 'react'
import './Eventlist.css'

import users from '../svg/users.svg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

const meetings = ['Product Review', 'Design Meeting', 'Team Meeting', 'Release Event', 'Gaining Feedback']

const EventList = () => {

  return (
    <div className='EventList_main'>
        <div className='EventList_top'>
            <img src={users} alt=''/>
            <div className='EventList_top_counter'>6</div>
        </div>
        <h1 className='EventList_title'>Schedule</h1>
        <div className='EventList_list'>
            {meetings.map((meeting) => {
                let start = Math.floor(Math.random() * 13)
                let images_nr = Math.floor(Math.random() * 4) + 1
                let choosen_images = []
                for(let i = 0; i < images_nr; i++){
                    choosen_images[i] = images[Math.floor(Math.random() * images.length)]
                }
                let ampm = Math.random() < 0.5? 'am' : 'pm'
                
                return <div className={`event e-${Math.floor(Math.random() * 4)}`}>
                        <div className='EventList_more'>
                            <div className='circle'/>
                            <div className='circle'/>
                            <div className='circle'/>
                        </div>
                        <p>{`${start < 10 ? '0':''}${start}:00 - ${start + 1}:00 ${ampm}`}</p>
                        <h1>{meeting}</h1>
                        <div className='Event_images'>
                        {choosen_images.map((image) => {
                            return <img key={`${meeting}-${image}`} src={image} alt = '' className='Event_image'></img>
                        })}
                        </div>
                    </div>
            })}
        </div>
    </div>
  )
}

export default EventList