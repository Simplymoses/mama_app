
const Sidebar = () => {
    return (
      <div className="w-1/5 bg-slate-300 space-y-2 border-2 border-black px-3 py-3">
        {/* <div className="bg-yellow-100 border-1 rounded-md border-black px-1 py-4">SB Option 1</div>
        <div className="bg-yellow-200 border-1 rounded-md border-black px-1 py-4">SB Option 2</div>
        <div className="bg-yellow-300 border-1 rounded-md border-black px-1 py-4">SB Option 3</div>
        <div className="bg-yellow-400 border-1 rounded-md border-black px-1 py-4">SB Option 4</div>
        <div className="bg-yellow-500 border-1 rounded-md border-black px-1 py-4">SB Option 5</div>
        <div className="bg-yellow-600 border-1 rounded-md border-black px-1 py-4">SB Option 6</div>
        <div className="bg-yellow-700 border-1 rounded-md border-black px-1 py-4">SB Option 7</div> */}
        {[...Array(7).keys()].map(no => (
          <div key={no} className={`bg-yellow-${no+1}00 border-1 rounded-md border-black px-1 py-4`}>SB Option {no+1}</div>
        ))}
      </div>
    );
}
 
export default Sidebar;