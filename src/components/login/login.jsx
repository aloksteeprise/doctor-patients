import React, { useState } from 'react'
import login_image from '../../assets/other/login.png'

//calling service
import { loginAuthService } from '../../services/login/login.service';

const Loginpage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await loginAuthService(email, password);
            console.log('Login successful:', data);

            // Redirect the user to the dashboard or home page
            // For example, using React Router:
            // history.push('/dashboard');
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className='container'>

            <div className='row'>
                <div class="clearfix secondary-nav">
                    <ul class="list">
                        <li><a href="/" id="loginLink">Login</a></li>
                        <li><a href="/register" id="registerLink">Register</a></li>
                    </ul>
                </div>
                {/* <h2 className='text-center'>Login page</h2> */}
                <div className='col-sm-6 mt-4' style={{ display: "flex", justifyContent: "end" }}>
                    <img src={login_image} style={{ height: "336px" }} />
                </div>
                <div className='col-sm-4 card p-3 mt-5' >
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Mobile Number/Email id</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Email" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Password</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Password" />
                    </div>
                    <div className='col-sm-12 row' >
                        <div className='col-7 col-sm-7'  >
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Remember for 30 days
                                </label>
                            </div>



                        </div>
                        <div className='col-5 col-sm-5 text-center' >

                            <a href='forgot' style={{ textDecoration: "none" }}>
                                <p style={{ color: "blue" }}>Forgot password?</p>
                            </a>

                        </div>
                    </div>


                    <div class="form-check mt-1 container">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Login with Otp instead of password
                        </label>
                    </div>
                    <button class="btn btn-primary mt-3" type="submit">Login</button>
                </div>




            </div>
        </div>
    )
}

export default Loginpage
