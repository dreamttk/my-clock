import React, { useState }from 'react'
import "./App.css";


function App() {
  const [dtime, setDtime] = useState("");
  const [mtime, setMtime] = useState("");
  const [ytime, setYtime] = useState("");
  const [htime, setHtime] = useState("");
  const [mintime, setMintime] = useState("");
  const [sectime, setSectime] = useState("");

  const UpdateTime = () => {
    setDtime(new Date().getDate());
    setMtime(new Date().getMonth());
    setYtime(new Date().getUTCFullYear());
    setHtime(new Date().getHours());
    setMintime(new Date().getMinutes());
    setSectime(new Date().getSeconds());
  };
  var monuthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  setInterval(UpdateTime);
  return (
  <>
  <div className='crop' >
  <div className='container'>
   <h1 className="day" id="day" >{dtime}{monuthName[mtime]}{ytime}</h1>
   
   <div className='box' > 
   <div className='clock'>
    <div className='front-clock' >
      <div id='hour'>{htime}</div>
      <p>hour</p>
    </div>
   </div>

   <div className='clock'>
    <div className='front-clock' >
      <div id='minute'>{mintime}</div>
      <p>minutes</p>
    </div>
   </div>

   <div className='clock'>
    <div className='front-clock' >
      <div id='second'>{sectime}</div>
      <p>seconds</p>
    </div>
   </div>
   </div>

  </div>
  </div>
  </>
  )
}

export default App

