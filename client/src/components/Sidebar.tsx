import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div className="px-4 text-white">
            <NavLink className="" to="/"> 
                Home
            </NavLink>
            
        </div>
    </div>
  )
}

export default Sidebar