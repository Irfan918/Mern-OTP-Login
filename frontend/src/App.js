import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
import Profile from './components/Profile';

const App = () => {

  const [data, setData] = useState(null);

  const checkUser = async (phoneNumber) => {
    try {
      const ph1 = phoneNumber.substring(2);
      const mobileNo = new FormData();
      mobileNo.append('phoneNumber', ph1);

      const response = await fetch('http://localhost:5000/api/v1/upload/login', {
        method: 'POST',
        body: mobileNo,
      });

      if (!response.ok) {
        throw new Error('User not registered. Please sign up.');
      }

      const userData = await response.json();
      // Set the data here
      setData(userData);       
      return userData;
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route
            path="/login"
            element={<Login checkUser={checkUser} />}
          />
          <Route path="/home" element={<Home  />} />
          <Route path="/profile" element={<Profile data={data} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
