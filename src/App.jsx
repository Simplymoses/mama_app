import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

const App = () => {
  return ( 
    <>
      <div className="flex space-x-2 min-h-screen text-white Parent bg-slate-900">
        <div className="container w-2/12 bg-red-500 text text-center rounded-r-lg">Sidebar</div>
        <div className="container w-10/12 bg-orange-500 h-16 max-w-full text-center rounded-l-lg">Topnav</div>
      </div>
    </>
  )
}

export default App
