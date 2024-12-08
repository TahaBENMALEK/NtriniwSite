import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Login from './containers/Login';
import Testi from './containers/Login.jsx';
const AppRoutes = () => {
  return(
  <Router>
    <Routes>
      <Route path="/login" element={<Testi />} />
    </Routes>
     </Router>
  ); 
}
export default AppRoutes;