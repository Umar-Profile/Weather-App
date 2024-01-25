import React from 'react';
import { Button } from '@mui/material';
import './Result.css';

const Result = ({temp,desc,icon,setTemp}) => {
  return (
    <div className='result'>
        <h1>Temp: {temp}°C</h1>
        <p>{desc}</p>
        <img src={icon} alt="logo" />
        <Button variant="contained" color="inherit" onClick={()=>{setTemp("")}}>
            Back
        </Button>
    </div>
  )
}

export default Result