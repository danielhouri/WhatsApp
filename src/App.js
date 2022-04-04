import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUn from './SignUp/SignUp';
import Chat from "./Chat/Chat";
import { useState } from 'react';

function App() {
  const [loginDetails, setLoginDetails] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn setLoginDetails={setLoginDetails}/>}></Route>
            <Route path='/signup' element={<SignUn setLoginDetails={setLoginDetails}/>}></Route>
            <Route path='/chat' element={<Chat loginDetails={loginDetails}/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
