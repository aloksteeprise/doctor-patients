import React from 'react'
import login_image from '../../assets/other/login.png'
import '../../styes/register/register.css'

const Doctor = () => {
    return (
        <div className='container'>
            <div className='row'>

                <div class="clearfix secondary-nav">
                    <ul class="list">
                        <li><a href="/" id="loginLink">Login</a></li>
                        <li><a href="/register" id="registerLink">Register</a></li>
                    </ul>
                </div>

                <div className='col-sm-6 mt-5' style={{ display: "flex", justifyContent: "end" }}>
                    <img src={login_image} style={{ height: "336px" }} />
                </div>
                <div className='col-sm-4 card p-3 mt-5' >
                    <div className='col-sm-12 row border-bottom border-secondary-subtle'>
                        <div className='col-6 col-sm-6'>
                            <p>Join 125,000+ doctors</p>
                        </div>

                        <div className='col-6 col-sm-6'>
                            <p className='text-end'>
                                <a href='/register' style={{ textDecoration: "none" }}><span className='text-warning'>Not a doctor?</span></a>
                            </p>
                        </div>
                    </div>

                    <div class="mb-3 mt-2">
                        <label for="formGroupExampleInput" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Full Name" />
                    </div>
                    {/* <p>Mobile Number</p>
                        <div class="select-box" >
                            <select class="countryCode" id="country" name="country" >
                                <option selected="" value="IN" >+91(IND)</option><option value="SG">+65(SGP)</option><option value="PH">+63(PHL)</option><option value="MY">+60(MYS)</option><option value="ID">+62(IDN)</option><option value="BR">+55(BRA)</option><option value="MX">+52(MEX)</option><option value="AR">+54(ARG)</option><option value="CL">+56(CHL)</option><option value="VN">+84(VNM)</option><option value="AE">+971(UAE)</option><option value="KW">+965(KW)</option><option value="TZ">+255(TZA)</option><option value="BH">+973(BH)</option><option value="SA">+966(SA)</option><option value="US">+1(USA)</option></select>
                        </div>

                        <div class="mobile-number">
                    <input class="form-control email-text " id="mobile" name="mobile" placeholder="Mobile Number" type="tel" value=""/>
                    </div> */}

                    <div class="padding-top-8">
                        <p class="no-bottom-margin">Mobile Number</p>
                        <div class="padding-top-8">
                            <div class="select-box"><select class="countryCode" id="country" name="country"><option selected="" value="IN">+91(IND)</option><option value="SG">+65(SGP)</option><option value="PH">+63(PHL)</option><option value="MY">+60(MYS)</option><option value="ID">+62(IDN)</option><option value="BR">+55(BRA)</option><option value="MX">+52(MEX)</option><option value="AR">+54(ARG)</option><option value="CL">+56(CHL)</option><option value="VN">+84(VNM)</option><option value="AE">+971(UAE)</option><option value="KW">+965(KW)</option><option value="TZ">+255(TZA)</option><option value="BH">+973(BH)</option><option value="SA">+966(SA)</option><option value="US">+1(USA)</option></select></div>
                            <div class="mobile-number">
                                <input class="form-control email-text " id="mobile" name="mobile" placeholder="Mobile Number" type="tel" value="" />
                            </div>
                        </div>
                        <span id="mobileErrorBlock" class="error-block display-block">

                        </span>
                    </div>
                    <div class="mb-3 mt-2">
                        <label for="formGroupExampleInput2" class="form-label">Create Password</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Password" />
                    </div>
                    <div className='col-sm-12 row' >
                        <div className='col-12 col-sm-12'  >
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Receive relevant offers and promotional communication from Practo
                                </label>
                            </div>
                        </div>
                        {/* <div className='col-5 col-sm-5 text-center' ><p style={{ color: "blue" }}>Forgot password?</p></div> */}
                    </div>

                    {/* <div class="form-check  container">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Login with Otp instead of password
                        </label>
                    </div> */}
                    <button class="btn btn-primary mt-3" type="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Doctor;
