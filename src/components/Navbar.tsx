import React from 'react';

function Navbar() {
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid">
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="row-cols-lg-6">
                        <a href="#" className="text-decoration-none">
                            <img src="/src/assets/img/logo.png" width="100px" height="80px" alt="Logo" />
                            <span className="h1 text-uppercase text-info bg-dark px-2">E-</span>
                            <span className="h1 text-uppercase text-dark bg-info px-2 ml-n1">Commerce</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <button
                            className="btn d-flex align-items-center justify-content-between bg-info w-100"
                            style={{ height: '65px', padding: '0 30px' }}
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-vertical"
                        >
                            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </button>

                        <nav
                            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                            id="navbar-vertical"
                            style={{ width: 'calc(100% - 30px)', zIndex: '999' }}
                        >
                            <div className="navbar-nav w-100">
                                <div className="nav-item dropdown dropright">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1"></i></a>
                                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                        <a href="#" className="dropdown-item">Men's Dresses</a>
                                        <a href="#" className="dropdown-item">Women's Dresses</a>
                                        <a href="#" className="dropdown-item">Baby's Dresses</a>
                                    </div>
                                </div>
                                <a href="#" className="nav-item nav-link">Shirts</a>
                                <a href="#" className="nav-item nav-link">Jeans</a>
                                <a href="#" className="nav-item nav-link">Swimwear</a>
                                <a href="#" className="nav-item nav-link">Sleepwear</a>
                                <a href="#" className="nav-item nav-link">Sportswear</a>
                                <a href="#" className="nav-item nav-link">Jumpsuits</a>
                                <a href="#" className="nav-item nav-link">Blazers</a>
                                <a href="#" className="nav-item nav-link">Jackets</a>
                                <a href="#" className="nav-item nav-link">Shoes</a>
                            </div>
                        </nav>
                    </div>

                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <a href="#" className="text-decoration-none d-block d-lg-none">
                                <span className="h1 text-uppercase text-dark bg-light px-2">E-</span>
                                <span className="h1 text-uppercase text-light bg-info px-2 ml-n1">Commerce</span>
                            </a>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="index.html" className="nav-item nav-link active m-2">Home</a>
                                    <a href="shop.html" className="nav-item nav-link m-2">Shop</a>
                                    <a href="detail.html" className="nav-item nav-link m-2">Shop Detail</a>
                                    <div className="nav-item dropdown m-2">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages <i className="fa fa-angle-down m-1"></i></a>
                                        <div className="dropdown-menu bg-info rounded-0 border-0 m-0 m-2">
                                            <a href="cart.html" className="dropdown-item m-2">Shopping Cart</a>
                                            <a href="checkout.html" className="dropdown-item m-2">Checkout</a>
                                        </div>
                                    </div>
                                    <a href="contact.html" className="nav-item nav-link m-2">About</a>
                                    <a href="contact.html" className="nav-item nav-link m-2">Contact</a>
                                    <a href="contact.html" className="nav-item nav-link m-2">Help</a>
                                    <div className="nav-item dropdown m-2">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">My Account <i className="fa fa-angle-down m-1"></i></a>
                                        <div className="dropdown-menu bg-info rounded-0 border-0 m-2">
                                            <a href="signup.html" className="dropdown-item m-2">Sign up</a>
                                            <a href="signin.html" className="dropdown-item m-2">Sign in</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
