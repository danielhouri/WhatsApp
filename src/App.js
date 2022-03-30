import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUn from './SignUp/SignUp';
import Chat from './Chat/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />}></Route>
            <Route path='/signup' element={<SignUn />}></Route>
            <Route path='/chat' element={<Chat />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
