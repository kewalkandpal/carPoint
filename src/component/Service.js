import React from "react";
import Footer from "./Footer";
const Service = () => {
    return (
        <>
                <div className="container serviceMain2">
                    <div className="row">
                        <div className="col-md-6 col-12 service">
                            <h4>Our Services</h4>
                            <h1>The Many Auto Reapir Service We Offer :</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem Ipsum has been the industry's standard dummy  Lorem Ipsum has been the industry's standard dummy  .</p>
                            {/* <NavLink to="appointment"> <button className="btn">Book A Appointment</button></NavLink> */}
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12 service2">
                                    <p><i className="fa fa-arrow-right"></i> Fuel System Reapir</p>
                                    <p><i className="fa fa-arrow-right"></i> General Auto Repair And Maintenance</p>
                                    <p><i className="fa fa-arrow-right"></i> Fuel System Reapir</p>
                                    <p><i className="fa fa-arrow-right"></i> General Auto Repair And Maintenancer</p>
                                    <p><i className="fa fa-arrow-right"></i> Fuel System Reapir</p>
                                    <p><i className="fa fa-arrow-right"></i> General Auto Repair And Maintenance</p>
                                </div>

                                <div className="col-md-6 col-12 service2">
                                    <p><i className="fa fa-arrow-right"> </i> Fuel System Reapir</p>
                                    <p><i className="fa fa-arrow-right"> </i> Fuel System Reapir</p>
                                    <p><i className="fa fa-arrow-right"> </i> General Auto Repair And Maintenance</p>
                                    <p><i className="fa fa-arrow-right"> </i> Fuel System Reapir</p>
                                    <p><i className="fa fa-arrow-right"> </i> General Auto Repair And Maintenance</p>
                                    <p><i className="fa fa-arrow-right"> </i> Fuel System Reapir</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container service3">
                <div className="row">
                    <div className="col-md-4 col-12 offerDiv">

                        <div className="offer1">
                            <p><span> 25 </span><span> % </span>OFF</p>
                            <h2>REPAIRS !</h2>
                        </div>
                        <div className="offer2">
                            <i className=" fa-4x fa fa-cut cezer"></i>
                        </div>
                    </div>

                    <div className="col-md-8 col-12 offerDiv2">
                        <h3>Our Latest Specials Offer</h3>
                        <h2>Any Service Of Rs 2000 Or More</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Service;