import React, { useState } from 'react'
import styles from '../css/login.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState('');
  const [passwordUser, setPassword] = useState('');
  const navigate = useNavigate();

  const hanleForm = (e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append("email", email);
    data.append("password", passwordUser);

    const URLLogin = `http://localhost:9000/login`;
fetch(URLLogin, {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  credentials: 'include', // Include session data
  body: new URLSearchParams({
    email: email,
    password: passwordUser

  }).toString(),
}).then((response) => {
  if (response.ok) {
    navigate("/view-users"); // Redirect to ViewUsers component
  } else {
    console.error("Login failed");
  }
}).catch((error) => console.error("Error during login:", error));
    console.log("Correo Enviado");
  
    

    console.log(passwordUser)
    console.log("Correo Enviado");
    //setEmail('');
  }




  return (
    

      <div className={styles.container}>
        <form onSubmit={hanleForm} className={styles.form}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <label className={styles.label} htmlFor="password">Password</label>
          <input type="password" 
          value={passwordUser}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}/>
          <button type="submit" className={styles.button}>Send</button>

          <hr />
          

          <Link to='/form'>
          <button type="submit" className={styles.button}>Go to Form</button>
          </Link>
        </form>
      </div>


  )
}
