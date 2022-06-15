import React from 'react';

import SuperAdminSidebar from '../../Components/SAdminSidebar/supersidebar';
import SuperHeader from './superheader';
import SuperAdminDash from './superadmindashboard';
import SuperAddProperty from './superaddproperty';
import SuperMyProperty from './supermyproperty';
import SuperMyfavProperty from './supermyfavproperty';
import SuperAdminReviews from './superadminreviews';
import SuperMyProfile from './supermyprofile';
import SuperMyPackage from './supermypackage';
import SuperSaveproperty from './supersaveproperty';
import SuperInvoiceList from './superinvoicelist';
import SuperEditInvoice from './supereditinvoice';
import SuperAddNewInvoice from './superaddnewinvoice';
import SuperPreInvoice from './superpreinvoice';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const SuperDashboard = () => {
    return (
    <>
    <div className="wrapper dashboard-wrapper">
      <div className="d-flex flex-wrap flex-xl-nowrap">
      <Router>
          <SuperAdminSidebar />
        <div className="page-content">
          <SuperHeader />
            <Routes>
                <Route exact path="/my-dashboard" element={<SuperAdminDash />}/>
                <Route exact path="/add-new-property" element={<SuperAddProperty />}/>
                <Route exact path="/my-properties" element={<SuperMyProperty/>}/>
                <Route exact path="/my-favourite-properties" element={<SuperMyfavProperty/>}/>
                <Route exact path="/my-save-properties" element={<SuperSaveproperty/>}/>
                <Route exact path="/my-reviews" element={<SuperAdminReviews />}/>
                <Route exact path="/listing-invoice" element={<SuperInvoiceList />}/>
                <Route exact path="/add-new-invoice" element={<SuperAddNewInvoice/>}/>
                <Route exact path="/edit-invoice" element={<SuperEditInvoice/>}/>
                <Route exact path="/preview-invoice" element={<SuperPreInvoice/>}/>
                <Route exact path="/my-packages" element={<SuperMyPackage/>}/>
                <Route exact path="/my-profile" element={<SuperMyProfile/>}/>
                
                
               
              </Routes>  
          </div>
      	 
         </Router>
           </div>

</div>
          </>
    )
}
export default SuperDashboard;
