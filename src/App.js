import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/Authentication/LoginPage.jsx';
import EmailErrorPage from './Components/Authentication/EmailErrorPage.jsx';
import PasswordErrorPage from './Components/Authentication/PasswordErrorPage.jsx';

function App() {
  return (
    <div className="App">
      <LoginPage />
      {/* <EmailErrorPage /> */}
      {/* <PasswordErrorPage /> */}
    </div>
  );
}

export default App;
