import React, { useState } from 'react'
import Lists from './Lists'
import Content from './Content'
import data, { generateId } from './data'

const Todos = () => {
    const [clickId, setClickId] = useState('_6zytos624');
    const [myTodos, setMyTodos] = useState(data);

    const content = myTodos.filter(i => i.id === clickId)[0];
    const index = myTodos.indexOf(content);

    const handleClick = (e) => {
        if(e.target.className === 'tag'){
            const id = e.target.parentElement.getAttribute('data-id');
            const events = document.querySelectorAll('.App .todos .names .event');

            Array.from(events).map(i => {
                const sum = i.querySelector('.sum');
                sum.classList.remove('active');
                const spanId = sum.getAttribute('data-id');
                return spanId === id ? sum.classList.add('active') : null
            })
            
            setClickId(id);
        }
    }

    const handleDelete = (id) => {
        const todos = content.todos.filter(i => i.id !== id);
        const newTodos = { ...content, todos }
        const updated = myTodos.map((t, i) => {
            return i === index ? newTodos : t;
        })
        setMyTodos(updated);
    }

    const addTodo = (info) => {
        const input = { todo: info, id: generateId() } 
        const todos = [ ...content.todos, input ];
        const newTodos = { ...content, todos }
        const updated = myTodos.map((t, i) => {
            return i === index ? newTodos : t;
        })
        
        setMyTodos(updated);
        localStorage.setItem('lastEntry', JSON.stringify(info));
    }

    const handleRepeat = () => {
       const stored = localStorage.getItem('lastEntry');
       const parsed = JSON.parse(stored);
       addTodo(parsed);
    }

    return (  
        <div className='todos'>
            <Lists data={myTodos} handleClick={handleClick} />
            <Content content={content} handleDelete={handleDelete} addTodo={addTodo} handleRepeat={handleRepeat} />
        </div>
    );
}

export default Todos;

