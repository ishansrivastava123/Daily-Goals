import React, { useEffect, useState } from 'react';
import Task from './Task';

const Home = () => {

    const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

    const [tasks, setTasks] = useState(initialArray);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, {title, desc}]);
        setTitle("");
        setDesc("");
    }

    const deleteTask = (index) => {
        const filteredArr = tasks.filter((val, i) => {
            return (i !== index);
        })
        setTasks(filteredArr);
    }

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    

    return (
        <div className='container'>
            <h2>Daily Goals</h2>
            <form onSubmit={submitHandler}>
                <input 
                    type='text' 
                    placeholder='Title' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <textarea 
                    placeholder='Description' 
                    value={desc} 
                    onChange={(e) => setDesc(e.target.value)}>
                </textarea>
                <button type="submit">Add</button>
            </form>

            {tasks.map((item, index) => (
                <Task 
                    key={index} 
                    index={index} 
                    title={item.title} 
                    desc={item.desc} 
                    deleteTask={deleteTask} 
                />
            ))}
        </div>
    );
};

export default Home;