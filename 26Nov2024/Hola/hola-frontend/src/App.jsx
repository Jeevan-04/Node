import { BrowserRouter, Routes , Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Auth from "./hocs/Auth";

function App() {
  return (
    <>

      <BrowserRouter>

        <Routes>
          
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/chat" element={<Auth children={<Chat/>}/>}></Route>

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
