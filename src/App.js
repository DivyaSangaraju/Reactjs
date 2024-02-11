


 import { BrowserRouter, Routes, Route} from 'react-router-dom';
 import Registerform from './Components/LoginForm/Registerform';
import Loginform from './Components/LoginForm/Loginform';

function App() {
  return (
    // <div><Loginform/></div>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Loginform/>} />
         <Route path="/Registerform" element={<Registerform/>} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
