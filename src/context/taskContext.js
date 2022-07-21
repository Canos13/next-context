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

    const updateTask = (ids, ntask) => {
        setTasks([
            ...tasks.map((task) => {
                task.id === ids ? {...task, ...ntask} : task
            }),
        ])
    }

    return (
        <TaskContext.Provider value={{tasks, createTask, updateTask}} >
            {children}
        </TaskContext.Provider>
    )
}