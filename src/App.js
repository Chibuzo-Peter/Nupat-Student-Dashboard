

import LoginPage from './Components/Authentication/LoginPage.jsx';
import EmailErrorPage from './Components/Authentication/EmailErrorPage.jsx';
import PasswordErrorPage from './Components/Authentication/PasswordErrorPage.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Resources from './Pages/Resources.jsx';
import Facilitator from './Pages/Facilitator.jsx';
import Courses from './Pages/Courses.jsx';
import Chats from './Pages/Chats.jsx';
import Calendar from './Pages/Calendar.jsx';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LoginPage />} />
       
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/facilitator' element={<Facilitator />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
