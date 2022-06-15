import React from "react";


const SuperAddNewInvoice =()=>{
    return(
        <>
            <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 add-new-invoice">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <form metho="get">
                    <div className="row">
                      <div className="col-xl-9 mb-6 mb-xl-0">
                        <div className="card">
                          <div className="card-body p-6">
                            <div className="row mb-6">
                              <div className="invoice-logo col-md-6 mb-3 mb-md-0">
                                <h4 className="card-title mb-5 text-heading fs-22 lh-15">Invoice Logo</h4>
                                <div className="dropzone upload-file text-center py-5"
                                             data-uploader="true"
                                             id="myDropzone"
                                             data-uploader-url="./dashboard-add-new-invoice.html">
                                  <div className="dz-default dz-message">
                                    <span className="upload-icon lh-1 d-inline-block mb-4"><i
                                                                    className="fal fa-cloud-upload-alt"></i></span>
                                    <p className="text-heading fs-22 lh-15 mb-4">Drag and drop image
                                      or</p>
                                    <button className="btn btn-indigo px-7 mb-2" type="button">
                                      Browse file
                                    </button>
                                    <input type="file" hidden name="file" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <h4 className="card-title mb-5 text-heading fs-22 lh-15">Invoice Label</h4>
                                <input type="text" className="form-control border-0 shadow-none form-control-lg"
                                               placeholder="Invoice Label" name="invoice-label"
                                               value="Invoice Label" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6 invoice-address-company">
                                <h4 className="card-title mb-5 text-heading fs-22 lh-15">From</h4>
                                <div className="invoice-address-company-fields">
                                  <div className="form-group">
                                    <label for="company-name" className="text-heading">Name</label>
                                    <input type="text"
                                                       className="form-control border-0 shadow-none form-control-lg"
                                                       id="company-name" placeholder="Business Name" name="name" />
                                  </div>
                                  <div className="form-group">
                                    <label for="company-email"
                                                       className="text-heading">Email</label>
                                    <input type="text"
                                                       className="form-control border-0 shadow-none form-control-lg"
                                                       id="company-email" placeholder="name@company.com" name="email" />
                                  </div>
                                  <div className="form-group">
                                    <label for="company-address"
                                                       className="text-heading">Address</label>
                                    <input type="text"
                                                       className="form-control border-0 shadow-none form-control-lg"
                                                       id="company-address" placeholder="XYZ Street" name="address" />
                                  </div>
                                  <div className="form-group">
                                    <label for="company-phone"
                                                       className="text-heading">Phone</label>
                                    <input type="text"
                                                       className="form-control border-0 shadow-none form-control-lg"
                                                       id="company-phone" placeholder="(123) 456 789" name="phone" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 invoice-address-client">
                                <h4 className="card-title mb-5 text-heading fs-22 lh-15">Bill To</h4>
                                <div className="invoice-address-client-fields">
                                  <div className="form-group">
                                    <label for="client-name" className="text-heading">Name</label>
                                    <input type="text"
                                                       className="form-control border-0 shadow-none form-control-lg"
                                                       id="client-name" name="client-name"
                                                       placeholder="Client Name" />
                                  </div>
                                  <div className="form-group">
                                    <label for="client-email" className="text-heading">Email</label>
                                    <input type="text"
                                                       className="form-control border-0 shadow-none form-control-lg"
                                                       id="client-email" placeholder="name@company.com" name="client-email" />
                                  </div>
                                  <div className="form-group">
                                    <label for="client-address"
                                                       className="text-heading">Address</label>
                                    <input type="text"
                                                       className="form-control border-0 shadow-none form-control-lg"
                                                       id="client-address" placeholder="XYZ Street" name="client-address" />
                                  </div>
                                  <div className="form-group">
                                    <label for="client-phone" className="text-heading">Phone</label>
                                    <input type="text"
                                                       className="form-control border-0 shadow-none form-control-lg"
                                                       id="client-phone" placeholder="(123) 456 789" name="client-phone" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-4">
                                <div className="form-group mb-4">
                                  <label for="number">Invoice Number</label>
                                  <input type="text"
                                                   className="form-control border-0 shadow-none form-control-lg"
                                                   id="number"
                                                   placeholder="#0001" name="invoice-number" />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group mb-4">
                                  <label for="date">Invoice Date</label>
                                  <input type="date"
                                                   className="form-control form-control-lg border-0"
                                                   id="date" placeholder="Add date picker" name="available-from" />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group mb-4">
                                  <label for="due">Due Date</label>
                                  <input type="date"
                                                   className="form-control form-control-lg border-0"
                                                   id="due" placeholder="None" name="available-to" />
                                </div>
                              </div>
                            </div>
                            <div className="mb-6">
                              <div className="table-responsive">
                                <table className="table table-bordered item-table">
                                  <thead>
                                    <tr>
                                      <th className=""></th>
                                      <th>Items</th>
                                      <th className="">Rate</th>
                                      <th className="">Qty</th>
                                      <th className="text-right">Price</th>
                                      <th className="text-center">Tax</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="delete-item-row d-block d-md-table-cell w-100 w-md-auto">
                                        <ul className="table-controls list-unstyled">
                                          <li><a href="javascript:void(0);" className="delete-item"
                                                                   data-toggle="tooltip" data-placement="top" title=""
                                                                   data-original-title="Delete">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24"
                                                                     viewBox="0 0 24 24" fill="none"
                                                                     stroke="currentColor"
                                                                     stroke-width="2" stroke-linecap="round"
                                                                     stroke-linejoin="round"
                                                                     className="feather feather-x-circle">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                                <line x1="9" y1="9" x2="15" y2="15"></line>
                                              </svg>
                                            </a></li>
                                        </ul>
                                      </td>
                                      <td className="description d-block d-md-table-cell w-100 w-md-auto"><input type="text"
                                                                                   className="form-control border-0 shadow-none form-control-lg mb-3"
                                                                                   placeholder="Item Name" name="description[]" />
                                        <select className="form-control border-0 shadow-none form-control-lg"
                                                                title="Select"
                                                                id="country" name="unit[]">
                                          <option>Select your unit</option>
                                          <option>Hours</option>
                                          <option>Months</option>
                                        </select>
                                      </td>
                                      <td className="rate d-inline-block d-md-table-cell">
                                        <input type="text"
                                                               className="form-control border-0 shadow-none form-control-lg"
                                                               placeholder="Price" name="price[]" />
                                      </td>
                                      <td className="text-md-right qty d-inline-block d-md-table-cell"><input type="text"
                                                                                      className="form-control border-0 shadow-none form-control-lg"
                                                                                      placeholder="Quantity" name="quality[]" /></td>
                                      <td className="text-md-right amount d-inline-block d-md-table-cell"><span className="editable-amount"><span
                                                            className="currency">$</span> <span className="amount">100.00</span></span>
                                      </td>
                                      <td className="text-md-center tax d-inline-block d-md-table-cell">
                                        <div className="n-chk">
                                          <label className="new-control new-checkbox new-checkbox-text checkbox-primary h-18 mx-auto my-0">
                                            <input type="checkbox" className="new-control-input" name="tax[]" />
                                            <span className="d-inline-block d-md-none">Tax</span>
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <button type="button" className="btn btn-secondary btn-invoice-add-item">Add Item
                              </button>
                            </div>
                            <div className="row">
                              <div className="col-md-6 mb-6">
                                <div className="shadow-xxs-2 pt-1 pb-2 px-6 border-bottom border-primary border-5x rounded-lg">
                                  <div className="list-group list-group-flush">
                                    <div className="list-group-item d-flex py-2 px-0">
                                      <div className="invoice-summary-label">Subtotal</div>
                                      <div className="font-weight-500 text-heading ml-auto">
                                        <span className="currency">$</span><span className="amount">100</span>
                                      </div>
                                    </div>
                                    <div className="list-group-item d-flex py-2 px-0">
                                      <div className="invoice-summary-label">Discount</div>
                                      <div className="font-weight-500 text-heading ml-auto">
                                        <span className="currency">$</span><span>10</span>
                                      </div>
                                    </div>
                                    <div className="list-group-item d-flex py-2 px-0">
                                      <div className="invoice-summary-label">Tax</div>
                                      <div className="font-weight-500 text-heading ml-auto">
                                        <span>0%</span>
                                      </div>
                                    </div>
                                    <div className="list-group-item d-flex py-2 px-0">
                                      <div className="invoice-summary-label">Total</div>
                                      <div className="font-weight-500 text-heading ml-auto">
                                        <span className="currency">$</span><span>90</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label for="invoice-detail-notes"
                                           className="text-heading">Notes</label>
                              <textarea className="form-control border-0 shadow-none form-control-lg" name="note"
                                              id="invoice-detail-notes"
                                              placeholder="Notes - For example, &quot;Thank you for doing business with us&quot;"
                                              style="height: 88px;"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <div className="card card-body mb-6 p-6">
                          <div className="invoice-action-currency mb-5">
                            <h5 className="card-title fs-16 lh-2 text-dark mb-3">Currency</h5>
                            <div className="form-group mb-0">
                              <input name="currency" hidden type="text" />
                              <div className="dropdown selectable-dropdown invoice-select-currency no-caret">
                                <a id="currencyDropdown"
                                           className="d-flex dropdown-toggle form-control bg-transparent form-control-lg bg-input"
                                           data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false">
                                  <div className="w-18px mr-1 image-flag">
                                    <img src="images/svg/flag-us.svg" alt="flag" />
                                  </div>
                                  <span className="selectable-text text-truncate">USD - US Dollar</span>
                                  <span className="d-inline-block ml-auto"><i
                                                    className="fal fa-angle-down"></i></span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                                  <a className="dropdown-item d-flex" data-img-value="assets/img/flag-us.svg"
                                               data-value="USD - US Dollar" href="javascript:void(0);">
                                    <div className="w-18px mr-1 image-flag">
                                      <img
                                                            src="images/svg/flag-us.svg"
                                                            className="flag-width" alt="flag" />
                                      </div>
                                      <span className="selectable-text">USD - US Dollar</span></a>
                                    <a className="dropdown-item d-flex" data-img-value="assets/img/flag-gbp.svg"
                                               data-value="GBP - British Pound" href="javascript:void(0);">
                                      <div className="w-18px mr-1 image-flag">
                                        <img
                                                            src="images/svg/flag-gbp.svg"
                                                            className="flag-width" alt="flag" />
                                        </div>
                                        <span className="selectable-text"> GBP -
                                          British Pound</span></a>
                                      <a className="dropdown-item d-flex" data-img-value="assets/img/flag-idr.svg"
                                               data-value="IDR - Indonesian Rupiah" href="javascript:void(0);">
                                        <div className="w-18px mr-1 image-flag">
                                          <img
                                                            src="images/svg/flag-idr.svg"
                                                            className="flag-width" alt="flag" />
                                          </div>
                                          <span className="selectable-text">IDR -
                                            Indonesian Rupiah</span></a>
                                        <a className="dropdown-item d-flex" data-img-value="assets/img/flag-inr.svg"
                                               data-value="INR - Indian Rupee" href="javascript:void(0);">
                                          <div className="w-18px mr-1 image-flag">
                                            <img
                                                            src="images/svg/flag-inr.svg"
                                                            className="flag-width" alt="flag" />
                                            </div>
                                            <span className="selectable-text">INR -
                                              Indian Rupee</span></a>
                                          <a className="dropdown-item d-flex" data-img-value="assets/img/flag-brl.svg"
                                               data-value="BRL - Brazilian Real" href="javascript:void(0);">
                                            <div className="w-18px mr-1 image-flag">
                                              <img
                                                            src="images/svg/flag-brl.svg"
                                                            className="flag-width" alt="flag" />
                                              </div>
                                              <span className="selectable-text">
                                                BRL -
                                                Brazilian Real</span></a>
                                            <a className="dropdown-item d-flex" data-img-value="assets/img/flag-de.svg"
                                               data-value="EUR - Germany (Euro)" href="javascript:void(0);">
                                              <div className="w-18px mr-1 image-flag">
                                                <img
                                                            src="images/svg/flag-de.svg"
                                                            className="flag-width" alt="flag" />
                                                </div>
                                                <span className="selectable-text">
                                                  EUR -
                                                  Germany (Euro)</span></a>
                                              <a className="dropdown-item d-flex" data-img-value="assets/img/flag-try.svg"
                                               data-value="TRY - Turkish Lira" href="javascript:void(0);">
                                                <div className="w-18px mr-1 image-flag">
                                                  <img
                                                            src="images/svg/flag-try.svg"
                                                            className="flag-width" alt="flag" />
                                                  </div>
                                                  <span className="selectable-text">
                                                    TRY -
                                                    Turkish Lira</span></a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="invoice-action-tax mb-5">
                                          <h5 className="card-title fs-16 lh-2 text-dark mb-3">Tax</h5>
                                          <div className="invoice-action-tax-fields">
                                            <div className="form-group mb-0">
                                              <label>Type</label>
                                              <div className="dropdown selectable-dropdown invoice-tax-select no-caret">
                                                <a id="typeDropdown"
                                               className="dropdown-toggle form-control bg-transparent form-control-lg d-flex bg-input"
                                               data-toggle="dropdown"
                                               aria-haspopup="true" aria-expanded="false">
                                                  <span
                                                        className="selectable-text d-inline-block mr-auto text-truncate">None</span>
                                                  <span><i className="fal fa-angle-down"></i></span>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="typeDropdown">
                                                  <a className="dropdown-item" data-value="10"
                                                   href="javascript:void(0);">Deducted</a>
                                                  <a className="dropdown-item" data-value="5"
                                                   href="javascript:void(0);">Per Item</a>
                                                  <a className="dropdown-item" data-value="25"
                                                   href="javascript:void(0);">On Total</a>
                                                  <a className="dropdown-item" data-value="0"
                                                   href="javascript:void(0);">None</a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="form-group mb-0 mt-3 tax-rate" style="display: none;">
                                              <label for="rate1">Rate (%)</label>
                                              <input type="number"
                                               className="form-control border-0 shadow-none form-control-lg input-rate" name="tax-rate"
                                               id="rate1"
                                               placeholder="Rate" value="0" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="invoice-action-discount mb-5">
                                          <h5 className="card-title fs-16 lh-2 text-dark mb-3">Discount</h5>
                                          <div className="form-group mb-0">
                                            <label>Type</label>
                                            <div className="dropdown selectable-dropdown invoice-discount-select no-caret">
                                              <a id="discountDropdown"
                                           className="d-flex dropdown-toggle form-control bg-transparent form-control-lg d-block bg-input"
                                           data-toggle="dropdown"
                                           aria-haspopup="true" aria-expanded="false"> <span
                                                className="selectable-text d-inline-block mr-auto text-truncate">None</span>
                                                <span><i className="fal fa-angle-down"></i></span>
                                              </a>
                                              <div className="dropdown-menu" aria-labelledby="discountDropdown">
                                                <a className="dropdown-item d-flex" data-value="10"
                                               href="javascript:void(0);">Percent</a>
                                                <a className="dropdown-item d-flex" data-value="25"
                                               href="javascript:void(0);">Flat Amount</a>
                                                <a className="dropdown-item d-flex" data-value="0"
                                               href="javascript:void(0);">None</a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="form-group mb-0 mt-3 discount-amount" style="display: none;">
                                            <label for="amount">Amount</label>
                                            <input type="number"
                                           className="form-control border-0 shadow-none form-control-lg input-rate" name="discount-rate"
                                           id="amount"
                                           placeholder="Rate" value="25" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="invoice-actions-btn card card-body p-6">
                                        <div className="invoice-action-btn">
                                          <div className="mb-3">
                                            <a href="javascript:void(0);" className="btn btn-primary btn-send btn-block btn-lg">Send
                                              Invoice</a>
                                          </div>
                                          <div className="mb-3">
                                            <a href="dashboard-preview-invoice.html"
                                       className="btn btn-secondary btn-preview btn-block btn-lg">Preview</a>
                                          </div>
                                          <div>
                                            <button
                                       className="btn btn-success btn-download btn-block btn-lg">Save</button>
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
export default SuperAddNewInvoice;