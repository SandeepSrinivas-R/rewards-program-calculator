import { useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AddTransaction from "../AddTransaction/AddTransaction";
import "./Navbar.css";

function Navbar(props) {
  const [showAddTransactionPopup, setShowAddTransactionPopup] = useState(false);
  return (
    <>
      {showAddTransactionPopup && (
        <AddTransaction closePopup={() => setShowAddTransactionPopup(false)} />
      )}
      <div>
        <div>
          <div>
            <Nav>
              <NavLink to="/">Dashboard</NavLink>
              <NavLink to="/viewTransactions">All Transactions</NavLink>
              <span onClick={() => setShowAddTransactionPopup(true)}>
                New Transaction
              </span>
            </Nav>
          </div>
        </div>
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default Navbar;
