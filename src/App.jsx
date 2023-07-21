import Home from "./compo/page/Home";
import MyProvider from "./api_data/MyProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./compo/page/SignIn";
import Hero from "./compo/contentpage/Hero";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(user);
    })
    return unsub;
  }, []);
  return (
    <MyProvider>
      <BrowserRouter>

      {!user ?
      <Home/>
    :
        <Routes>
            <Route exact path="/" element={<Hero />} />        
            <Route path="/SignIn" element={<SignIn />} />
        </Routes>
    }
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
