import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./auth.module.css";

const Register = () => {


    let [user,setUser] = useState({
        name:"",
        username:"",
        password:"",
        gender:""
    })


    let [toastMessage,setToastMessage] = useState({error:false, message:""})

    function resetToast()
    {
      setTimeout(()=>{
        setToastMessage({error:false, message:""})
      },1500)
    }

    const handleForm = (event) => {
        // console.log(event.target.value)
        // console.log(event.target.name)

        setUser((prevValue)=>{
            return {...prevValue,[event.target.name]:event.target.value}
        })

        console.log(user)
    }

    const register = ()=>{

        // event.preventDefault()

        fetch("http://localhost:8000/auth/register",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{"Content-Type":"application/json"}
        })
        .then((response)=>{
            if(!response.ok) //response!==201
            {
              setToastMessage({error:true,message:"Some Problem Please try again"})
              resetToast()
              // throw new Error("Some Problem")
            }
            else
            {
              return response.json()
            }
        })
        .then((data)=>{
            console.log(data)
            setToastMessage({error:false,message:data.message})

        })
        .catch((err)=>{console.log(err)})
    }


  return (
    <div className={styles.container}>

      {
        toastMessage.message!==""?(
          <div className={toastMessage.error===true ? styles.toastError : styles.toastSuccess}>{toastMessage.message}</div>
        ):null
      }

      <form className={styles.form}>
        <h2 className={styles.heading}>Register</h2>
        
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" name="name" onChange={handleForm} className={styles.input} />
        </div>
        
        <div className={styles.field}>
          <label htmlFor="username" className={styles.label}>Username</label>
          <input type="text" id="username" name="username" onChange={handleForm}  className={styles.input} />
        </div>
        
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" name="password" onChange={handleForm}  className={styles.input} />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Gender</label>
          <div className={styles.radioGroup} onChange={handleForm}>
            <label>
              <input type="radio" name="gender" value="Male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" /> Female
            </label>
          </div>
        </div>
        <button type="button" onClick={register} className={styles.button}>Register</button>
        <br/>
        <p>Already have an account? <Link to="/Login">Log In</Link></p>
      </form>
    </div>
  );
};

export default Register;
