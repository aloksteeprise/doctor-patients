import React from 'react';
import '../../styes/home/home.css';

//Use of const file
import {homecard1,homecard2,homecard3 } from '../../constants/const_images_path';

const Home = () => {
    return (
        <>
            <div class="input-group homeinitial">
                <button class="btn btn-outline-secondary dropdown-toggle firstdropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">Search Location</button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action before</a></li>
                    <li><a class="dropdown-item" href="#">Another action before</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>

                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Search doctors,clinics,hospitals, etc</button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>

            <div className='homecarddiv'>
                <div class="card card1" style={{ width: "15rem" }}>
                    <img src={homecard1} class="card-img-top homecardimg1" alt="..." />
                    <div class="card-body">
                        <h3 class="card-text">Instant Video Consultation </h3>
                        <p>Connect within 60 secs</p>
                    </div>
                </div>

                <div class="card card2" style={{ width: "15rem" }}>
                    <img src={homecard2} class="card-img-top homecardimg2" alt="..." />
                    <div class="card-body">
                        <h3 class="card-text">Find Doctors near you </h3>
                        <p>Confirmed Appoinments</p>
                    </div>
                </div>

                <div class="card card3" style={{ width: "15rem" }}>
                    <img src={homecard3} class="card-img-top homecardimg3" alt="..." />
                    <div class="card-body">
                        <h3 class="card-text">Surgeries </h3>
                        <p>Safe and trusted surgery centers</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home
