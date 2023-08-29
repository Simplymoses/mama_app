import { Container } from 'postcss'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

const App = () => {
  return ( 
    <>
      <div className="relative flex min-h-screen text-black Parent bg-slate-900">
          <div className="absolute flex flex-col w-2/12 w-fit h-fit bg-red-500 text text-center rounded-r-lg px-2 py-2 space-y-2">Sidebar
            <div className="box-content h-5 w-5 p-4 border-4">Icon</div>
            <button className="bg-yellow-100 border-1 border-black px-1 py-4 rounded">SB Option 1</button> 
            <button className="bg-yellow-200 border-1 border-black px-1 py-4 rounded">SB Option 2</button> 
            <button className="bg-yellow-300 border-1 border-black px-1 py-4 rounded">SB Option 3</button> 
            <button className="bg-yellow-400 border-1 border-black px-1 py-4 rounded">SB Option 4</button> 
            <button className="bg-yellow-500 border-1 border-black px-1 py-4 rounded">SB Option 5</button> 
            <button className="bg-yellow-600 border-1 border-black px-1 py-4 rounded">SB Option 6</button> 
            <button className="bg-yellow-700 border-1 border-black px-1 py-4 rounded">SB Option 7</button> 
          </div>
          <div className="absolute right-0 flex flex-row w-10/12 w-fit h-fit bg-orange-500 h-16 text-center rounded-l-lg px-2 py-2 space-x-2">Topnav
            <button className="bg-yellow-100 border-1 border-black px-1 py-4 rounded">SB Option 1</button> 
            <button className="bg-yellow-200 border-1 border-black px-1 py-4 rounded">SB Option 2</button> 
            <button className="bg-yellow-300 border-1 border-black px-1 py-4 rounded">SB Option 3</button> 
            <button className="bg-yellow-400 border-1 border-black px-1 py-4 rounded">SB Option 4</button> 
            <button className="bg-yellow-500 border-1 border-black px-1 py-4 rounded">SB Option 5</button> 
            <button className="bg-yellow-600 border-1 border-black px-1 py-4 rounded">SB Option 6</button> 
            <button className="bg-yellow-700 border-1 border-black px-1 py-4 rounded">SB Option 7</button> 
          </div>
      </div>
    </>
  )
}

export default App
