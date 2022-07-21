import Link from 'next/link';
import {useRouter} from 'next/router'
import {AiFillPlusCircle} from 'react-icons/ai'
import {useTask} from '../context/taskContext'

const Layout = ({children}) => {
  
  const Router = useRouter();
  const {tasks} = useTask();

  return (
    <div className="h-screen bg-gray-900 text-white">
        <header className="flex justify-between items-center bg-gray-800 px-20 py-5">
            <Link href="/">
                <a>
                    <h1 className="font-black text-lg" >Tasks App</h1>
                </a>
            </Link>

            <span className="text-center grow text-gray-300 font-bold">
                { tasks.length } Tareas
            </span>

            <div className="">
                <button className="bg-green-500 hover:bg-green-400 font-bold rounded px-3 py-2 inline-flex items-center"
                    onClick={()=>{ Router.push('/new') }}
                >
                    <AiFillPlusCircle className='mr-2' />
                    Add Task
                </button>
            </div>
        </header>

        <main className="px-20 py-5">
            {children}
        </main>
    </div>
  )
}

export default Layout