import React from "react";



const SuperMyPackage =()=>{
    return(
        <>
            <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
              <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                <div className="mr-0 mr-md-auto">
                  <h2 className="mb-0 text-heading fs-22 lh-15">My save search<span
                    className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">5</span>
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                </div>
                <form className="form">
                  <div className="input-group input-group-lg bg-white border">
                    <div className="input-group-prepend">
                      <button className="btn pr-0 shadow-none" type="button"><i className="far fa-search"></i></button>
                    </div>
                    <input type="text" className="form-control bg-transparent border-0 shadow-none text-body"
                           placeholder="Search listing" name="search" />
                  </div>
                </form>
              </div>
              <div className="table-responsive">
                <table className="table table-hover border rounded-lg mb-6 bg-white">
                  <thead className="thead-sm thead-black">
                    <tr>
                      <th scope="col" className="border-top-0 px-6 pt-5 pb-4">Current Package</th>
                      <th scope="col" className="border-top-0 pt-5 pb-4">Properties Remanining</th>
                      <th scope="col" className="border-top-0 pt-5 pb-4">Featured Remaining</th>
                      <th scope="col" className="border-top-0 pt-5 pb-4">Renewal Remaining</th>
                      <th scope="col" className="border-top-0 pt-5 pb-4">Storage Space</th>
                      <th scope="col" className="border-top-0 pt-5 pb-4">Expiry Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="shadow-hover-xs-2 bg-hover-white">
                      <td className="align-middle p-6">
                        <a href="#"
                           className="text-dark font-weight-500 hover-primary pt-1">Free</a>
                      </td>
                      <td className="align-middle">0</td>
                      <td className="align-middle">3
                      </td>
                      <td className="align-middle">For Rent</td>
                      <td className="align-middle">
                        2 MB / 20 MB
                      </td>
                      <td className="align-middle">
                        30 December, 2019
                      </td>
                    </tr>
                    <tr className="shadow-hover-xs-2 bg-hover-white">
                      <td className="align-middle p-6">
                        <a href="#"
                           className="text-dark font-weight-500 hover-primary pt-1">Free</a>
                      </td>
                      <td className="align-middle">0</td>
                      <td className="align-middle">3
                      </td>
                      <td className="align-middle">For Rent</td>
                      <td className="align-middle">
                        2 MB / 20 MB
                      </td>
                      <td className="align-middle">
                        30 December, 2019
                      </td>
                    </tr>
                    <tr className="shadow-hover-xs-2 bg-hover-white">
                      <td className="align-middle p-6">
                        <a href="#"
                           className="text-dark font-weight-500 hover-primary pt-1">Free</a>
                      </td>
                      <td className="align-middle">0</td>
                      <td className="align-middle">3
                      </td>
                      <td className="align-middle">For Rent</td>
                      <td className="align-middle">
                        2 MB / 20 MB
                      </td>
                      <td className="align-middle">
                        30 December, 2019
                      </td>
                    </tr>
                    <tr className="shadow-hover-xs-2 bg-hover-white">
                      <td className="align-middle p-6">
                        <a href="#"
                           className="text-dark font-weight-500 hover-primary pt-1">Free</a>
                      </td>
                      <td className="align-middle">0</td>
                      <td className="align-middle">3
                      </td>
                      <td className="align-middle">For Rent</td>
                      <td className="align-middle">
                        2 MB / 20 MB
                      </td>
                      <td className="align-middle">
                        30 December, 2019
                      </td>
                    </tr>
                    <tr className="shadow-hover-xs-2 bg-hover-white">
                      <td className="align-middle p-6">
                        <a href="#"
                           className="text-dark font-weight-500 hover-primary pt-1">Free</a>
                      </td>
                      <td className="align-middle">0</td>
                      <td className="align-middle">3
                      </td>
                      <td className="align-middle">For Rent</td>
                      <td className="align-middle">
                        2 MB / 20 MB
                      </td>
                      <td className="align-middle">
                        30 December, 2019
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-right">
                <a href="#" className="btn btn-lg btn-primary">Change Package</a>
              </div>
            </div>
          </main>
        </>
    )
}
export default SuperMyPackage;