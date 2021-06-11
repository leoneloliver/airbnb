import React from "react";
import Header from "./Header";

export default function Modal() {

  const hideModal = () => {
    document.getElementsByClassName("info")[0].classList.add("hide");
    document.querySelector('body').classList.remove('no-scroll');
  };

  return (
    <div className="info-modal info hide">
        <Header />
        <div className="mt-5 spacing-top" onClick={() => hideModal()}>
    
            <div className="close"><i className="fa fa-times" aria-hidden="true"></i></div>

            <div className="container">
                <h2 className="super-title mt-4 mb-4">Country Favourites</h2>
                <div className="row">

                    <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                        <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                        className="w-100 shadow-1-strong rounded mb-4 super-cover"
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
    
                <div className="col-lg-12 col-md-6 mb-4 mb-lg-0 row">
                    <div className="col-lg-8 col-md-8">
                        <h3 className="super-title">Country Favourites</h3>
                        <p className="super-desc">Description...</p>
                        
                    </div>
                    <div className="col-lg-4 col-md-4">
                        
                        <div className="shadow p-4 ">
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
