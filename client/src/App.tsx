import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/dashboard/layout";
import LandingLayout from "./pages/landing/layout";

function App() {

  return (
    <div className="bg-gray-100">
      <Router>
        <Suspense>
          <Routes>
            <Route path="/dashboard" element={<DashboardLayout/>}/>
            <Route path="/" element={<LandingLayout/>}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
