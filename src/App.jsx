
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { AddCity } from './Components/AddCity'
import { Home } from './Components/Home'
import { AddCountry } from './Components/AddCountry'

function App() {
  const navigate= useNavigate();

  return (
    
    <div className="App">
      <button onClick={()=>navigate("/")}>HOME</button>
      <button onClick={()=>navigate("/add-city")}>ADD CITY</button>
        <button onClick={()=>navigate("/add-country")}>ADD COUNTRY</button>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/add-city" element={<AddCity/>} />
     <Route path="/add-country" element={<AddCountry/>} />
   </Routes>
    </div>
  )
}

export default App
