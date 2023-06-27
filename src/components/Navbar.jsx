import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [selectedRadio, setSelectedRadio] = useState('home');

  useEffect(() => {
    console.log(selectedRadio);

  }, [selectedRadio]);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
   <div className="toggle-container">
      <div className="radio-tile-group">
      <Link to="/">
          <div className={`input-container ${selectedRadio === 'home' ? 'active' : ''}`}>
            <input
              id="home"
              type="radio"
              name="radio"
              checked={selectedRadio === 'home'}
              onChange={handleRadioChange}
            />
            <div className="radio-tile">
              <img src="./Home.svg" alt="" />
            </div>
          </div>
        </Link>
        <Link to="/blogs">
          <div className={`input-container ${selectedRadio === 'blogs' ? 'active' : ''}`}>
            <input
              id="blogs"
              type="radio"
              name="radio"
              checked={selectedRadio === 'blogs'}
              onChange={handleRadioChange}
            />
            <div className="radio-tile">
              <img src="./Doc.svg" alt="" />
            </div>
          </div>
        </Link>
        <Link to="/projects">
          <div className={`input-container ${selectedRadio === 'projects' ? 'active' : ''}`}>
            <input
              id="projects"
              type="radio"
              name="radio"
              checked={selectedRadio === 'projects'}
              onChange={handleRadioChange}
            />
            <div className="radio-tile">
              <img src="./Code.svg" alt="" />
            </div>
          </div>
        </Link>


        <div className='divider flex w-[0.5px] h-[34px] justify-center items-center border border-[#444444]'> </div>

        <div className="input-container radio-tile  flex justify-center items-center">
          <a href="https://figma.com/@prash_24" target="_blank" className=' flex justify-center items-center'><img src="./github.svg" alt="" /></a>
        </div>

        <div className="input-container radio-tile flex justify-center items-center">
          <a href="https://figma.com/@prash_24" target="_blank" className='flex items-center justify-center'><img src="./Twitter.png" alt="" /></a>
        </div>

        <div className="input-container radio-tile flex justify-center items-center">
          <a href="https://figma.com/@prash_24" target="_blank" className='flex items-center justify-center'><img src="./Figma.svg" alt="" /></a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
