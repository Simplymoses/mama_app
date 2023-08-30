import { Container } from 'postcss'
import { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsChatSquareHeartFill } from "react-icons/bs";

const App = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="flex">
        <div 
          className={`bg-pink-300 h-screen p-5 pt-8 rounded-r-2xl ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <BsArrowLeftShort className={`bg-white text-green-300 text-3xl rounded-full 
          absolute -right-3 top-9 border 
          border-green-300 cursor-pointer ${
            !open && "rotate-180"
          }`} 
          onClick={() => setOpen(!open)} 
        />
        <div className="inline-flex">
          <BsChatSquareHeartFill 
            className={`bg-pink-300 text-4xl rounded 
            cursor-pointer block float-left mr-2 pt-1 duration-500 ${
              open && "rotate-[360deg]"
            }`} 
          />
          <h1 className={`text-white origin-left font-medium
          text-2xl duration-300 ${!open && "scale-0"}`}>
            MamaApp
          </h1>
        </div>

 
        </div>

        <div className="p-7">
          <h1 className="text-2xl font-semibold">Homescreen</h1>
        </div>
      </div>
    </>
  )
}

export default App
