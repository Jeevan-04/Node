import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.css";
import { useState } from "react";

const Login = () => {

  let [userCreds,setUserCreds] = useState({username:"",password:""})


  let navigate = useNavigate()

  const handleForm = (event) => {

    setUserCreds((prevValue)=>{
        return {...prevValue,[event.target.name]:event.target.value}
    })

    console.log(userCreds)
}

  async function login() {

    try
    {
        let response = await fetch("http://localhost:8000/auth/login",{
          method:"POST",
          body:JSON.stringify(userCreds),
          headers:{"Content-Type":"application/json"}
      })

      let data = await response.json()

      if(response.status===200 && data.token!==undefined)
      {
        localStorage.setItem("hola-info",JSON.stringify(data))
        navigate("/chat")
      }
      console.log(data)
    }
    catch(err)
    {
      console.log(err)
    }
  }


  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.heading}>LOGIN</h2>


        <div className={styles.field}>
          <label htmlFor="username" className={styles.label}>Username</label>
          <input type="text" id="username" name="username" onChange={handleForm} className={styles.input} />
        </div>
        
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" name="password" onChange={handleForm} className={styles.input} />
        </div>
        
        <button type="button" onClick={login} className={styles.button}>Log In</button>
        <br/>
        <p>Dont have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
