import React from 'react'
import '../../styes/forgot-password/forgotpassword.css'

const Forgotpassword = () => {
    return (

        <div>
            <div class="clearfix secondary-nav">
                <ul class="list">
                    <li><a href="/login" id="loginLink">Login</a></li>
                    <li><a href="/register" id="registerLink">Register</a></li>
                </ul>
            </div>
            <div className='center-div d-flex justify-content-center align-items-center' style={{ height: "70vh" }}>
                <div className='col-sm-3  card '>
                    <div className='forgot'>
                        <p>Forgot Password</p>
                    </div >

                    <div style={{ padding: "20px 25px" }}>
                        <p style={{ fontSize: "11px" }}>Provide us the email id/ mobile of your practo account and we will send you an email/otp with instructions to reset your password.</p>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Mobile Number/Email id</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Email" />
                        </div>

                        <button class="btn btn-primary mt-3" type="submit">Send me instructions</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Forgotpassword
