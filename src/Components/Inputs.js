import React from 'react'
import { Button, Input } from '@mui/material';
import './Inputs.css';
const Inputs = ({inputprop,setInputprop,findWeather}) => {
  const handleChange=(e)=>{
    setInputprop(e.target.value);
  }
  const handleClick = (e)=>{
    e.preventDefault();
    findWeather();
    setInputprop("");
  }
  return (
    <div className='inputbox'>
      
   <div className='input_field'>
   <h1>Weather app</h1>
      <form>
      
        <Input placeholder='Enter a city name' onChange={handleChange} value={inputprop}/>
        <br/>
        <Button variant="contained" color='inherit' type="submit" onClick={handleClick} >Search</Button>
        </form>
    </div>
    </div>
  )
}

export default Inputs