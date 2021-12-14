import React from "react";
import {
  BrowserRouter as Router,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";
import Notfound from "./Pages/PageNotFound/PageNotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Transactions from "./Pages/Transactions/Transactions";
import AddTransactionPage from "./Pages/AddTransactionPage/AddTransactionPage";
import Navbar from "./Components/Navbar/Navbar";

function Routes() {

  return (
    <>
      <Router>
        <Navbar>
          <BrowserRoutes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/viewTransactions" exact element={<Transactions />} />
            <Route
              path="/addTransactions"
              exact
              element={<AddTransactionPage />}
            />
            <Route path="*" element={<Notfound />} />
          </BrowserRoutes>
        </Navbar>
      </Router>
    </>
  );
}

export default Routes;
