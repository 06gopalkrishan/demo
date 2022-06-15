import React from "react";

const SuperMyProfile =()=>{
    return(
        <>
            <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
              <div className="mb-6">
                <h2 className="mb-0 text-heading fs-22 lh-15">My Profile
                </h2>
                <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
              </div>
              <form>
                <div className="row mb-6">
                  <div className="col-lg-6">
                    <div className="card mb-6">
                      <div className="card-body px-6 pt-6 pb-5">
                        <div className="row">
                          <div className="col-sm-4 col-xl-12 col-xxl-7 mb-6">
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Photo</h3>
                            <p className="card-text">Upload your profile photo.</p>
                          </div>
                          <div className="col-sm-8 col-xl-12 col-xxl-5">
                            <img src="images/my-profile.png" alt="My Profile" className="w-100" />
                            <div className="custom-file mt-4 h-auto">
                              <input type="file" className="custom-file-input" hidden id="customFile" name="file" />
                              <label className="btn btn-secondary btn-lg btn-block" for="customFile">
                                <span className="d-inline-block mr-1"><i className="fal fa-cloud-upload"></i></span>Upload
                                profile image</label>
                            </div>
                            <p className="mb-0 mt-2">
                              *minimum 500px x 500px
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-6">
                      <div className="card-body px-6 pt-6 pb-5">
                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Contact information</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="form-row mx-n4">
                          <div className="form-group col-md-6 px-4">
                            <label for="firstName" className="text-heading">First name</label>
                            <input type="text" className="form-control form-control-lg border-0" id="firstName"
                                       name="firsName" />
                          </div>
                          <div className="form-group col-md-6 px-4">
                            <label for="lastName" className="text-heading">Last name</label>
                            <input type="text" className="form-control form-control-lg border-0" id="lastName"
                                       name="lastname" />
                          </div>
                        </div>
                        <div className="form-row mx-n4">
                          <div className="form-group col-md-6 px-4">
                            <label for="phone" className="text-heading">Phone</label>
                            <input type="text" className="form-control form-control-lg border-0" id="phone"
                                       name="phone" />
                          </div>
                          <div className="form-group col-md-6 px-4">
                            <label for="mobile" className="text-heading">Mobile</label>
                            <input type="text" className="form-control form-control-lg border-0" id="mobile"
                                       name="mobile" />
                          </div>
                        </div>
                        <div className="form-row mx-n4">
                          <div className="form-group col-md-6 px-4 mb-md-0">
                            <label for="email" className="text-heading">Email</label>
                            <input type="email" className="form-control form-control-lg border-0" id="email"
                                       name="email" />
                          </div>
                          <div className="form-group col-md-6 px-4 mb-md-0">
                            <label for="skype" className="text-heading">Skype</label>
                            <input type="text" className="form-control form-control-lg border-0" id="skype"
                                       name="skype" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-6 mb-lg-0">
                      <div className="card-body px-6 pt-6 pb-5">
                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">User detail</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="form-group mb-0">
                          <label for="title" className="text-heading">Title / Posittion</label>
                          <input type="text" className="form-control form-control-lg border-0" id="title" name="title" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card mb-6">
                      <div className="card-body px-6 pt-6 pb-5">
                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">User detail</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="form-group">
                          <label for="facebook" className="text-heading">Facebook Url</label>
                          <input type="url" className="form-control form-control-lg border-0" id="facebook"
                                   name="facebook" />
                        </div>
                        <div className="form-group">
                          <label for="pinterest" className="text-heading">Pinterest Url</label>
                          <input type="url" className="form-control form-control-lg border-0" id="pinterest"
                                   name="pinterest" />
                        </div>
                        <div className="form-group">
                          <label for="instagram" className="text-heading">Instagram Url</label>
                          <input type="url" className="form-control form-control-lg border-0" id="instagram"
                                   name="instagram" />
                        </div>
                        <div className="form-group">
                          <label for="twitter" className="text-heading">Twitter Url</label>
                          <input type="url" className="form-control form-control-lg border-0" id="twitter" name="twitter" />
                        </div>
                        <div className="form-group">
                          <label for="linkedin" className="text-heading">Linkedin Url</label>
                          <input type="url" className="form-control form-control-lg border-0" id="linkedin"
                                   name="linkedin" />
                        </div>
                        <div className="form-group mb-7">
                          <label for="website" className="text-heading">Website Url <span className="text-muted">(without http)</span>
                          </label>
                          <input type="url" className="form-control form-control-lg border-0" id="website" name="website" />
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body px-6 pt-6 pb-5">
                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Change password</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="form-group">
                          <label for="oldPassword" className="text-heading">Old Password</label>
                          <input type="password" className="form-control form-control-lg border-0" id="oldPassword"
                                   name="oldPassword" />
                        </div>
                        <div className="form-row mx-n4">
                          <div className="form-group col-md-6 col-lg-12 col-xxl-6 px-4">
                            <label for="newPassword" className="text-heading">New Password</label>
                            <input type="password" className="form-control form-control-lg border-0" id="newPassword"
                                       name="newPassword" />
                          </div>
                          <div className="form-group col-md-6 col-lg-12 col-xxl-6 px-4">
                            <label for="confirmNewPassword" className="text-heading">Confirm New Password</label>
                            <input type="password" className="form-control form-control-lg border-0"
                                       id="confirmNewPassword" name="confirmNewPassword" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end flex-wrap">
                  <button className="btn btn-lg bg-hover-white border rounded-lg mb-3">Delete Profile</button>
                  <button className="btn btn-lg btn-primary ml-4 mb-3">Update Profile</button>
                </div>
              </form>
            </div>
          </main>
        </>
    )
}
export default SuperMyProfile;