import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer.tsx";

function Home() {
    return (
        <div className="home-page">
            <Navbar />
            {/* Featured Start */}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-check text-info m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-shipping-fast text-info m-0 mr-2"></h1>
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fas fa-exchange-alt text-info m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-phone-volume text-info m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured End */}

            {/* Products Start */}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Products</span></h2>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex m-2">
                    <div className="col-lg-9 col-8 text-left m-2">
                        <form action="">
                            <div className="input-group m-2">
                                <input type="text" className="form-control m-2" placeholder="Search for products" />
                                <div className="input-group-append m-2">
                                    <span className="input-group-text bg-info text-primary">
                                        <i className="fa fa-search m2"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row px-xl-5">
                    {/* Product Cards */}
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <div className="product-item bg-light mb-4">
                                <div className="product-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={`/src/assets/img/product-${i + 1}.jpg`} alt="" />
                                    <div className="product-action">
                                        <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                        <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                        <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                        <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                        <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center mb-1">
                                        <small className="fa fa-star text-info mr-1"></small>
                                        <small className="fa fa-star text-info mr-1"></small>
                                        <small className="fa fa-star text-info mr-1"></small>
                                        <small className="fa fa-star text-info mr-1"></small>
                                        <small className="fa fa-star-half-alt text-info mr-1"></small>
                                        <small>(99)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-12">
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Products End */}

            {/* Vendor Start */}
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="bg-light p-4">
                                    <img src={`img/vendor-${i + 1}.jpg`} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Vendor End */}
            <Footer />
        </div>
    );
}

export default Home;
