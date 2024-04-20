import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage.jsx';
import LoginErrorPage from './Components/LoginErrorPage.jsx';

function App() {
  return (
    <div className="App">
      <LoginPage />
      {/* <LoginErrorPage /> */}
    </div>
  );
}

export default App;
