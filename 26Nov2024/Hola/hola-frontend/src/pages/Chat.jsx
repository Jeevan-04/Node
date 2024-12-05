import styles from "./chat.module.css";
import React, { useEffect, useState } from "react";

function Chat() {

    let [results, setResults] = useState([])
    let [username, setUsername] = useState("")
    let data = JSON.parse(localStorage.getItem("hola-info"))


    useEffect(()=>{
        
        fetch("http://localhost:8000/users/search/" + username, {
            method: "GET",
            headers: { "Authorization": "Bearer " + data.token }
        })  
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[username])

    return (
        <section className={styles.main}>
            <div className={styles.searchbox}>
                <input 
                    type='text' 
                    onChange={(event)=>{setUsername(event.target.value)}} 
                    placeholder="Search By Name" 
                    className={styles.searchinput}
                ></input>
            </div>
            <div className={styles.searchresult}>

                {
                    results.map((ele)=>{
                        return (
                            <div  className={styles.result}>
                                <p>Jeevan <strong>jeevan04</strong></p>
                                <button>Message</button>
                            </div>
                        )
                    })
                }

            </div>
            <div className={styles.chatbox}>

            </div>
        </section>
    )
}

export default Chat