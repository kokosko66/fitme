import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginPage/Login";
import MainPage from "./MainPage/MainPage";
import AccountPage from "./AccountPage/AccountPage";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<MainPage/>}/>
        <Route path="/account" element={<AccountPage/>} />
      </Routes>
    </Router>

  );
}

export default App
