import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Inputs from './Components/Inputs';
import Result from './Components/Result';

function App() {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const findWeather= async()=>{
    const apikey = "d7c650bb762ac98b377400e3524f6c53";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apikey+"&units="+unit;
    const response = await axios.get(url);
    //console.log(response);
    const temp = await response.data.main.temp;
    const desc = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageUrl =  "https://openweathermap.org/img/wn/"+icon+"@2x.png";
    //console.log(temp,description,imageUrl);
    setTemp(temp);
    setDesc(desc);
    setIcon(imageUrl);

  }
  return (
    <div className="">
      {temp === "" ? (
      <>
      <Inputs inputprop={input} setInputprop={setInput} findWeather={findWeather} /> </>):
      (<Result temp={temp} desc={desc} icon={icon} setTemp={setTemp}/> )};
    </div>
  );
}

export default App;
