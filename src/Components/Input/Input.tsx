import { useState} from "react";
import './Input.css'

export default function Input (props: {setCity: React.Dispatch<React.SetStateAction<string>>;}) {
    const [cityname, setCityname] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCityname(e.target.value);
    //console.log(cityname);
  }

  function handleClick() {
    props.setCity(cityname);
    console.log("handle was clicked!");
  }

  return (
    <div>
      <input className="Input" type="text" placeholder="Search..." onChange={handleChange}></input>
      <button className="btn" onClick={handleClick}>
        🔍
      </button>
    </div>
  )}