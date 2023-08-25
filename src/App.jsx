import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
      <div className="flex space-x-4 min-h-screen">
        <div className="w-1/5 bg-slate-300 space-y-2 border-2 border-black px-3 py-3">
          <div className="bg-yellow-100 border-1 border-black px-1 py-4">SB Option 1</div>
          <div className="bg-yellow-200 border-1 border-black px-1 py-4">SB Option 2</div>
          <div className="bg-yellow-300 border-1 border-black px-1 py-4">SB Option 3</div>
          <div className="bg-yellow-400 border-1 border-black px-1 py-4">SB Option 4</div>
          <div className="bg-yellow-500 border-1 border-black px-1 py-4">SB Option 5</div>
          <div className="bg-yellow-600 border-1 border-black px-1 py-4">SB Option 6</div>
          <div className="bg-yellow-700 border-1 border-black px-1 py-4">SB Option </div>
        </div>
        <div className="w-4/5 bg-orange-500 border 2 border-black text-center h-16">TN
          
        </div>
      </div>
        
    </>
  )
}

export default App
