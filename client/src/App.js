import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import StudentLoginPage from './pages/StudentLoginPage';
import TeacherLoginPage from './pages/TeacherLoginPage';
import ErrorPage from './pages/ErrorPage';
import StudentOrTeacherPage from './pages/StudentOrTeacherPage';
import RulesOverview from './pages/RulesOverview';
import NavBar from './components/NavBar';
import GlobalStudentEditPage from './pages/GlobalStudentEditPage';
import StudentProfilePage from './pages/StudentProfilePage';
// import studentsSlice from './features/studentsSlice';





function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch("/me").then((r) => {  //check if session-hash matches user_id
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
    });
  }, []);
  
  // if (!user) return <StudentOrTeacherPage onLogin={setUser} />
  if (!user) return <StudentLoginPage onLogin={setUser} /> //changed for testing

  function onUpdateUser(updatedUserObject) {
    setUser(updatedUserObject)
  }
  
  console.log(user)
  if (user.admin === false) {
    return (<StudentProfilePage user={user} setUser={setUser} onUpdateUser={onUpdateUser}/> )
  }
  
  
  return (
    <div>
      <Router>
        <NavBar setUser={setUser}/>
        <Routes>
          {/* <Route path="/" element={<StudentOrTeacherPage/>} /> */}
          {/* <Route path="/rules-overview" element={<RulesOverview/>}/> */}
          <Route path="/" element={<RulesOverview/>}/>
          {/* <Route path="/student-login" element={<StudentLoginPage/>} />
          <Route path="/teacher-login" element={<TeacherLoginPage/>} /> */}
          <Route path="/global-edit" element={<GlobalStudentEditPage />} />
          <Route path="/student-profile" element={<StudentProfilePage />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
