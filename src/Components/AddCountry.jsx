import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const CreateCountry = () => {
    const [country, setCountry] = useState('')
 
    
   

  return (
    
    <div>
          <input type="text"
          placeholder='Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          
    </div>
  )
}
