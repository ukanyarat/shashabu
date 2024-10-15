import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import IndexLogin from './pages/index';  
import SelectItem from './pages/select';  
//pages select
import ReceiveCustomers from './pages/cus_reciveCustomer';
import ViewOrder from './pages/viewOrder';
import ManageFoodItems from './pages/manageFoodItem';
import Payment from './pages/paymentCustomer';
import HistoryOrders from './pages/historyOrders';
import RegisterEmployee from './pages/regis_register';

import QRcode from './pages/cus_qrCode';

function App() {
    return (
        <Router>
            <Routes>
                
                <Route path="/" element={<IndexLogin />} />
                <Route path="/item" element={<SelectItem />} />

                <Route path="/receiveCustomers" element={<ReceiveCustomers />} />
                <Route path="/viewOrder" element={<ViewOrder />} />
                <Route path="/manageFoodItems" element={<ManageFoodItems />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/historyOrders" element={<HistoryOrders />} />
                <Route path="/registerEmployee" element={<RegisterEmployee />} />

                <Route path="/qrCode" element={<QRcode />} />
            </Routes>
        </Router>
    );
}

export default App;
