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
import MetaHead from './components/seo/MetaHead';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [appHasLoaded, setAppHasLoaded] = useState(false);

  useEffect(() => {
    // Check if the app has already loaded from localStorage
    const hasLoadedFromStorage = localStorage.getItem('appHasLoaded');
    
    if (hasLoadedFromStorage) {
      setAppHasLoaded(true);
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false); // Set isLoading to false when loading is done
        setAppHasLoaded(true); // Set appHasLoaded to true
        // Store the appHasLoaded state in localStorage
        localStorage.setItem('appHasLoaded', 'true');
      }, 2000); // Simulate a 2-second loading time
    }
  }, []);

  return (
    <BrowserRouter>
    <MetaHead/>
      {/* Use conditional rendering to display the loading component */}
      {isLoading && !appHasLoaded ? (
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
