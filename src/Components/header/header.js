import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";

const Header = () => {

  // states define
  // login states
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setShowPassword] = useState(false);
  // register states
  const [rFullName, setRFullName] = useState('');
  const [rUserName, setRUserName] = useState('');

  // login api data
  const Login = () => {
    if (!ValidateFields()) return false;
  }
  const ValidateFields = () => {
    if (!fullName || fullName.trim() === "") {
      toast.error("Please Enter Your FullName")
      return false;
    }

    if (!userName || userName.trim() === "") {
      toast.error("Please Enter UserName / Email")
      return false;
    }

    if (!password) {
      toast.error("Please Enter Your Password")
      return false;
    }
    return true;
  }

  // register api data



  return (
    <>
      <header className="main-header position-absolute fixed-top m-0 navbar-dark header-sticky header-sticky-smart header-mobile-xl">
        <div className="sticky-area">
          <div className="container container-xxl">
            <div className="d-flex align-items-center">
              <nav className="navbar navbar-expand-xl bg-transparent px-0 w-100 w-xl-auto">
                <a className="navbar-brand mr-7" href="/">
                  <img src="images/logo-white.png" alt="HomeID" className="normal-logo" />
                  <img src="images/logo.png" alt="HomeID"
                    className="sticky-logo" />
                </a>
                <a className="d-block d-xl-none ml-auto mr-4 position-relative text-white p-2" href="#">
                  <i className="fal fa-heart fs-large-4"></i>
                  <span className="badge badge-primary badge-circle badge-absolute">1</span>
                </a>
                <button className="navbar-toggler border-0 px-0" type="button" data-bs-toggle="collapse"
                  data-bs-target="#primaryMenu02"
                  aria-controls="primaryMenu02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="text-white fs-24"><i className="fal fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse mt-3 mt-xl-0" id="primaryMenu02">
                  <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
                    <li id="navbar-item-home" aria-haspopup="true" aria-expanded="false"
                      className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <a className="nav-link dropdown-toggle p-0"
                        href="index.html" data-toggle="dropdown" >
                        Home
                        <span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu pt-3 pb-0 pb-xl-3" aria-labelledby="navbar-item-home">
                        <li className="dropdown-item active">
                          <a id="navbar-link-home-01"
                            className="dropdown-link"
                            href="home-01.html" >
                            Home 01
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-home-02"
                            className="dropdown-link"
                            href="home-02.html" >
                            Home 02
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-home-03"
                            className="dropdown-link"
                            href="home-03.html" >
                            Home 03
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-home-04"
                            className="dropdown-link"
                            href="home-04.html" >
                            Home 04
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-home-05"
                            className="dropdown-link"
                            href="home-05.html" >
                            Home 05
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-home-06"
                            className="dropdown-link"
                            href="home-06.html" >
                            Home 06
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-home-07"
                            className="dropdown-link"
                            href="home-07.html" >
                            Home 07
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-home-08"
                            className="dropdown-link"
                            href="home-08.html" >
                            Home 08
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="navbar-item-listing" aria-haspopup="true" aria-expanded="false"
                      className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <a className="nav-link dropdown-toggle p-0"
                        href="listing.html" data-toggle="dropdown" >
                        Listing
                        <span className="caret"></span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-xxl dropdown-menu-listing px-0 py-3" aria-labelledby="navbar-item-listing">
                        <div className="dropdown-body">
                          <div className="row no-gutters">
                            <div className="col-xl-3">
                              {/* Heading  */}
                              <h4 className="dropdown-header text-dark fs-16 mb-2">
                                List view
                              </h4>
                              {/* List */}
                              <a className="dropdown-item" href="listing-full-width-list.html">
                                Full width list
                              </a>
                              <a className="dropdown-item" href="listing-with-left-filter.html">
                                List with left filter
                              </a>
                              <a className="dropdown-item" href="listing-with-right-filter.html">
                                List with right filter
                              </a>
                              <a className="dropdown-item" href="listing-with-left-sidebar.html">
                                List with left sidebar
                              </a>
                              {/* List */}
                              <a className="dropdown-item" href="listing-with-right-sidebar.html">
                                List with right sidebar
                              </a>
                            </div>
                            <div className="col-xl-3">
                              {/* Heading */}
                              <h4 className="dropdown-header text-dark fs-16 mb-2">
                                Grid view
                              </h4>
                              {/* List */}
                              <a className="dropdown-item" href="listing-full-width-grid-1.html">
                                Full width grid 1
                              </a>
                              <a className="dropdown-item" href="listing-full-width-grid-2.html">
                                Full width grid 2
                              </a>
                              <a className="dropdown-item" href="listing-full-width-grid-3.html">
                                Full width grid 3
                              </a>
                              <a className="dropdown-item" href="listing-grid-with-left-filter.html">
                                Grid with left filter
                              </a>
                              <a className="dropdown-item" href="listing-grid-with-right-filter.html">
                                Grid with right filter
                              </a>
                              <a className="dropdown-item" href="listing-grid-with-left-sidebar.html">
                                Grid with left sidebar
                              </a>
                              <a className="dropdown-item" href="listing-grid-with-right-sidebar.html">
                                Grid with right sidebar
                              </a>
                            </div>
                            <div className="col-xl-3">
                              {/* Heading */}
                              <h4 className="dropdown-header text-dark fs-16 mb-2">
                                Map style
                              </h4>
                              {/* List */}
                              <a className="dropdown-item" href="listing-half-map-list-layout-1.html">
                                Half map list layout 1
                              </a>
                              <a className="dropdown-item" href="listing-half-map-list-layout-2.html">
                                Half map list layout 2
                              </a>
                              <a className="dropdown-item" href="listing-half-map-grid-layout-1.html">
                                Half map grid layout 1
                              </a>
                              <a className="dropdown-item" href="listing-half-map-grid-layout-2.html">
                                Half map grid layout 2
                              </a>
                              <a className="dropdown-item" href="listing-full-map-1.html">
                                Full map 1
                              </a>
                              <a className="dropdown-item" href="listing-full-map-2.html">
                                Full map 2
                              </a>
                              <a className="dropdown-item" href="listing-full-map-with-sidebar.html">
                                Full Map with sidebar
                              </a>
                            </div>
                            <div className="col-xl-3">
                              {/* Heading */}
                              <h4 className="dropdown-header text-dark fs-16 mb-2">
                                Single Property
                              </h4>
                              {/* List */}
                              <a className="dropdown-item" href="single-property-1.html">
                                Single Property 1
                              </a>
                              <a className="dropdown-item" href="single-property-2.html">
                                Single Property 2
                              </a>
                              <a className="dropdown-item" href="single-property-3.html">
                                Single Property 3
                              </a>
                              <a className="dropdown-item" href="single-property-4.html">
                                Single Property 4
                              </a>
                              <a className="dropdown-item" href="single-property-5.html">
                                Single Property 5
                              </a>
                              <a className="dropdown-item" href="single-property-6.html">
                                Single Property 6
                              </a>
                              <a className="dropdown-item" href="single-property-7.html">
                                Single Property 7
                              </a>
                              <a className="dropdown-item" href="single-property-8.html">
                                Single Property 8
                              </a>
                              <a className="dropdown-item" href="single-property-9.html">
                                Single Property 9
                              </a>
                            </div>
                          </div>
                          {/* / .row */}
                        </div>
                      </div>
                    </li>
                    <li id="navbar-item-dashboard" aria-haspopup="true" aria-expanded="false"
                      className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <a className="nav-link dropdown-toggle p-0"
                        href="#" data-toggle="dropdown" >
                        Dashboard
                        <span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu pt-3 pb-0 pb-xl-3" aria-labelledby="navbar-item-dashboard">
                        <li className="dropdown-item">
                          <a id="navbar-link-dashboard"
                            className="dropdown-link"
                            href="dashboard.html" >
                            Dashboard
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-add-new-property"
                            className="dropdown-link"
                            href="dashboard-add-new-property.html" >
                            Add New Property
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-my-properties"
                            className="dropdown-link"
                            href="dashboard-my-properties.html" >
                            My Properties
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-my-favorites"
                            className="dropdown-link"
                            href="dashboard-my-favorites.html" >
                            My Favorites
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-save-search"
                            className="dropdown-link"
                            href="dashboard-save-search.html" >
                            Save Search
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-reviews"
                            className="dropdown-link"
                            href="dashboard-reviews.html" >
                            Reviews
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-my-package"
                            className="dropdown-link"
                            href="dashboard-my-packages.html" >
                            My Package
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-my-profile"
                            className="dropdown-link"
                            href="dashboard-my-profiles.html" >
                            My Profile
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-signup-and-login"
                            className="dropdown-link"
                            href="signup-and-login.html" >
                            Signup and login
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-password-recovery"
                            className="dropdown-link"
                            href="password-recovery.html" >
                            Password Recovery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="navbar-item-pages" aria-haspopup="true" aria-expanded="false"
                      className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <a className="nav-link dropdown-toggle p-0"
                        href="#" data-toggle="dropdown" >
                        Pages
                        <span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu pt-3 pb-0 pb-xl-3" aria-labelledby="navbar-item-pages">
                        <li className="dropdown-item dropdown dropright">
                          <a id="navbar-link-news"
                            className="dropdown-link dropdown-toggle"
                            href="#" data-toggle="dropdown" >
                            News
                          </a>
                          <ul className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-xl-3"
                            aria-labelledby="navbar-link-news">
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="blog-classic.html">Blog classic</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="blog-grid.html">Blog grid</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="blog-grid-with-sidebar.html">Blog grid with sidebar</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="blog-list-width-sidebar.html">Blog list with sidebar</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="blog-details-1.html">Blog details 1</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="blog-details-2.html">Blog details 2</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-about-us"
                            className="dropdown-link"
                            href="about-us.html" >
                            About us
                          </a>
                        </li>
                        <li className="dropdown-item dropdown dropright">
                          <a id="navbar-link-service"
                            className="dropdown-link dropdown-toggle"
                            href="#" data-toggle="dropdown" >
                            Service
                          </a>
                          <ul className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-xl-3"
                            aria-labelledby="navbar-link-service">
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="services.html">Services</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="services-with-sidebar.html">Services with sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-item dropdown dropright">
                          <a id="navbar-link-contact-us"
                            className="dropdown-link dropdown-toggle"
                            href="#" data-toggle="dropdown" >
                            Contact us
                          </a>
                          <ul className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-xl-3"
                            aria-labelledby="navbar-link-contact-us">
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="contact-us-1.html">Contact us 1</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="contact-us-2.html">Contact us 2</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-item dropdown dropright">
                          <a id="navbar-link-agent"
                            className="dropdown-link dropdown-toggle"
                            href="#" data-toggle="dropdown" >
                            Agent
                          </a>
                          <ul className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-xl-3"
                            aria-labelledby="navbar-link-agent">
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="agents-grid-1.html">Agents grid 1</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="agents-grid-2.html">Agents grid 2</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="agents-grid-with-sidebar.html">Agents grid with sidebar</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="agents-list.html">Agents list</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="agent-details-1.html">Agent detais 1</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="agent-details-2.html">Agent detais 2</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-item dropdown dropright">
                          <a id="navbar-link-agency"
                            className="dropdown-link dropdown-toggle"
                            href="#" data-toggle="dropdown" >
                            Agency
                          </a>
                          <ul className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-xl-3"
                            aria-labelledby="navbar-link-agency">
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="agency-grid.html">Agency grid</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="agency-list.html">Agency list</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="agency-details-1.html">Agency details 1</a>
                            </li>
                            <li className="dropdown-item">
                              <a className="dropdown-link" href="agency-details-2.html">Agency details 2</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-faqs"
                            className="dropdown-link"
                            href="faqs.html" >
                            FAQs
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-page-404"
                            className="dropdown-link"
                            href="page-404.html" >
                            Page 404
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-checkout"
                            className="dropdown-link"
                            href="checkout-complete-1.html" >
                            Checkout
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-payment-completed"
                            className="dropdown-link"
                            href="checkout-complete-2.html" >
                            Payment Completed
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-compare"
                            className="dropdown-link"
                            href="compare-details.html" >
                            Compare
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a id="navbar-link-packages"
                            className="dropdown-link"
                            href="packages.html" >
                            Packages
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="navbar-item-docs" aria-haspopup="true" aria-expanded="false"
                      className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <a className="nav-link dropdown-toggle p-0"
                        href="#" data-toggle="dropdown" >
                        Docs
                        <span className="caret"></span>
                      </a>
                      <div className="dropdown-menu px-0 pt-3 dropdown-menu-docs">
                        <div className="dropdown-body">
                          <a className="dropdown-item py-1"
                            href="docs/getting-started/dev-environment-setup.html">
                            <div className="media">
                              <div className="fs-20 mr-3">
                                <i className="fal fa-file-alt"></i>
                              </div>
                              <div className="media-body">
                                <span className="d-block lh-15">Documentation</span>
                                <small className="d-block">Kick-start customization</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider m-0"></div>
                          <a className="dropdown-item py-1"
                            href="docs/content/typography.html">
                            <div className="media">
                              <div className="fs-20 mr-3">
                                <i className="fal fa-layer-group"></i>
                              </div>
                              <div className="media-body">
                                <span className="d-block lh-15">UI Kit<span
                                  className="badge badge-danger ml-2">50+</span></span>
                                <small className="d-block">Flexible components</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider m-0"></div>
                          <a className="dropdown-item py-1"
                            href="docs/getting-started/changelog.html">
                            <div className="media">
                              <div className="fs-20 mr-3">
                                <i className="fal fa-edit"></i>
                              </div>
                              <div className="media-body">
                                <span className="d-block lh-15">Changelog<span
                                  className="badge badge-success ml-2">v1.0.1</span></span>
                                <small className="d-block">Regular updates</small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider m-0"></div>
                          <a className="dropdown-item py-1"
                            href="https://sp.g5plus.net/" target="_blank">
                            <div className="media">
                              <div className="fs-20 mr-3">
                                <i className="fal fa-life-ring"></i>
                              </div>
                              <div className="media-body">
                                <span className="d-block lh-15">Support</span>
                                <small className="d-block">https://sp.g5plus.net/</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="d-block d-xl-none">
                    <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2"
                          href="#" id="bd-versions-mobile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          ENG
                        </a>
                        <div className="dropdown-menu dropdown-sm dropdown-menu-left" aria-labelledby="bd-versions-mobile">
                          <a className="dropdown-item" href="#">VN</a>
                          <a className="dropdown-item active" href="#">ENG</a>
                          <a className="dropdown-item" href="#">ARB</a>
                          <a className="dropdown-item" href="#">KR</a>
                          <a className="dropdown-item" href="#">JN</a>
                        </div>
                      </li>
                      <li className="divider"></li>
                      <li className="nav-item ">
                        <a className="nav-link pl-3 pr-2" data-bs-toggle="modal" href="#login-register-modal">SIGN IN</a>
                      </li>
                      <li className="nav-item ml-auto w-100 w-sm-auto">
                        <a className="btn btn-primary btn-lg"
                          href="dashboard-add-new-property.html">
                          Add listing
                          <img src="images/add-listing-icon.png" alt="Add listing"
                            className="ml-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="ml-auto d-none d-xl-block">
                <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2"
                      href="#" id="bd-versions" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      ENG
                    </a>
                    <div className="dropdown-menu dropdown-sm dropdown-menu-right" aria-labelledby="bd-versions">
                      <a className="dropdown-item" href="#">VN</a>
                      <a className="dropdown-item active" href="#">ENG</a>
                      <a className="dropdown-item" href="#">ARB</a>
                      <a className="dropdown-item" href="#">KR</a>
                      <a className="dropdown-item" href="#">JN</a>
                    </div>
                  </li>
                  <li className="divider"></li>
                  <li className="nav-item ">
                    <a className="nav-link pl-3 pr-2" data-bs-toggle="modal" href="#login-register-modal">SIGN IN</a>
                  </li>
                  <li className="nav-item mr-auto mr-lg-6">
                    <a className="nav-link px-2 position-relative" href="#">
                      <i className="fal fa-heart fs-large-4"></i>
                      <span className="badge badge-primary badge-circle badge-absolute">1</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-outline-light btn-lg text-white rounded-lg bg-hover-primary border-hover-primary hover-white d-none d-lg-block"
                      href="dashboard-add-new-property.html">
                      Add listing
                      <img src="images/add-listing-icon.png" alt="Add listing"
                        className="ml-1 normal-button-icon" />
                      <img src="images/add-listing-icon-primary.png" alt="Add listing"
                        className="ml-1 sticky-button-icon" />
                    </a>
                    <a className="btn btn-primary btn-lg d-block d-lg-none"
                      href="dashboard-add-new-property.html">
                      Add listing
                      <img src="images/add-listing-icon.png" alt="Add listing"
                        className="ml-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="modal fade login-register login-register-modal" id="login-register-modal" tabIndex="-1" role="dialog"
        aria-labelledby="login-register-modal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered mxw-571" role="document">
          <div className="modal-content">
            <div className="modal-header border-0 p-0">
              <div className="nav nav-tabs row w-100 no-gutters" id="myTab" role="tablist">
                <a className="nav-item col-sm-3 ml-0 nav-link pr-6 py-4 pl-9 active fs-18" id="login-tab"
                  data-bs-toggle="tab"
                  href="#login"
                  role="tab"
                  aria-controls="login" aria-selected="true">Login</a>
                <a className="nav-item col-sm-3 ml-0 nav-link py-4 px-6 fs-18" id="register-tab" data-bs-toggle="tab"
                  href="#register"
                  role="tab"
                  aria-controls="register" aria-selected="false">Register</a>
                <div className="nav-item col-sm-6 ml-0 d-flex align-items-center justify-content-end">
                  <button type="button" className="close m-0 fs-23" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-body p-4 py-sm-7 px-sm-8">
              <div className="tab-content shadow-none p-0" id="myTabContent">
                <div className="tab-pane fade show active" id="login" role="tabpanel"
                  aria-labelledby="login-tab">
                  <form className="form">
                    {/* fullname input */}
                    <div className="form-group mb-4">
                      <label htmlFor="fullname" className="sr-only">Full Name</label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18"
                            id="inputGroup-sizing-lg">
                            <FaUserEdit />
                          </span>
                        </div>
                        <input type="text" className="form-control border-0 shadow-none fs-13"
                          id="fullname" name="fullname"
                          placeholder="FullName" onChange={(e) => setFullName(e?.target?.value)} value={fullName} />
                      </div>
                    </div>

                    <div className="form-group mb-4">
                      {/* username input */}
                      <label htmlFor="username" className="sr-only">Username</label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18"
                            id="inputGroup-sizing-lg">
                            <i className="far fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control border-0 shadow-none fs-13"
                          id="username" name="username"
                          placeholder="Username / Your email" onChange={(e) => setUserName(e?.target?.value)} value={userName} />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      {/* password input */}
                      <label htmlFor="password" className="sr-only">Password</label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                            <i className="far fa-lock"></i>
                          </span>
                        </div>
                        <input type={isShowPassword ? 'text' : "password"} className="form-control border-0 shadow-none fs-13"
                          id="password" name="password"
                          placeholder="Password" onChange={(e) => setPassword(e?.target?.value)} value={password} />
                        <div className="input-group-append">
                          <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                            <i className="far fa-eye-slash" onClick={() => setShowPassword(!isShowPassword)}></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mb-4">
                      {/* <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="remember-me" name="remember-me" />
                        <label className="form-check-label" htmlFor="remember-me">
                          Remember me
                        </label>
                      </div> */}
                      <a href="password-recovery.html" className="d-inline-block ml-auto text-orange fs-15">
                        Lost password?
                      </a>
                    </div>
                    {/* <div className="d-flex p-2 border re-capchar align-items-center mb-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="verify" name="verify" />
                        <label className="form-check-label" htmlFor="verify">
                          I'm not a robot
                        </label>
                      </div>
                      <a href="#" className="d-inline-block ml-auto">
                        <img src="images/re-captcha.png" alt="Re-capcha" />
                      </a>
                    </div> */}
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={Login}>Log in</button>
                  </form>
                  {/* <div className="divider text-center my-2">
                    <span className="px-4 bg-white lh-17 text">
                      or continue with
                    </span>
                  </div>
                  <div className="row no-gutters mx-n2">
                    <div className="col-4 px-2 mb-4">
                      <a href="#" className="btn btn-lg btn-block facebook text-white px-0">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="col-4 px-2 mb-4">
                      <a href="#" className="btn btn-lg btn-block google px-0">
                        <img src="images/google.png" alt="Google" />
                      </a>
                    </div>
                    <div className="col-4 px-2 mb-4">
                      <a href="#" className="btn btn-lg btn-block twitter text-white px-0">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div> */}
                </div>

                {/* register data */}
                <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                  <form className="form">
                    {/* full name details */}
                    <div className="form-group mb-4">
                      <label htmlFor="full-name" className="sr-only">Full name</label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                            <i className="far fa-address-card"></i></span>
                        </div>
                        <input type="text" className="form-control border-0 shadow-none fs-13"
                          id="full-name" name="full-name"
                          placeholder="Full name" onChange={(e) => setRFullName(e?.target?.value)} value={rFullName} />
                      </div>
                    </div>
                    {/* username details */}
                    <div className="form-group mb-4">
                      <label htmlFor="username01" className="sr-only">Username</label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                            <i className="far fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control border-0 shadow-none fs-13"
                          id="username01" name="username01"
                          placeholder="Username / Your email" />
                      </div>
                    </div>

                    {/* password fields */}
                    <div className="form-group mb-4">
                      <label htmlFor="password01" className="sr-only">Password</label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                            <i className="far fa-lock"></i>
                          </span>
                        </div>
                        <input type="text" className="form-control border-0 shadow-none fs-13"
                          id="password01" name="password01"
                          placeholder="Password" />
                        <div className="input-group-append">
                          <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                            <i className="far fa-eye-slash"></i>
                          </span>
                        </div>
                      </div>
                      <p className="form-text">Minimum 8 characters with 1 number and 1 letter</p>
                    </div>

                    {/* confirm password */}
                    <div className="form-group mb-4">
                      <label htmlFor="password02" className="sr-only">Confirm Password</label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                            <i className="far fa-lock"></i>
                          </span>
                        </div>
                        <input type="password" className="form-control border-0 shadow-none fs-13"
                          id="password02" name="password02"
                          placeholder="Confirm Password" />
                        <div className="input-group-append">
                          <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                            <i className="far fa-eye-slash"></i>
                          </span>
                        </div>
                      </div>
                      <p className="form-text">it s hould be same as above password</p>
                    </div>

                    <div className="main-section-checkbox-register">
                      <Form.Check
                        inline
                        label="Developer"
                        name="group1"
                        type={'radio'}
                        id={`inline-${'radio'}-1`}
                      // onChange={() => setIsPublic(!isPublic)} value={isPublic}
                      />

                      <Form.Check
                        inline
                        label="Agent"
                        name="group1"
                        type={'radio'}
                        id={`inline-${'radio'}-1`}
                      // onChange={() => setIsPublic(!isPublic)} value={isPublic}
                      />

                      <Form.Check
                        inline
                        label="Other Business"
                        name="group1"
                        type={'radio'}
                        id={`inline-${'radio'}-1`}
                      // onChange={() => setIsPublic(!isPublic)} value={isPublic}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg btn-block">Sign up</button>
                  </form>
                  {/* <div className="divider text-center my-2">
                    <span className="px-4 bg-white lh-17 text">
                      or continue with
                    </span>
                  </div>
                  <div className="row no-gutters mx-n2">
                    <div className="col-4 px-2 mb-4">
                      <a href="#" className="btn btn-lg btn-block facebook text-white px-0">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                    <div className="col-4 px-2 mb-4">
                      <a href="#" className="btn btn-lg btn-block google px-0">
                        <img src="images/google.png" alt="Google" />
                      </a>
                    </div>
                    <div className="col-4 px-2 mb-4">
                      <a href="#" className="btn btn-lg btn-block twitter text-white px-0">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div> */}
                  {/* <div className="mt-2">By creating an account, you agree to HomeID
                    <a className="text-heading" href="#"><u>Terms of Use</u> </a> and
                    <a className="text-heading" href="#"><u>Privacy Policy</u></a>.
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>

  )
}
export default Header;