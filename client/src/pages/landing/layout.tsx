import { useEffect, useState } from "react";

interface Project {
  name: string;
  // Add other properties of the project if needed
}

interface BackendData {
  projects?: Project[];
  // Add other properties of the backendData if needed
}

function LandingLayout() {

  const [backendData, setBackendData] =  useState<BackendData>({ projects: [] });

  useEffect(() => {
    fetch('/api')
      .then((response) => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json()})
      .then((data) => {
        console.log(data);
        setBackendData(data)
      });
  }, [])

  return (
    <div className="h-full relative">
      <div>
        {(typeof backendData.projects === 'undefined') ? (
          <p>Loading...</p>
        ):(
          backendData.projects.map((project, i) => (
            <p key={i}>{project.name}</p>
          ))
        )}
      </div>
    </div>
  )
}

export default LandingLayout