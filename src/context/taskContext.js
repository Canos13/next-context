import { createContext, useContext, useState } from 'react';
import {v4 as uuid} from 'uuid';

export const TaskContext = createContext();

export const useTask = () =>{
    return useContext( TaskContext );  
}

export const TasksProvider = ({children}) => {

    const [tasks, setTasks] = useState([
        {id:'1', title: 'firts task', description: 'some des'}
    ])

    const createTask = (title, description) =>{
        setTasks([...tasks, {title, description, id: uuid()}]);
    }

    const updateTask = (id, ntask) => {
        setTasks([
            ...tasks.map( task => {
                task.id === id ? {...task, ...ntask} : task
            })
        ])
    }

    const deleteTask = (id) =>{
        setTasks([...tasks.filter( task => task.id !== id)])
    }

    return (
        <TaskContext.Provider value={{tasks, createTask, updateTask, deleteTask}} >
            {children}
        </TaskContext.Provider>
    )
}