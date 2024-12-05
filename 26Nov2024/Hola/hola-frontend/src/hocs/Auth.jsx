import React from "react";
import { Navigate } from "react-router-dom";


function Auth(props) {
    
    let holaInfo = localStorage.getItem("hola-info");

    return holaInfo!==null ? props.children: <Navigate to="/login"/>;
}

export default Auth