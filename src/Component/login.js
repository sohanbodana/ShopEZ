import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios';
import './login.css';
import Navbar from './navbar/Navbar';

const LogIn = () => {

  ////////// home flight data pass

  const location = useLocation();
  const selectedDate = location.state?.selectedDate;
  console.log(selectedDate);



  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [isChecked, setIsChecked] = useState(false); // New state for the checkbox
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const [selectedFlight, setSelectedFlight] = useState([]); // Updated state for selectedFlight


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert('Please agree to the Policy and Terms of Use.');
      return;
    }

    try {
      const response = await Axios.post('http://localhost:3001/login', {
        email: credentials.email,
        password: credentials.password,
      });

      console.log(response.data);

      if (response.data.success) {

        alert('Login successful!');

        // Check if flight data is present in location state
        if (location.state && location.state.selectedFlight) {
          // Redirect to Passenger component
          navigate('/booking', {
            state: {
              username: response.data.username,
              selectedFlight: location.state.selectedFlight,
              selectedDate: selectedDate,
            },
          });
          console.log(setSelectedFlight);
          console.log(selectedFlight);
        }
        else {
          // Redirect to userSuccess component
          navigate('/userSuccess', {
            state: {
              username: response.data.username,
            },
          });
        }

      }
      else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className='AAA'>
        <div className="container">
          <center>
          <div className='card text-black' style={{ borderRadius: '25px' }}>
            <div className='card-body'>
              <center>

                  <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-0 ">LogIn</p>

                  <form onSubmit={handleLogin}>
                    <div className="form-group ">
                      <label>Email:</label>
                      <input
                        type="email"
                        name="email"
                        placeholder='Your Email'
                        value={credentials.email}
                        onChange={handleChange}
                        className='form-control'
                        required
                      />
                    </div>
                    <div className="form-group ">
                      <label>Password:</label>
                      <input
                        type="password"
                        name="password"
                        placeholder='Your Password'
                        value={credentials.password}
                        onChange={handleChange}
                        className='form-control'
                        required
                      />
                    </div>

                    <div className='form-check '>
                      <input
                        type='checkbox'
                        id='flexCheckDefault'
                        className='form-check-input'
                        onChange={handleCheckboxChange} // Use handleCheckboxChange for checkbox
                      />
                      <label className='form-check-label ms-2' htmlFor='flexCheckDefault'>
                        Agree with the Policy and Terms of Use
                      </label>
                    </div>

                    <button className='btn btn-primary mb-4'>LogIn</button>
                    <Link to="/signup">
                      <h5 className="text-green-600" >Create New Account</h5>
                    </Link>
                  </form>
              </center>
            </div>
          </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default LogIn;
