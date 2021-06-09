import React, { useState } from 'react'
import { icons } from './images'

const Content = ({ content, handleDelete, addTodo, handleRepeat }) => {
    const [input, setInput] = useState('');
    const { name, todos } = content;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput('');
    }

    return ( 
        <div className='content' >
            <h5>{ name }</h5>

            <div className='todo-list' >
                { todos && todos.map(i => {
                    return  <div key={i.id} className='todo' >
                                <img src={icons.listIcon} alt='icon' />

                                <div className='line'>
                                    <p>{ i.todo }</p>

                                    <div>
                                        <img src={icons.calendar} className='calendar' alt='calendar' />
                                        <img src={icons.delete} className='delete' alt='delete' onClick={() => handleDelete(i.id)} />
                                    </div>
                                </div>
                            </div>
                }) }

                { todos.length === 0 && <p className='hint'>You have no todos left ...</p> }
            </div>

            <form>
                <img src={icons.listIcon} className='form-icon' alt='icon' />

                <div className='input'>
                    <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />

                    <div>
                        <img src={icons.repeat} className='repeat' alt='repeat' onClick={handleRepeat} />
                        <img src={icons.calendar} className='calendar' alt='calendar' onClick={handleSubmit} />
                    </div>
                </div>
            </form>
        </div>
    )
}
 
export default Content;