import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";




function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<MainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App
