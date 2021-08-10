import React from "react";
import Client from "./Client";
import Footer from "./Footer";
const About = () => {
    return (
        <>
            <div className="container-fluid aboutmain2">
                <div className="abouHeading">
                    <p>Some Awesome About Us</p>
                    <h2>Auto Repaire Technical experience</h2>
                    <h1>you must Know</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 aboutexp">

                            <div><h1>8</h1></div>
                            <div>
                                <h2>years of</h2>
                                <h2>experience</h2>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12 aboutexp">

                            <div><h1>3568</h1></div>
                            <div>
                                <h2>satisfied</h2>
                                <h2>customer</h2>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 aboutexp">

                            <div><h1>25</h1></div>
                            <div>
                                <h2>technician </h2>
                                <h2>workers</h2>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container aboutmain3">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <img src="./images/machanic1.jpg" className="img-fluid" alt="machanic1" />
                        </div>
                        <div className="col-md-4 col-12">
                            <img src="./images/machanic2.jpg" className="img-fluid" alt="machanic2" />
                        </div>
                        <div className="col-md-4 col-12">
                            <img src="./images/machanic4.jpg" className="img-fluid" alt="machanic3" />
                        </div>
                    </div>
                </div>
            </div>
           <Client />
           <Footer />
    </>
    )
};

export default About;