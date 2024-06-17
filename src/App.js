import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth';
import HomePage from './components/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
