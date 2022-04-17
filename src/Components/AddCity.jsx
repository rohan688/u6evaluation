import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addnewcity } from '../Redux/AddCity/action'

export const AddCity = () => {

const [city, setCity] = useState("")
const [population, setPopulation] = useState("")
const [country, setCountry] = useState("")    
const dispatch = useDispatch();
const [data,setdata]=useState([]);

    const handleSubmit = () => {
        const payload = {
            city,
            population,
            country
        }
        dispatch(Addnewcity(payload))   
        setCity('')
        setPopulation('')
        setCountry('')
    }
  useEffect(()=>{
   getdata()
  },[])
    
  const getdata = ()=>{
    axios.get("http://localhost:8080/country").then((res)=>{
    setdata(res.data);
    console.log(res.data)
    })
  }

        

  return (
    <div>
        <h1>add city</h1>
        <input type="text"
        placeholder='city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <br />
        <input type="text"
        placeholder='population'
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
        />
        <br /><br />
      
       <select  onChange={(e)=>setCountry(e.target.value)}>
       {data.map((e)=><option key={e.id}>{e.country}</option> )}
       </select>
      
      
        <br /><br />
        <button onClick={handleSubmit}>add city</button>
    </div>
  )
}

