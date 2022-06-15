import React from "react";


const SuperPreInvoice =()=>{
    return(
        <>
             <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 add-new-invoice">
              <div className="row">
                <div className="col-xl-9 mb-6 mb-xl-0">
                  <div className="card card-body main-invoice-info p-6">
                    <div className="row mb-7">
                      <div className="col-sm-6 col-12 mr-auto mb-6">
                        <div className="d-flex align-items-center">
                          <img className="company-logo" src="images/logo.png"
                                 alt="company" />
                          <h3 className="mb-0 ml-2 fs-18">G5Themes</h3>
                        </div>
                      </div>
                      <div className="col-sm-6 text-sm-right mb-6">
                        <p className="fs-18 mb-0"><span className="inv-title">Invoice : </span> <span
                                className="text-primary">#0001</span></p>
                      </div>
                      <div className="col-sm-6 align-self-center mt-3">
                        <p className="mb-0">XYZ Delta Street</p>
                        <p className="mb-0">info@company.com</p>
                        <p className="mb-0">(120) 456 789</p>
                      </div>
                      <div className="col-sm-6 align-self-center mt-3 text-sm-right">
                        <p className="mb-0"><span className="text-heading font-weight-500">Invoice Date : </span>
                          <span className="inv-date">20 Aug 2020</span></p>
                        <p className="mb-0"><span className="text-heading font-weight-500">Due Date : </span> <span
                                className="inv-date">26 Aug 2020</span></p>
                      </div>
                    </div>
                    <div className="border-top pt-7 mb-7">
                      <div className="row">
                        <div className="col-xl-8 col-md-6 col-sm-4 align-self-center">
                          <h6 className="card-title mb-5 text-heading fs-22 lh-15">Invoice To</h6>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 text-sm-right">
                          <h6 className="card-title mb-5 text-heading fs-22 lh-15">Payment Info:</h6>
                        </div>
                        <div className="col-xl-8 col-md-6 col-sm-4 align-self-center mb-6 mb-md-0">
                          <p className="mb-0">Jesse Cory</p>
                          <p className="mb-0">405 Mulberry Rd. Mc Grady, NC, 28649</p>
                          <p className="mb-0">redq@company.com</p>
                          <p className="mb-0">(128) 666 070</p>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 text-sm-right">
                          <p className="mb-0"><span className="text-heading font-weight-500">Bank Name:</span>
                            <span>Bank of America</span></p>
                          <p className="mb-0"><span className="text-heading font-weight-500">Account Number: </span>
                            <span>1234567890</span></p>
                          <p className="mb-0"><span className="text-heading font-weight-500">SWIFT code:</span>
                            <span>VS70134</span>
                          </p>
                          <p className="mb-0"><span className="text-heading font-weight-500">Country: </span>
                            <span>United States</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="">
                          <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Items Name</th>
                            <th className="text-right" scope="col">Qty</th>
                            <th className="text-right" scope="col">Price</th>
                            <th className="text-right" scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Calendar App Customization</td>
                            <td className="text-right">1</td>
                            <td className="text-right">$120</td>
                            <td className="text-right">$120</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Chat App Customization</td>
                            <td className="text-right">1</td>
                            <td className="text-right">$230</td>
                            <td className="text-right">$230</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Laravel Integration</td>
                            <td className="text-right">1</td>
                            <td className="text-right">$405</td>
                            <td className="text-right">$405</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Backend UI Design</td>
                            <td className="text-right">1</td>
                            <td className="text-right">$2500</td>
                            <td className="text-right">$2500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row mt-4">
                      <div className="col-sm-5 col-12 order-sm-0 order-1">
                      </div>
                      <div className="col-sm-7 col-12 order-sm-1 order-0">
                        <div className="text-sm-right">
                          <div className="row">
                            <div className="col-sm-8 col-7">
                              <p className="mb-1">Sub Total: </p>
                            </div>
                            <div className="col-sm-4 col-5">
                              <p className="mb-1">$3155</p>
                            </div>
                            <div className="col-sm-8 col-7">
                              <p className="mb-1">Tax Amount: </p>
                            </div>
                            <div className="col-sm-4 col-5">
                              <p className="mb-1">$700</p>
                            </div>
                            <div className="col-sm-8 col-7">
                              <p className="discount-rate">Discount : <span
                                            className="discount-percentage">5%</span></p>
                            </div>
                            <div className="col-sm-4 col-5">
                              <p className="mb-1">$10</p>
                            </div>
                            <div className="col-sm-8 col-7 grand-total-title mt-4">
                              <h4 className="text-heading fs-22 lh-15">Grand Total : </h4>
                            </div>
                            <div className="col-sm-4 col-5 grand-total-amount mt-4">
                              <h4 className="text-heading fs-22 lh-15">$3845</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-top pt-6 mt-7">
                      <div className="row">
                        <div className="col-sm-12 col-12 order-sm-0 order-1">
                          <p className="mb-0">Note: Thank you for doing Business with us.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 invoice-preview-button">
                  <div className="card card-body p-6">
                    <div className="row">
                      <div className="col-xl-12 col-md-3 col-sm-6 mb-3">
                        <a href="javascript:void(0);" className="btn btn-primary btn-send btn-block">Send Invoice</a>
                      </div>
                      <div className="col-xl-12 col-md-3 col-sm-6 mb-3">
                        <a href="javascript:void(0);"
                           className="btn btn-secondary btn-print invoice-action-print btn-block">Print</a>
                      </div>
                      <div className="col-xl-12 col-md-3 col-sm-6 mb-3">
                        <a href="javascript:void(0);" className="btn btn-success btn-download btn-block">Download</a>
                      </div>
                      <div className="col-xl-12 col-md-3 col-sm-6 mb-3">
                        <a href="dashboard-edit-invoice.html" className="btn btn-dark btn-edit btn-block">Edit</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
    )
}
export default SuperPreInvoice;