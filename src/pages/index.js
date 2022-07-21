import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdDelete } from 'react-icons/md'
import Layout from '../components/Layout'
import { useTask } from '../context/taskContext';

const Home = () => {

  const { tasks, deleteTask } = useTask();
  const { push } = useRouter();

  return (
    <Layout>
        <div className='flex justify-center' >
            {
              tasks.length === 0 ? (
                  <h2 className='text-center pt-5'>
                      Aun no hay tareas 
                      <Link href='/new'>
                          <a className='font-bold ml-2 text-green-500'>
                               Crea una aqui
                          </a>
                      </Link>
                  </h2>
              ) : (
                  <div>
                      { 
                        tasks.map(({id, title,description}, i) => (
                          <div 
                              className='bg-gray-700 hover:bg-gray-600 rounded px-20 py-5 m-2 flex justify-start items-center' 
                              key={id}
                              >
                                
                                <div className='w-full'>
                                    <div className='flex justify-between'>
                                        <h1 className='font-bold mr-20'>{title}</h1>
                                        <button 
                                          className='bg-red-700 py-1 px-2 rounded hover:bg-red-600 inline-flex items-center'
                                          onClick={(e)=>{
                                            e.stopPropagation();
                                            deleteTask(id);
                                            console.log(id)
                                          }}>
                                            <MdDelete className='mr-2'/>
                                              Eliminar
                                        </button>
                                    </div>
                                    <p>{description}</p>
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
