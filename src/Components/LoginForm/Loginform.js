import React,{useState} from "react";
import './LoginForm.css'
import axios from "axios";



const Loginform = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Add your login logic here
     // onLogin({ username, password });



      axios.post('http://localhost:3000/login', { username, password })
      .then(response => console.log(response.data))
      .catch(error => console.error('Login error: ', error));

    };
  
    return (
      <div className="auth-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">enter Email:</label>
          <input
            type="email"
            
            id="login-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
  
          <label htmlFor="password">Password:</label>
          <input
            type="password"
           
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
  
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <button type="button" onClick={handleLogin}>
            Signup
          </button>
        </form>
      </div>
    );
  };
 
export default Loginform;