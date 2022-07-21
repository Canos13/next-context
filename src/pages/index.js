import { useTask } from '../context/taskContext';
import Layout from '../components/Layout'
import Link from 'next/link'
import {MdDelete} from 'react-icons/md'
import {useRouter} from 'next/router'

const Home = () => {

  const { tasks } = useTask();
  const { push } = useRouter();

  return (
    <Layout>
        <div className='flex justify-center' >
            {
              tasks.length === 0 ? (
                  <h2 className='text-center pt-5'>
                      Aun no hay tareas 
                      <Link href='/new'>
                          <a className='font-bold text-green-500'>
                              Crea una aqui
                          </a>
                      </Link>
                  </h2>
              ) : (
                  <div>
                      { 
                        tasks.map((task, i) => (
                          <div 
                              className='bg-gray-700 hover:bg-gray-600 cursor-pointer rounded px-20 py-5 m-2 flex justify-start items-center' 
                              key={task.id}
                              onClick={
                                 () => push(`/edit/${task.id}`)
                              }>
                                <span className="text-5xl mr-5">{i+1}</span>
                                <div className='w-full'>
                                    <div className='flex justify-between'>
                                        <h1 className='font-bold mr-20'>{task.title}</h1>
                                        <button className='bg-red-700 py-1 px-2 rounded hover:bg-red-600 inline-flex items-center'>
                                            <MdDelete className='mr-2'/>
                                              Eliminar
                                        </button>
                                    </div>
                                    <p>{task.description}</p>
                                </div>
                          </div>
                        )) 
                      }
                  </div>
              )
            }
        </div>
    </Layout>
  )
}

export default Home
