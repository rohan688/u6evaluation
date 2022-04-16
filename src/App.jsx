
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AddCity } from './Components/AddCity'
import { Home } from './Components/Home'
import { CreateCountry } from './Components/AddCountry'

function App() {
  

  return (
    <div className="App">
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/add-city" element={<AddCity/>} />
     <Route path="/add-country" element={<CreateCountry/>} />
   </Routes>
    </div>
  )
}

export default App
