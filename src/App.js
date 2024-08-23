
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Loginpage from './components/login/login';
import Registerpage from './components/register/register';
import Forgotpassword from './components/forgot-password/forgotpassword';
import Doctor from './components/doc-login/docLogin';

const App = () => {
    return (
      <Router >  
        <Navbar/>
          <Routes>           
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Loginpage/>}/>
              <Route path="/register" element={<Registerpage/>}/>
              <Route path="/forgot" element={<Forgotpassword/>}/>      
              <Route path="/doct" element={<Doctor/>}/>      

          </Routes>
        </Router>
    );
  };

  export default App;
