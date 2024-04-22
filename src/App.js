import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage.jsx';
import EmailErrorPage from './Components/EmailErrorPage.jsx';
import PasswordErrorPage from './Components/PasswordErrorPage.jsx';

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
