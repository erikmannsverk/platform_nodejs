import Sidebar from "../../components/Sidebar"


function DashboardLayout() {
  return (
    <div className="h-full relative">
        <Sidebar/>
        
        <main className="md:pl-72">
          Dashboard
        </main>
    </div>
  )
}

export default DashboardLayout