import Home from "./pages/Home"
import { useState, useEffect } from "react";
import Loader from "./components/LoaderPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    // Simulate loading time (you can replace this with actual data fetching)
    // const timeout = () =>{
      setTimeout(() => {
        setLoading(false);
      }, 8000);
    // } 

    // Clean up the timeout when the component unmounts
    // timeout()
  }, []);
  return loading ?(
  <Loader />
) : (
    <>
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/projects/:id" element={<ProjectsPage/>} />
      </Routes>
    </BrowserRouter>
    </>
    </>
  )
}

export default App
