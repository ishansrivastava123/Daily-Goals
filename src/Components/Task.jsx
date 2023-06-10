import React from 'react'

const Task = ({index, title, desc, deleteTask}) => {
  return (
    <div className='task'>
        <span>{index}</span>
        <div>
            <p>{title}</p>
            <p>{desc}</p>
        </div>
        <button onClick={() => deleteTask(index)}><i className="fa fa-light fa-xmark"></i></button>
    </div>
  )
}

export default Task