import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GlobalEditTable from './components/GlobalEditTable';
import StudentLoginPage from './pages/StudentLoginPage';
import TeacherLoginPage from './pages/TeacherLoginPage';
import ErrorPage from './pages/ErrorPage';
import StudentOrTeacherPage from './pages/StudentOrTeacherPage';




function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch("/me").then((r) => {  //check if session-hash matches user_id
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
    });
  }, []);
  
  // if (!user) return <StudentOrTeacherPAGE onLogin={setUser} />
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StudentOrTeacherPage/>} />
          <Route path="/student-login" element={<StudentLoginPage/>} />
          <Route path="/teacher-login" element={<TeacherLoginPage/>} />
          <Route path="/students" element={<GlobalEditTable/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
