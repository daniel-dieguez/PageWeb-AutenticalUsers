import React, { useState } from 'react'
import styles from '../css/form.module.css'

export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const hanleNewUser = (e) =>{
    e.preventDefault();
    console.log("datos enviados");
    console.log(name, email,password,role)


  }



  return (
    
      <div className={styles.container}>
      <form onSubmit={hanleNewUser} className={styles.form}>
        <label className={styles.label} htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />

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

        <label className={styles.label} htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label} htmlFor="role">Rol:</label>
        <select name="" id="" 
        className={styles.select}      
        value={role}
        onChange={(e) => setRole(e.target.value)}>
          <option value="1">ADMIN</option>
          <option value="2">USER</option>
        </select>
        

        <button type="submit" className={styles.button}>Create User</button>
      </form>
    </div>

  )
}
