import React, { useState } from 'react'
import styles from '../css/login.module.css'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hanleForm = (e) => {
    e.preventDefault();
    console.log(password)
    console.log("Correo Enviado");
    //setEmail('');
  }




  return (
    <div>

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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}/>
          <button type="submit" className={styles.button}>Send</button>
        </form>
      </div>


    </div>
  )
}
