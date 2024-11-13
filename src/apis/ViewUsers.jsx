import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function ViewUsers() {

    const [dato, setDato] = useState ([]);

   const  urlUsers = `http://localhost:9000/user/UserViews`;

useEffect(() => {
    axios.get(urlUsers, { withCredentials: true }) // see that, it is very important if you will contruction same thing
    .then(response => {
      setDato(response.data);
    })
    .catch(error => {
      console.error("error en la peticion", error);
    });
  
  
}, []);


  return (
    <div>
      <h1>Lista</h1>
      <ul>
        {dato.length > 0 ? (
          dato.map((item, index) => (
            <div key={index}>
              <li>{item.name}</li>
              <li>{item.email}</li>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  )
}
