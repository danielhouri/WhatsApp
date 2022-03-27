import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './SignIn/SignIn.js'
import SignUn from './SignUp/SignUp.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />}></Route>
            <Route path='/signup' element={<SignUn />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
