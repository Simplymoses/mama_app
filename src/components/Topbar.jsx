
const Topbar = () => {
    return ( 
        <div className="grid grid-flow-col space-x-2 justify-stretch w-4/5 bg-slate-300 border-2 border-black h-16 px-1 py-1">
            {/* <div className="bg-orange-100 border-1 rounded-md border-black text-center" >TN Option 1</div>
            <div className="bg-orange-200 border-1 rounded-md border-black text-center" >TN Option 2</div>
            <div className="bg-orange-300 border-1 rounded-md border-black text-center" >TN Option 3</div>
            <div className="bg-orange-400 border-1 rounded-md border-black text-center" >TN Option 4</div>
            <div className="bg-orange-500 border-1 rounded-md border-black text-center" >TN Option 5</div>
            <div className="bg-orange-600 border-1 rounded-md border-black text-center" >TN Option 6</div>
            <div className="bg-orange-700 border-1 rounded-md border-black text-center" >TN Option 7</div> */}
            {[...Array(7).keys()].map(no => (
                <div key={no} className={`bg-orange-${no+1}00 border-1 rounded-md border-black text-center`} >TN Option {no+1}</div>
            ))}
        </div>
    );
}
 
export default Topbar;