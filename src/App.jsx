import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
      <div className="h-screen text-white Parent bg-slate-900">
        <div className="flex space-x-4 container min-h-screen bg-red-500">
          <div className="w-1/5 bg-slate-300 space-y-2 border-2 border-black px-3 py-3">
            <div className="bg-yellow-100 border-1 rounded-md border-black px-1 py-4">SB Option 1</div>
            <div className="bg-yellow-200 border-1 rounded-md border-black px-1 py-4">SB Option 2</div>
            <div className="bg-yellow-300 border-1 rounded-md border-black px-1 py-4">SB Option 3</div>
            <div className="bg-yellow-400 border-1 rounded-md border-black px-1 py-4">SB Option 4</div>
            <div className="bg-yellow-500 border-1 rounded-md border-black px-1 py-4">SB Option 5</div>
            <div className="bg-yellow-600 border-1 rounded-md border-black px-1 py-4">SB Option 6</div>
            <div className="bg-yellow-700 border-1 rounded-md border-black px-1 py-4">SB Option 7</div>
          </div>
        </div>
        
        <div className="grid grid-flow-col space-x-2 justify-stretch w-4/5 bg-slate-300 border-2 border-black h-16 px-1 py-1">
          <div className="bg-orange-100 border-1 rounded-md border-black text-center" >TN Option 1</div>
          <div className="bg-orange-200 border-1 rounded-md border-black text-center" >TN Option 2</div>
          <div className="bg-orange-300 border-1 rounded-md border-black text-center" >TN Option 3</div>
          <div className="bg-orange-400 border-1 rounded-md border-black text-center" >TN Option 4</div>
          <div className="bg-orange-500 border-1 rounded-md border-black text-center" >TN Option 5</div>
          <div className="bg-orange-600 border-1 rounded-md border-black text-center" >TN Option 6</div>
          <div className="bg-orange-700 border-1 rounded-md border-black text-center" >TN Option 7</div>
        </div>
      </div>
    </>
  )
}

export default App
