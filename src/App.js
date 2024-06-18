import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/login';
import HomePage from './components/home';
import PrivatRoute from './components/auth';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route element={<PrivatRoute/>}>
          <Route path="/" element={<HomePage/>}/>
        </Route>

        <Route path="login" element={<LoginPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
