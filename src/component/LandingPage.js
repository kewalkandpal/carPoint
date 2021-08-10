import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landingPage">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/car1.jpg" alt="img1" />
                        <div className="landContent">
                            <h2>A Certified Service Will Take Care</h2>
                            <h1>About Your Car</h1>
                           <Link to="/appointment"><button className="btn">Book An Appointment</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/car3.jpg" alt="img2" />
                        <div className="landContent">
                            <h2>A Certified Service Will Take Care</h2>
                            <h1>About Your Car</h1>
                           <Link to="/appointment"><button className="btn">Book An Appointment</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/car5.jpg" alt="img3" />
                        <div className="landContent">
                            <h2>A Certified Service Will Take Care</h2>
                            <h1>About Your Car</h1>
                           <Link to="/appointment"><button className="btn">Book An Appointment</button></Link>


                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
         </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
    </button>
            </div>
        </div>
    )
};
export default LandingPage;