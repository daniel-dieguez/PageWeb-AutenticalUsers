import React, { useState } from 'react'
import styles from '../css/form.module.css'
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


export default function Form() {

  const [nameUser, setName] = useState('');
  const [emailUser, setEmail] = useState('');
  const [passwordUser, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleNewUser = (e) =>{
    e.preventDefault();
    sendData();
    console.log("datos enviados");
    
    console.log(nameUser, emailUser,passwordUser,role);


  }

  const pushButton = () =>{
console.log("precionaste regresar")
  }

  const sendData = async() =>{

    const data = {
      name: nameUser,
      email: emailUser,
      password: passwordUser ,
      roleId: Number(role)
    }

    const URLPost = 'http://localhost:9000/new/CreateUser';
  fetch(URLPost, {
    method: 'POST',
    credentials: "include", // Incluye las credenciales
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  .then((data) => {
    if (data.status === 201) {
        console.log("Usuario registrado con éxito");
    } else {
        console.log("Error: " + JSON.stringify(data.body));
    }
})
  .catch((error) => {
    console.error("Error al registrar usuario:", error);
    console.log("Hubo un error al registrar el usuario. Por favor, inténtelo nuevamente.");
  });


  }



  return (
    <div className={styles.container}>
      <form onSubmit={handleNewUser} className={styles.form}>
        <label className={styles.label} htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={nameUser}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label} htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={emailUser}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label} htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={passwordUser}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label} htmlFor="role">Role:</label>
        <select
          className={styles.select}
          value={role}
          onChange={(e) => setRole(Number(e.target.value))}
        >
          <option value="1">ADMIN</option>
          <option value="2">USER</option>
        </select>

        <button type="submit" className={styles.button}>Create User</button>

        <Link to='/login'>
          <button type="button" className={styles.button}>Go to Login</button>
        </Link>
      </form>
    </div>

  )
}
