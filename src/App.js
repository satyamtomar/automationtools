import React, { useState } from 'react';
import './App.css'; // Import any necessary CSS file for styling

function App() {
  // State variables to track toggle states and slider value
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [sliderValue, setSliderValue] = useState(50); // Initial value for the slider

  // Function to handle toggle switch 1
  const handleToggle1Change = () => {
    setToggle1(!toggle1);
  };

  // Function to handle toggle switch 2
  const handleToggle2Change = () => {
    setToggle2(!toggle2);
  };

  // Function to handle slider value change
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className='container'>
      
      <div className="blackboard">
        <div className="controls">
          <div>
               <button className='toggle'> </button>
        </div>
        <div>
               <button className='toggle'></button>
        </div>
      </div>

      <div className="sliderdiv">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          style={{ opacity: sliderValue / 200 + 0.5 }}
          className='slider'
        />
      </div>
    
    </div>
    </div>
    
  );
}

export default App;
