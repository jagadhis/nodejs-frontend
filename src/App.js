import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Login} />
        
        
        <Route path="/register" component={Register} />
          
        <Route path="/dashboard" component={Dashboard} />
       
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;