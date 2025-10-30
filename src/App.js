import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AttendanceDashboard from "./pages/AttendanceDashboard";
import AttendanceForm from "./pages/AttendanceForm";

function App() {
  return(
    <Router>
        <nav>
            <Link to='/'>Form</Link> | <Link to='/dashboard'>Dashboard</Link>
        </nav>
        <Routes>
            <Route path='/' element={<AttendanceForm />}/>
            <Route path='/dashboard' element={<AttendanceDashboard/>}/>        
        </Routes> 
    </Router>
  );
}

export default App;