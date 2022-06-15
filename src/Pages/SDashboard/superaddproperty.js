import React from "react";



const SuperAddProperty = () => {
    return(
        <>
           <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 my-profile">
              <div className="mb-6">
                <h2 className="mb-0 text-heading fs-22 lh-15">Add new property
                </h2>
                <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
              </div>
              <div className="collapse-tabs new-property-step">
                <ul className="nav nav-pills border py-2 px-3 mb-6 d-none d-md-flex mb-6"
            role="tablist">
                  <li className="nav-item col">
                    <a className="nav-link active bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block"
                   id="description-tab" data-bs-toggle="pill" data-number="1."
                   href="#description"
                   role="tab"
                   aria-controls="description" aria-selected="true"><span className="number">1.</span> Description</a>
                  </li>
                  <li className="nav-item col">
                    <a className="nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block"
                   id="media-tab"
                   data-bs-toggle="pill" data-number="2."
                   href="#media"
                   role="tab"
                   aria-controls="media" aria-selected="false"><span className="number">2.</span> Media</a>
                  </li>
                  <li className="nav-item col">
                    <a className="nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block"
                   id="location-tab"
                   data-bs-toggle="pill" data-number="3."
                   href="#location"
                   role="tab"
                   aria-controls="location" aria-selected="false"><span className="number">3.</span> Location</a>
                  </li>
                  <li className="nav-item col">
                    <a className="nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block"
                   id="detail-tab"
                   data-bs-toggle="pill" data-number="4."
                   href="#detail"
                   role="tab"
                   aria-controls="detail" aria-selected="false"><span className="number">4.</span> Detail</a>
                  </li>
                  <li className="nav-item col">
                    <a className="nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block"
                   id="amenities-tab"
                   data-bs-toggle="pill" data-number="5."
                   href="#amenities"
                   role="tab"
                   aria-controls="amenities" aria-selected="false"><span className="number">5.</span> Amenities</a>
                  </li>
                </ul>
                <div className="tab-content shadow-none p-0">
                  <form>
                    <div id="collapse-tabs-accordion">
                      <div className="tab-pane tab-pane-parent fade show active px-0" id="description"
                         role="tabpanel"
                         aria-labelledby="description-tab">
                        <div className="card bg-transparent border-0">
                          <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                                 id="heading-description">
                            <h5 className="mb-0">
                              <button className="btn btn-lg collapse-parent btn-block border shadow-none"
                                            data-bs-toggle="collapse" data-number="1."
                                            data-bs-target="#description-collapse"
                                            aria-expanded="true"
                                            aria-controls="description-collapse">
                                <span className="number">1.</span> Description
                              </button>
                            </h5>
                          </div>
                          <div id="description-collapse" className="collapse show collapsible"
                                 aria-labelledby="heading-description"
                                 data-parent="#collapse-tabs-accordion">
                            <div className="card-body py-4 py-md-0 px-0">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="card mb-6">
                                    <div className="card-body p-6">
                                      <h3 className="card-title mb-0 text-heading fs-22 lh-15">Property
                                        Description</h3>
                                      <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit</p>
                                      <div className="form-group">
                                        <label for="title" className="text-heading">Title <span
                                                                className="text-muted">(mandatory)</span></label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="title" name="title" />
                                      </div>
                                      <div className="form-group mb-0">
                                        <label for="description-01"
                                                               className="text-heading">Description</label>
                                        <textarea className="form-control border-0" rows="5"
                                                                  name="description"
                                                                  id="description-01"></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card mb-6">
                                    <div className="card-body p-6">
                                      <h3 className="card-title mb-0 text-heading fs-22 lh-15">Select
                                        Category</h3>
                                      <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit</p>
                                      <div className="form-row mx-n2">
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2 mb-4 mb-md-0">
                                          <div className="form-group mb-0">
                                            <label for="category"
                                                                       className="text-heading">Category</label>
                                            <select className="form-control border-0 shadow-none form-control-lg selectpicker"
                                                                        title="Select" data-style="btn-lg py-2 h-52"
                                                                        id="category" name="category">
                                              <option>For Rent</option>
                                              <option>For Sale</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2 mb-4 mb-md-0">
                                          <div className="form-group mb-0">
                                            <label for="list-in" className="text-heading">Listed
                                              in</label>
                                            <select className="form-control border-0 shadow-none form-control-lg selectpicker"
                                                                        title="Select" data-style="btn-lg py-2 h-52"
                                                                        id="list-in" name="list-in">
                                              <option>For Rent</option>
                                              <option>For Sale</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="card mb-6">
                                    <div className="card-body p-6">
                                      <h3 className="card-title mb-0 text-heading fs-22 lh-15">Property
                                        Price</h3>
                                      <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit</p>
                                      <div className="form-row mx-n2">
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group">
                                            <label for="price" className="text-heading">Price in $ <span
                                                                        className="text-muted">(only numbers)</span></label>
                                            <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="price" name="price" />
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group">
                                            <label for="tax"
                                                                       className="text-heading">Yearly Tax Rate</label>
                                            <input type="text" name="tax"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="tax" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-row mx-n2">
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group">
                                            <label for="fee" className="text-heading">Homeowners
                                              Association Fee <span
                                                                            className="text-muted">(monthly)</span></label>
                                            <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="fee" name="fee" />
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group">
                                            <label for="after-price"
                                                                       className="text-heading">After Price Label <span
                                                                        className="text-muted">( ex: /month)</span>
                                            </label>
                                            <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="after-price" name="after-price" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-row mx-n2">
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group mb-0">
                                            <label for="before-price" className="text-heading">Before
                                              Price label <span
                                                                            className="text-muted">(ex: "from")</span></label>
                                            <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="before-price" name="before-price" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card mb-6">
                                    <div className="card-body p-6">
                                      <h3 className="card-title mb-0 text-heading fs-22 lh-15">Select Poperty
                                        Status</h3>
                                      <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit</p>
                                      <div className="form-group mb-0">
                                        <label for="status"
                                                               className="text-heading">Property Status</label>
                                        <select className="form-control border-0 shadow-none form-control-lg selectpicker"
                                                                title="Select" data-style="btn-lg py-2 h-52"
                                                                id="status" name="status">
                                          <option>For Rent</option>
                                          <option>For Sale</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <button className="btn btn-lg btn-primary next-button">Next step
                                  <span className="d-inline-block ml-2 fs-16"><i
                                                    className="fal fa-long-arrow-right"></i></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-pane-parent fade px-0" id="media"
                         role="tabpanel"
                         aria-labelledby="media-tab">
                        <div className="card bg-transparent border-0">
                          <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                                 id="heading-media">
                            <h5 className="mb-0">
                              <button className="btn btn-lg collapse-parent btn-block border shadow-none"
                                            data-bs-toggle="collapse" data-number="2."
                                            data-bs-target="#media-collapse"
                                            aria-expanded="true"
                                            aria-controls="media-collapse">
                                <span className="number">2.</span> Media
                              </button>
                            </h5>
                          </div>
                          <div id="media-collapse" className="collapse collapsible"
                                 aria-labelledby="heading-media"
                                 data-parent="#collapse-tabs-accordion">
                            <div className="card-body py-4 py-md-0 px-0">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="card mb-6">
                                    <div className="card-body p-6">
                                      <h3 className="card-title mb-0 text-heading fs-22 lh-15">Upload photos
                                        of your property</h3>
                                      <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit</p>
                                      <div className="dropzone upload-file text-center py-5"
                                                         data-uploader="true"
                                                         id="myDropzone"
                                                         data-uploader-url="./dashboard-add-new-property.html">
                                        <div className="dz-default dz-message">
                                          <span className="upload-icon lh-1 d-inline-block mb-4"><i
                                                                    className="fal fa-cloud-upload-alt"></i></span>
                                          <p className="text-heading fs-22 lh-15 mb-4">Drag and drop image
                                            or</p>
                                          <button className="btn btn-indigo px-7 mb-2" type="button">
                                            Browse file
                                          </button>
                                          <input type="file" hidden />
                                          <p>Photos must be JPEG or PNG format and least
                                            1024x768</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="card mb-6">
                                    <div className="card-body p-6">
                                      <h3 className="card-title mb-0 text-heading fs-22 lh-15">Video
                                        Option</h3>
                                      <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit</p>
                                      <div className="form-row mx-n2">
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group mb-md-0">
                                            <label for="video-from" className="text-heading">Video
                                              from </label>
                                            <select className="form-control border-0 shadow-none form-control-lg selectpicker"
                                                                        data-style="btn-lg py-2 h-52"
                                                                        id="video-from" name="video-from">
                                              <option>Vimeo</option>
                                              <option>Youtube</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group mb-md-0">
                                            <label for="embed-video-id"
                                                                       className="text-heading">Embed Video id</label>
                                            <input type="text" name="embed-video-id"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="embed-video-id" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card mb-6">
                                    <div className="card-body p-6">
                                      <h3 className="card-title mb-0 text-heading fs-22 lh-15">Virtual
                                        Tour</h3>
                                      <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit</p>
                                      <div className="form-group mb-0">
                                        <label for="virtual-tour"
                                                               className="text-heading">Virtual Tour</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="virtual-tour" name="virtual-tour" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex flex-wrap">
                                <a href="#"
                                           className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button">
                                  <span className="d-inline-block text-primary mr-2 fs-16"><i
                                                    className="fal fa-long-arrow-left"></i></span>Prev step
                                </a>
                                <button className="btn btn-lg btn-primary next-button mb-3">Next step
                                  <span className="d-inline-block ml-2 fs-16"><i
                                                    className="fal fa-long-arrow-right"></i></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-pane-parent fade px-0" id="location" role="tabpanel"
                         aria-labelledby="location-tab">
                        <div className="card bg-transparent border-0">
                          <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                                 id="heading-location">
                            <h5 className="mb-0">
                              <button className="btn btn-block collapse-parent collapsed border shadow-none"
                                            data-bs-toggle="collapse" data-number="3."
                                            data-bs-target="#location-collapse"
                                            aria-expanded="true"
                                            aria-controls="location-collapse">
                                <span className="number">3.</span> Location
                              </button>
                            </h5>
                          </div>
                          <div id="location-collapse" className="collapse collapsible"
                                 aria-labelledby="heading-location"
                                 data-parent="#collapse-tabs-accordion">
                            <div className="card-body py-4 py-md-0 px-0">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="card mb-6">
                                    <div className="card-body p-6">
                                      <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing
                                        Location</h3>
                                      <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit</p>
                                      <div className="form-group">
                                        <label for="address"
                                                               className="text-heading">Address</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="address" name="address" />
                                      </div>
                                      <div className="form-row mx-n2">
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group">
                                            <label for="state" className="text-heading">Country /
                                              State</label>
                                            <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="state" name="state" />
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group">
                                            <label for="city"
                                                                       className="text-heading">City</label>
                                            <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="city" name="city" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-row mx-n2">
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group">
                                            <label for="neighborhood" className="text-heading">Neighborhood</label>
                                            <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="neighborhood" name="neighborhood" />
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group">
                                            <label for="zip"
                                                                       className="text-heading">Zip</label>
                                            <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="zip" name="zip" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-group mb-md-0">
                                        <label for="country" className="text-heading">Country </label>
                                        <select className="form-control border-0 shadow-none form-control-lg selectpicker"
                                                                title="Select" data-style="btn-lg py-2 h-52"
                                                                id="country" name="country">
                                          <option>Vimeo</option>
                                          <option>Youtube</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="card mb-6">
                                    <div className="card-body p-6">
                                      <h3 className="card-title mb-6 text-heading fs-22 lh-15">Place the
                                        listing pin on the map</h3>
										{/* <!---text missing-----> */}
                                      
                                      <div className="form-row mx-n2">
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group mb-md-0">
                                            <label for="latitude"
                                                                       className="text-heading">Latitude </label>
                                            <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="latitude" name="latitude" />
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                          <div className="form-group mb-md-0">
                                            <label for="longitude"
                                                                       className="text-heading">Longitude</label>
                                            <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="longitude" name="longitude" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex flex-wrap">
                                <a href="#"
                                           className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button">
                                  <span className="d-inline-block text-primary mr-2 fs-16"><i
                                                    className="fal fa-long-arrow-left"></i></span>Prev step
                                </a>
                                <button className="btn btn-lg btn-primary next-button mb-3">Next step
                                  <span className="d-inline-block ml-2 fs-16"><i
                                                    className="fal fa-long-arrow-right"></i></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-pane-parent fade px-0" id="detail" role="tabpanel"
                         aria-labelledby="detail-tab">
                        <div className="card bg-transparent border-0">
                          <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                                 id="heading-detail">
                            <h5 className="mb-0">
                              <button className="btn btn-block collapse-parent collapsed border shadow-none"
                                            data-bs-toggle="collapse" data-number="4."
                                            data-bs-target="#detail-collapse"
                                            aria-expanded="true"
                                            aria-controls="detail-collapse">
                                <span className="number">4.</span> Detail
                              </button>
                            </h5>
                          </div>
                          <div id="detail-collapse" className="collapse collapsible"
                                 aria-labelledby="heading-detail"
                                 data-parent="#collapse-tabs-accordion">
                            <div className="card-body py-4 py-md-0 px-0">
                              <div className="card mb-6">
                                <div className="card-body p-6">
                                  <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing Detail</h3>
                                  <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit</p>
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="size-in-ft" className="text-heading">Size in ft <span
                                                                className="text-muted">(only numbers)</span></label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="size-in-ft" name="size-in-ft" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="lot-size-in-ft"
                                                               className="text-heading">Lot size in ft <span
                                                                className="text-muted">(only numbers)</span></label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="lot-size-in-ft" name="lot-size-in-ft" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="room"
                                                               className="text-heading">Rooms</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="room" name="rooms" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="bedrooms" className="text-heading">Bedrooms</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="bedrooms" name="bedrooms" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="bathrooms"
                                                               className="text-heading">Bathrooms</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="bathrooms" name="bathrooms" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="customID"
                                                               className="text-heading">Custom ID <span className="text-muted">(text)</span></label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="customID" name="customID" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="garages" className="text-heading">Garages</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="garages" name="garages" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="garage-size"
                                                               className="text-heading">Garage size</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="garage-size" name="garage-size" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="year-built"
                                                               className="text-heading">Year built <span className="text-muted">(numeric)</span></label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="year-built" name="year-built" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="available-from" className="text-heading">Available from
                                          <span className="text-muted">(date)</span></label>
                                        <input type="date"
                                                               className="form-control form-control-lg border-0"
                                                               id="available-from" name="available-from" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="basement"
                                                               className="text-heading">Basement</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="basement" name="basement" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="extra-details"
                                                               className="text-heading">Extra details</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="extra-details" name="extra-details" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="roofing" className="text-heading">Roofing</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="roofing" name="roofing" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="exterior-material"
                                                               className="text-heading">Exterior Material</label>
                                        <input type="text"
                                                               className="form-control form-control-lg border-0"
                                                               id="exterior-material" name="exterior-material" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <label for="structure-type"
                                                               className="text-heading">Structure type</label>
                                        <select className="form-control border-0 shadow-none form-control-lg selectpicker"
                                                                title="Select" data-style="btn-lg py-2 h-52"
                                                                id="structure-type" name="structure-type">
                                          <option>For Rent</option>
                                          <option>For Sale</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-8">
                                      <div className="form-group">
                                        <label for="floors-no"
                                                               className="text-heading">Floors no</label>
                                        <select className="form-control border-0 shadow-none form-control-lg selectpicker"
                                                                title="Select" data-style="btn-lg py-2 h-52"
                                                                id="floors-no" name="floors-no">
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-8">
                                      <div className="form-group mb-0">
                                        <label for="owner"
                                                               className="text-heading">Owner/ Agent nots (not visible on
                                          front end)</label>
                                        <textarea className="form-control border-0" id="owner"
                                                                  name="owner"></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card mb-6">
                                <div className="card-body p-6">
                                  <h3 className="card-title mb-0 text-heading fs-22 lh-15">Select Energy
                                    className</h3>
                                  <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit</p>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="form-group mb-lg-0">
                                        <label for="energy-className"
                                                               className="text-heading">Energy className</label>
                                        <select className="form-control border-0 shadow-none form-control-lg selectpicker"
                                                                title="Select" data-style="btn-lg py-2 h-52"
                                                                id="energy-className" name="energy-className">
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="form-group mb-lg-0">
                                        <label for="energy-index"
                                                               className="text-heading">Energy index in kWh/m2a</label>
                                        <select className="form-control border-0 shadow-none form-control-lg selectpicker"
                                                                title="Select" data-style="btn-lg py-2 h-52"
                                                                id="energy-index" name="energy-index">
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex flex-wrap">
                                <a href="#"
                                           className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button">
                                  <span className="d-inline-block text-primary mr-2 fs-16"><i
                                                    className="fal fa-long-arrow-left"></i></span>Prev step
                                </a>
                                <button className="btn btn-lg btn-primary next-button mb-3">Next step
                                  <span className="d-inline-block ml-2 fs-16"><i
                                                    className="fal fa-long-arrow-right"></i></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-pane-parent fade px-0" id="amenities" role="tabpanel"
                         aria-labelledby="amenities-tab">
                        <div className="card bg-transparent border-0">
                          <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                                 id="heading-amenities">
                            <h5 className="mb-0">
                              <button className="btn btn-block collapse-parent collapsed border shadow-none"
                                            data-bs-toggle="collapse" data-number="5."
                                            data-bs-target="#amenities-collapse"
                                            aria-expanded="true"
                                            aria-controls="amenities-collapse">
                                <span className="number">5.</span> Amenities
                              </button>
                            </h5>
                          </div>
                          <div id="amenities-collapse" className="collapse collapsible"
                                 aria-labelledby="heading-amenities"
                                 data-parent="#collapse-tabs-accordion">
                            <div className="card-body py-4 py-md-0 px-0">
                              <div className="card mb-6">
                                <div className="card-body p-6">
                                  <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing Detail</h3>
                                  <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit</p>
                                  <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                      <ul className="list-group list-group-no-border">
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="attic" />
                                            <label className="custom-control-label"
                                                                       for="attic">Attic</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="basketball-court" />
                                            <label className="custom-control-label"
                                                                       for="basketball-court">Basketball court</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="doorman" />
                                            <label className="custom-control-label" for="doorman">Doorman</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="front-yard" />
                                            <label className="custom-control-label" for="front-yard">Front
                                              yard</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="lake-view" />
                                            <label className="custom-control-label" for="lake-view">Lake
                                              view</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="ocean-view" />
                                            <label className="custom-control-label" for="ocean-view">Ocean
                                              view</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="private-space" />
                                            <label className="custom-control-label" for="private-space">Private
                                              space</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="sprinklers" />
                                            <label className="custom-control-label" for="sprinklers">Sprinklers</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="wine-cellar" />
                                            <label className="custom-control-label" for="wine-cellar">Wine
                                              cellar</label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                      <ul className="list-group list-group-no-border">
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="attic-01" />
                                            <label className="custom-control-label"
                                                                       for="attic-01">Attic</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="basketball-court-01" />
                                            <label className="custom-control-label"
                                                                       for="basketball-court-01">Basketball
                                              court</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="doorman-01" />
                                            <label className="custom-control-label" for="doorman-01">Doorman</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="front-yard-01" />
                                            <label className="custom-control-label" for="front-yard-01">Front
                                              yard</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="lake-view-01" />
                                            <label className="custom-control-label" for="lake-view-01">Lake
                                              view</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="ocean-view-01" />
                                            <label className="custom-control-label" for="ocean-view-01">Ocean
                                              view</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="private-space-01" />
                                            <label className="custom-control-label"
                                                                       for="private-space-01">Private space</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="sprinklers-01" />
                                            <label className="custom-control-label" for="sprinklers-01">Sprinklers</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="wine-cellar-01" />
                                            <label className="custom-control-label"
                                                                       for="wine-cellar-01">Wine cellar</label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                      <ul className="list-group list-group-no-border">
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="attic-02" />
                                            <label className="custom-control-label"
                                                                       for="attic-02">Attic</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="basketball-court-02" />
                                            <label className="custom-control-label"
                                                                       for="basketball-court-02">Basketball
                                              court</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="doorman-02" />
                                            <label className="custom-control-label" for="doorman-02">Doorman</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="front-yard-02" />
                                            <label className="custom-control-label" for="front-yard-02">Front
                                              yard</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="lake-view-02" />
                                            <label className="custom-control-label" for="lake-view-02">Lake
                                              view</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="ocean-view-02" />
                                            <label className="custom-control-label" for="ocean-view-02">Ocean
                                              view</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="private-space-02" />
                                            <label className="custom-control-label"
                                                                       for="private-space-02">Private space</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="sprinklers-02" />
                                            <label className="custom-control-label" for="sprinklers-02">Sprinklers</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="wine-cellar-02" />
                                            <label className="custom-control-label"
                                                                       for="wine-cellar-02">Wine cellar</label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                      <ul className="list-group list-group-no-border">
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="attic-03" />
                                            <label className="custom-control-label"
                                                                       for="attic-03">Attic</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="basketball-court-03" />
                                            <label className="custom-control-label"
                                                                       for="basketball-court-03">Basketball
                                              court</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="doorman-03" />
                                            <label className="custom-control-label" for="doorman-03">Doorman</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="front-yard-03" />
                                            <label className="custom-control-label" for="front-yard-03">Front
                                              yard</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="lake-view-03" />
                                            <label className="custom-control-label" for="lake-view-03">Lake
                                              view</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="ocean-view-03" />
                                            <label className="custom-control-label" for="ocean-view-03">Ocean
                                              view</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="private-space-03" />
                                            <label className="custom-control-label"
                                                                       for="private-space-03">Private space</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="sprinklers-03" />
                                            <label className="custom-control-label" for="sprinklers-03">Sprinklers</label>
                                          </div>
                                        </li>
                                        <li className="list-group-item px-0 pt-0 pb-2">
                                          <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                                       name="features[]"
                                                                       id="wine-cellar-03" />
                                            <label className="custom-control-label"
                                                                       for="wine-cellar-03">Wine cellar</label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex flex-wrap">
                                <a href="#"
                                           className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button">
                                  <span className="d-inline-block text-primary mr-2 fs-16"><i
                                                    className="fal fa-long-arrow-left"></i></span>Prev step
                                </a>
                                <button className="btn btn-lg btn-primary mb-3" type="submit">Submit property
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </>
    )
}
export default SuperAddProperty;