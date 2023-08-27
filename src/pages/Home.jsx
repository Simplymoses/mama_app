import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const HomePage = () => {
  return ( 
    <>
      <div className="flex space-x-4 min-h-screen">
        <Sidebar/>  
        <Topbar/>
      </div>
    </>
  )
}

export default HomePage
