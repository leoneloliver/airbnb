import React from "react";
import Header from "./Header";
import { GrClose } from "react-icons/gr"
import avatar from '../../src/avatar.webp'

export default function Modal() {

    function cleanSearchField() {
        document.getElementById('myInput').value = "";
        document.getElementById('myInput').focus();
    }
    

    const hideModal = () => {
        document.getElementsByClassName("info")[0].classList.add("hide");
        document.querySelector('body').classList.remove('no-scroll');
        cleanSearchField();
    };

    return (
        <div className="info-modal info hide pb-5" onClick={() => hideModal()}>
            <Header />
            <div className="mt-5 spacing-top">
        
                <div className="close"><GrClose/></div>

                <div className="container">
                    <h2 className="super-title mt-4 mb-4">Country Favourites</h2>
                    <div className="row">

                        <div className="col-lg-6 col-md-6 mb-lg-4 mb-lg-0">
                            <img
                            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                            className="w-100 shadow-1-strong rounded mb-lg-4 mb-1 super-cover"
                            alt=""
                            />
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0 row h-m">
                    
                            <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                                <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                                className="w-100 shadow-1-strong rounded mb-4 super-cover"
                                alt=""
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                                <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                                className="w-100 shadow-1-strong rounded mb-4 super-cover"
                                alt=""
                                />
                            </div>

                            <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                                <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                                className="w-100 shadow-1-strong rounded mb-4 super-cover"
                                alt=""
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                                <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                                className="w-100 shadow-1-strong rounded mb-4 super-cover"
                                alt=""
                                />
                            </div>
                        
                        </div>
                    </div>
        
                    <div className="col-lg-12 col-md-6 mb-4 mb-lg-0 row pr-0">
                        <div className="col-lg-8 col-md-8">
                            <div className="row col-12 p-0 mb-3">
                                <div className="col-10">
                                    <p className="super-desc">Description...</p>
                                </div>
                                <div className="col-2">
                                    <img src={avatar} className="img-responsive avatar" alt="Owner" />
                                </div>
                            </div>
                            
                            <div className="h-m">
                                Welcome to our house! This newly renovated house perfect for travelers include PRIVATE washroom and kitchen.
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-4 mobile-pr-0">
                            
                            <div className="shadow p-4 mobile-pushup">
                            <p>$ <span className="super-price"></span> per night</p>
                            <div className="btn btn-primary btn-lg air-btn btn-block" role="button">Check availability </div>
                            </div>
                        </div>

                    </div>
                </div>
                    
            </div>
        </div>
    );
}
