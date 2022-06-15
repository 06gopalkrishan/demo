import React from "react";


const SuperMyfavProperty =() =>{
    return(
        <>
            <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
              <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                <div className="mr-0 mr-md-auto">
                  <h2 className="mb-0 text-heading fs-22 lh-15">My Favorites<span
                    className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">5</span>
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                </div>
                <div className="form-inline justify-content-md-end mx-n2">
                  <div className="p-2">
                    <div className="input-group input-group-lg bg-white border">
                      <div className="input-group-prepend">
                        <button className="btn pr-0 shadow-none" type="button"><i className="far fa-search"></i></button>
                      </div>
                      <input type="text" className="form-control bg-transparent border-0 shadow-none text-body"
                           placeholder="Search listing" name="search" />
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="input-group input-group-lg bg-white border">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-transparent letter-spacing-093 border-0 pr-0"><i
                            className="far fa-align-left mr-2"></i>Sort by:</span>
                      </div>
                      <select className="form-control bg-transparent pl-0 selectpicker d-flex align-items-center sortby"
                            name="sort-by"
                            data-style="bg-transparent px-1 py-0 lh-1 font-weight-600 text-body"
                            id="status">
                        <option>Alphabet</option>
                        <option>Price - Low to High</option>
                        <option>Price - High to Low</option>
                        <option>Date - Old to New</option>
                        <option>Date - New to Old</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xxl-3 mb-6">
                  <div className="card shadow-hover-1">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                      <img src="images/properties-grid-38.jpg"
                         alt="Home in Metric Way" />
                      <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                          <span className="badge badge-primary">for sale</span>
                        </div>
                        <div className="mt-auto hover-image">
                          <ul className="list-inline mb-0 d-flex align-items-end">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-3">
                      <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html"
                                                              className="text-dark hover-primary">Home in Metric Way</a>
                      </h2>
                      <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                      <ul className="list-inline d-flex mb-0 flex-wrap">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2 "
                            data-toggle="tooltip" title="3 Br">
                          <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-bedroom"></use>
                          </svg>
                          3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="3 Ba">
                          <svg className="icon icon-shower fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-shower"></use>
                          </svg>
                          3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center px-1 mr-2"
                            data-toggle="tooltip" title="2300 Sq.Ft">
                          <svg className="icon icon-square fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-square"></use>
                          </svg>
                          2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="1 Gr">
                          <svg className="icon icon-Garage fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-Garage"></use>
                          </svg>
                          1 Gr
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                      <div className="mr-auto">
                        <span className="text-heading lh-15 font-weight-bold fs-17">$.1250.000</span>
                      </div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Wish list"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"><i
                                    className="fas fa-heart"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Compare"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"><i
                                    className="fas fa-exchange-alt"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-3 mb-6">
                  <div className="card shadow-hover-1">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                      <img src="images/properties-grid-01.jpg"
                         alt="Affordable Urban House" />
                      <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                          <span className="badge badge-indigo">for rent</span>
                        </div>
                        <div className="mt-auto hover-image">
                          <ul className="list-inline mb-0 d-flex align-items-end">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-3">
                      <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html"
                                                              className="text-dark hover-primary">Affordable Urban House</a>
                      </h2>
                      <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                      <ul className="list-inline d-flex mb-0 flex-wrap">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2 "
                            data-toggle="tooltip" title="3 Br">
                          <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-bedroom"></use>
                          </svg>
                          3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="3 Ba">
                          <svg className="icon icon-shower fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-shower"></use>
                          </svg>
                          3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center px-1 mr-2"
                            data-toggle="tooltip" title="2300 Sq.Ft">
                          <svg className="icon icon-square fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-square"></use>
                          </svg>
                          2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="1 Gr">
                          <svg className="icon icon-Garage fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-Garage"></use>
                          </svg>
                          1 Gr
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                      <div className="mr-auto">
                        <span className="text-heading lh-15 font-weight-bold fs-17">$550</span>
                        <span className="text-gray-light">/month</span>
                      </div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Wish list"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"><i
                                    className="fas fa-heart"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Compare"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"><i
                                    className="fas fa-exchange-alt"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-3 mb-6">
                  <div className="card shadow-hover-1">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                      <img src="images/properties-grid-03.jpg"
                         alt="Villa on Hollywood Boulevard" />
                      <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                          <span className="badge badge-indigo">for rent</span>
                        </div>
                        <div className="mt-auto hover-image">
                          <ul className="list-inline mb-0 d-flex align-items-end">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-3">
                      <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html"
                                                              className="text-dark hover-primary">Villa on Hollywood Boulevard</a>
                      </h2>
                      <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                      <ul className="list-inline d-flex mb-0 flex-wrap">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2 "
                            data-toggle="tooltip" title="3 Br">
                          <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-bedroom"></use>
                          </svg>
                          3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="3 Ba">
                          <svg className="icon icon-shower fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-shower"></use>
                          </svg>
                          3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center px-1 mr-2"
                            data-toggle="tooltip" title="2300 Sq.Ft">
                          <svg className="icon icon-square fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-square"></use>
                          </svg>
                          2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="1 Gr">
                          <svg className="icon icon-Garage fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-Garage"></use>
                          </svg>
                          1 Gr
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                      <div className="mr-auto">
                        <span className="text-heading lh-15 font-weight-bold fs-17">$550</span>
                        <span className="text-gray-light">/month</span>
                      </div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Wish list"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"><i
                                    className="fas fa-heart"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Compare"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"><i
                                    className="fas fa-exchange-alt"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-3 mb-6">
                  <div className="card shadow-hover-1">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                      <img src="images/properties-grid-02.jpg"
                         alt="Villa on Hollywood Boulevard" />
                      <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                          <span className="badge badge-primary">for sale</span>
                        </div>
                        <div className="mt-auto hover-image">
                          <ul className="list-inline mb-0 d-flex align-items-end">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-3">
                      <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html"
                                                              className="text-dark hover-primary">Villa on Hollywood Boulevard</a>
                      </h2>
                      <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                      <ul className="list-inline d-flex mb-0 flex-wrap">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2 "
                            data-toggle="tooltip" title="3 Br">
                          <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-bedroom"></use>
                          </svg>
                          3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="3 Ba">
                          <svg className="icon icon-shower fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-shower"></use>
                          </svg>
                          3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center px-1 mr-2"
                            data-toggle="tooltip" title="2300 Sq.Ft">
                          <svg className="icon icon-square fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-square"></use>
                          </svg>
                          2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="1 Gr">
                          <svg className="icon icon-Garage fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-Garage"></use>
                          </svg>
                          1 Gr
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                      <div className="mr-auto">
                        <span className="text-heading lh-15 font-weight-bold fs-17">$.1250.000</span>
                      </div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Wish list"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"><i
                                    className="fas fa-heart"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Compare"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"><i
                                    className="fas fa-exchange-alt"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-3 mb-6">
                  <div className="card shadow-hover-1">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                      <img src="images/properties-grid-04.jpg"
                         alt="Home in Metric Way" />
                      <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                          <span className="badge badge-primary">for sale</span>
                        </div>
                        <div className="mt-auto hover-image">
                          <ul className="list-inline mb-0 d-flex align-items-end">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-3">
                      <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html"
                                                              className="text-dark hover-primary">Home in Metric Way</a>
                      </h2>
                      <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                      <ul className="list-inline d-flex mb-0 flex-wrap">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2 "
                            data-toggle="tooltip" title="3 Br">
                          <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-bedroom"></use>
                          </svg>
                          3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="3 Ba">
                          <svg className="icon icon-shower fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-shower"></use>
                          </svg>
                          3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center px-1 mr-2"
                            data-toggle="tooltip" title="2300 Sq.Ft">
                          <svg className="icon icon-square fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-square"></use>
                          </svg>
                          2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="1 Gr">
                          <svg className="icon icon-Garage fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-Garage"></use>
                          </svg>
                          1 Gr
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                      <div className="mr-auto">
                        <span className="text-heading lh-15 font-weight-bold fs-17">$.1250.000</span>
                      </div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Wish list"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"><i
                                    className="fas fa-heart"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Compare"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"><i
                                    className="fas fa-exchange-alt"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-3 mb-6">
                  <div className="card shadow-hover-1">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                      <img src="images/properties-grid-06.jpg"
                         alt="Home in Metric Way" />
                      <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                          <span className="badge badge-primary">for sale</span>
                        </div>
                        <div className="mt-auto hover-image">
                          <ul className="list-inline mb-0 d-flex align-items-end">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-3">
                      <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html"
                                                              className="text-dark hover-primary">Home in Metric Way</a>
                      </h2>
                      <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                      <ul className="list-inline d-flex mb-0 flex-wrap">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2 "
                            data-toggle="tooltip" title="3 Br">
                          <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-bedroom"></use>
                          </svg>
                          3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="3 Ba">
                          <svg className="icon icon-shower fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-shower"></use>
                          </svg>
                          3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center px-1 mr-2"
                            data-toggle="tooltip" title="2300 Sq.Ft">
                          <svg className="icon icon-square fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-square"></use>
                          </svg>
                          2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="1 Gr">
                          <svg className="icon icon-Garage fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-Garage"></use>
                          </svg>
                          1 Gr
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                      <div className="mr-auto">
                        <span className="text-heading lh-15 font-weight-bold fs-17">$.1250.000</span>
                      </div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Wish list"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"><i
                                    className="fas fa-heart"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Compare"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"><i
                                    className="fas fa-exchange-alt"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-3 mb-6">
                  <div className="card shadow-hover-1">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                      <img src="images/properties-grid-05.jpg"
                         alt="Home in Metric Way" />
                      <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                          <span className="badge badge-primary">for sale</span>
                        </div>
                        <div className="mt-auto hover-image">
                          <ul className="list-inline mb-0 d-flex align-items-end">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-3">
                      <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html"
                                                              className="text-dark hover-primary">Home in Metric Way</a>
                      </h2>
                      <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                      <ul className="list-inline d-flex mb-0 flex-wrap">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2 "
                            data-toggle="tooltip" title="3 Br">
                          <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-bedroom"></use>
                          </svg>
                          3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="3 Ba">
                          <svg className="icon icon-shower fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-shower"></use>
                          </svg>
                          3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center px-1 mr-2"
                            data-toggle="tooltip" title="2300 Sq.Ft">
                          <svg className="icon icon-square fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-square"></use>
                          </svg>
                          2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="1 Gr">
                          <svg className="icon icon-Garage fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-Garage"></use>
                          </svg>
                          1 Gr
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                      <div className="mr-auto">
                        <span className="text-heading lh-15 font-weight-bold fs-17">$.1250.000</span>
                      </div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Wish list"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"><i
                                    className="fas fa-heart"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Compare"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"><i
                                    className="fas fa-exchange-alt"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-3 mb-6">
                  <div className="card shadow-hover-1">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                      <img src="images/properties-grid-39.jpg"
                         alt="Affordable Urban House" />
                      <div className="card-img-overlay p-2 d-flex flex-column">
                        <div>
                          <span className="badge badge-indigo">for rent</span>
                        </div>
                        <div className="mt-auto hover-image">
                          <ul className="list-inline mb-0 d-flex align-items-end">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-3">
                      <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html"
                                                              className="text-dark hover-primary">Affordable Urban House</a>
                      </h2>
                      <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                      <ul className="list-inline d-flex mb-0 flex-wrap">
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2 "
                            data-toggle="tooltip" title="3 Br">
                          <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-bedroom"></use>
                          </svg>
                          3 Br
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="3 Ba">
                          <svg className="icon icon-shower fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-shower"></use>
                          </svg>
                          3 Ba
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center px-1 mr-2"
                            data-toggle="tooltip" title="2300 Sq.Ft">
                          <svg className="icon icon-square fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-square"></use>
                          </svg>
                          2300 Sq.Ft
                        </li>
                        <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                            data-toggle="tooltip" title="1 Gr">
                          <svg className="icon icon-Garage fs-18 text-primary mr-1">
                            <use xlinkHref="#icon-Garage"></use>
                          </svg>
                          1 Gr
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                      <div className="mr-auto">
                        <span className="text-heading lh-15 font-weight-bold fs-17">$550</span>
                        <span className="text-gray-light">/month</span>
                      </div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Wish list"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"><i
                                    className="fas fa-heart"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" data-toggle="tooltip" title="Compare"
                               className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"><i
                                    className="fas fa-exchange-alt"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
    )
}
export default SuperMyfavProperty;