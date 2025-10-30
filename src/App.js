import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AttendanceDashboard from "./pages/AttendanceDashboard";
import AttendanceForm from "./pages/AttendanceForm";
import './App.css';

function App() {
  return(
     <Router>
      <div className="app-container">
        <div className="content-wrap">
          <nav>
            <Link to='/'>Form</Link> <Link to='/dashboard'>Dashboard</Link>
          </nav>
          <Routes>
            <Route path='/' element={<AttendanceForm />}/>
            <Route path='/dashboard' element={<AttendanceDashboard/>}/>        
          </Routes>
        </div>
        <footer className="footer">
          <p>Created by ~ Itumeleng Priscilla Chabana</p>
        </footer>
      </div>
    </Router>
    
  );
  
}

export default App;