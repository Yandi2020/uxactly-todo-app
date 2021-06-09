import React from 'react'
import { icons } from '../components/images' 

const Lists = ({ data, handleClick }) => {
    
    return (
        <div className='lists'>
            <img src={icons.user} className='user' alt='icon'/>

            <div className='names'>
                { data && data.map(i => {
                    return  <div key={i.id} className='event' data-id={i.id} >
                                <span onClick={handleClick} className='tag' >{ i.name }</span> 
                                <span className='sum' data-id={i.id} >{ i.todos.length }</span> 
                            </div>
                })}
            </div>

            <div className='btn'>+ Neue Liste</div>
        </div>
    );
}
 
export default Lists;