import Layout from '../components/Layout';
import {useEffect, useState} from 'react'
import {useTask} from '../context/taskContext'
import {useRouter} from 'next/router'

const TaskFormPage = () => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const { createTask, updateTask, tasks } = useTask();
    const { push, query } = useRouter()

    const handleInputChange = e => {
        const {name, value} = e.target;
        setTask({
            ...task,
            [name]: value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if( !query.id ){
            createTask(task.title, task.description);
            push('/');
        } else {
            updateTask(query.id, task);
        }
    }

    useEffect(() => {
      if(query.id){
            const taskFound = tasks.find( tarea => tarea.id === query.id);
            console.log(taskFound);
            setTask({title: taskFound.title, description: taskFound.description});
      }
    }, [query.id, tasks])

    return (
        <Layout>
            <div className='flex justify-center mt-10 items-center h-full'>
                <form onSubmit={handleSubmit} className="bg-gray-700 rounded p-8 h-2/4">
                    <h1 className='text-center text-2xl font-bold mb-5'>{
                        query.id ? "Actualizar Tarea" : "Nueva Tarea"
                    }</h1>
                    <input 
                        name='title'
                        type="text" 
                        className='bg-gray-800 mb-3 focus:text-gray-100 py-3 px-4 rounded w-full focus:outline-none'
                        placeholder="Escribe un titulo"
                        onChange={handleInputChange}
                        value={task.title} />
                    <br />
                    <textarea 
                        rows="2"
                        name='description'
                        className='bg-gray-800 mb-3 focus:text-gray-100 py-3 px-4 rounded w-full focus:outline-none'
                        placeholher="Escribe una descripción"
                        onChange={handleInputChange}
                        value={task.description}></textarea>
                    <button 
                        className='bg-green-500 rounded px-4 py-2 disabled:opacity-30 font-bold hover:bg-green-400' 
                        disabled={!task.title}>{
                            query.id ? "Actualizar" : "Guardar"
                        }
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default TaskFormPage