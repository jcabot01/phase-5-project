import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GlobalEditTable from './components/GlobalEditTable';


function App() {
  // const [user, setUser] = useState(null)
  
  // useEffect(() => {
  //   fetch("/me").then((r) => {  //check if session-hash matches user_id
  //   if (r.ok) {
  //     r.json().then((user) => setUser(user));
  //   }
  //   });
  // }, []);
  
  // if (!user) return <LoginPage onLogin={setUser} />
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/students' element={<GlobalEditTable/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
