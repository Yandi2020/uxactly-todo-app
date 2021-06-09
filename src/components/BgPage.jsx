import React from 'react'
import { bgImages, icons } from './images'

const BgPage = () => {
    return (
        <>
            { bgImages.map(i => 
                <img src={i.img} className={i.className} key={i.className} alt='img'/>) } 

            <div className='drone'>
                <img src={icons.drone} alt='icon' />
            </div>

            <h1>ToDo</h1>
            <p className='footer'>Datenschutz | Impressum</p>
        </>
    )
}

export default BgPage;