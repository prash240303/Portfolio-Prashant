import { useState, useEffect } from 'react';
import './App.css';
import '../src/Styles/Navbar.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Loading from './pages/loading'; // Import your loading component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when loading is done
    }, 2000); // Simulate a 2-second loading time
  }, []);

  return (
    <BrowserRouter>
      {/* Use conditional rendering to display the loading component */}
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="work" element={<Work />} />
          </Route>
          <Route path="resume" element={<Resume />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
