import React from 'react';
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const Contact = ()=>{
    return(
        <>
        <div className="container contactPage">
            <div className="row">
                <div className="col-lg-5 col-12 contactCar">
                    <img src="./images/2021.png" alt="mycar" className="img-fluid" />
                </div>
                <div className="col-lg-7 col-12 contactContain">
                    <h1>your appointment schedule </h1>
                    <h2>call : 1900-180-1238</h2>
                    <p>your car repair specelist </p>
                    <Link to="/appointment"><button className="btn">Book An Appointment</button></Link>
                </div>
            </div>
        </div>
        <div className="container p-5 my-5 addressdiv">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-12 d-flex justify-content-center align-items-center mt-5">
                    
                        <div className="addFa"><i className="fa-2x fa fa-map-marker"></i></div>
                        <div className="addTime"><h6>ADDRESS :</h6> <h6>255 MALL ROAD</h6></div>
                    
                </div>
                <div className="col-lg-4 col-md-4 col-12 d-flex justify-content-center align-items-center mt-5">
                
                        <div className="addFa"><i className="fa-2x fa fa-phone-square"></i></div>
                        <div className="addTime"><h6>PHONE :</h6> <h6>54525456258 , 6589785268</h6></div>
                    
                </div>
                <div className="col-lg-4 col-md-4 col-12 d-flex justify-content-center align-items-center mt-5">
               
                        <div className="addFa"><i className="fa-2x fa fa-history"></i></div>
                        <div className="addTime"><h6>WORKING TIME :</h6><h6>MONDAY TO SATATURDAY 10:00-06:00</h6> </div>
                    
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
};

export default Contact;