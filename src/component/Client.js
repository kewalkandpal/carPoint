import React from "react";

const Client = () => {
    let mydate = new Date().toLocaleDateString();
    return (
        <div className="container ourClient">
            <h2>what our <span>client</span> say</h2>
            <div className="container">
                <div id="sliding" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-4 col-sm-4 col-12 clientContent ">

                                    <i className="fa-2x fa fa-quote-left"></i>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                            galley of type and scrambled it to make a type specimen book.</p>
                                        <h5>kk bro</h5>
                                        <p>{mydate}</p>


                                    </div>
                                    <div className="col-md-4 col-sm-4 col-12 clientContent ">

                                        <i className="fa-2x fa fa-quote-left"></i>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                            galley of type and scrambled it to make a type specimen book.</p>
                                        <h5>kk bro</h5>
                                        <p>{mydate}</p>

                                    </div>
                                    <div className="col-md-4 col-sm-4 col-12 clientContent ">

                                        <i className="fa-2x fa fa-quote-left"></i>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                            galley of type and scrambled it to make a type specimen book.</p>
                                        <h5>kk bro</h5>
                                        <p>{mydate}</p>


                                    </div>
                                </div>
                            </div>
                    
                        <div className="carousel-item">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-4 col-sm-4 col-12 clientContent ">

                                    <i className="fa-2x fa fa-quote-left"></i>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <h5>kk bro</h5>
                                    <p>{mydate}</p>


                                </div>
                                <div className="col-md-4 col-sm-4 col-12 clientContent ">

                                    <i className="fa-2x fa fa-quote-left"></i>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <h5>kk bro</h5>
                                    <p>{mydate}</p>


                                </div>
                                <div className="col-md-4 col-sm-4 col-12 clientContent ">

                                    <i className="fa-2x fa fa-quote-left"></i>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <h5>kk bro</h5>
                                    <p>{mydate}</p>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-4 col-sm-4 col-12 clientContent ">

                                    <i className="fa-2x fa fa-quote-left"></i>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <h5>kk bro</h5>
                                    <p>{mydate}</p>


                                </div>
                                <div className="col-md-4 col-sm-4 col-12 clientContent ">

                                    <i className="fa-2x fa fa-quote-left"></i>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <h5>kk bro</h5>
                                    <p>{mydate}</p>


                                </div>
                                <div className="col-md-4 col-sm-4 col-12 clientContent ">

                                    <i className="fa-2x fa fa-quote-left"></i>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <h5>kk bro</h5>
                                    <p>{mydate}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Client;