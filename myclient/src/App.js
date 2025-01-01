import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './pages/home';
import Loginpage from './pages/login';
import Signinpage from './pages/signin';
import Datepage from './pages/date';
import { AddnewTask } from './pages/addnew';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/signin' element={<Signinpage/>}/>
        <Route path='/:date' element={<Datepage />}/>
        <Route path='/newTask' element={<AddnewTask/>}/>
      </Routes>
    </div>
  );
}

export default App;
