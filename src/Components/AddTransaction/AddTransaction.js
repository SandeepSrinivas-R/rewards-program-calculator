import React, { useState, useContext } from "react";
import { Context } from "../../Store/Store";
import { addTransaction } from "../../utils/RewardsCalcUtils";
import Popupbg from "../Popup/Popup";
import "./AddTransaction.css";

function AddTransaction(props) {
  // eslint-disable-next-line no-unused-vars
  const [store, dispatch] = useContext(Context);
  const initialState = {
    name: "",
    transactions: [],
  };

  const intitialTransaction = {
    date: "",
    amount: "",
  };

  const [transactionObj, setTransactions] = useState(initialState);
  const [transaction, setTransaction] = useState(intitialTransaction);

  function onSubmit() {
    transactionObj.transactions.push(transaction);
    if (addTransaction(transactionObj)) {
      dispatch({ type: "dataUpdated", payload: true });
    }
    props.closePopup();
  }

  return (
    <Popupbg
      closePopup={props.closePopup}
      popupTitle="Add New Transaction"
      header={true}
    >
      <div className="add-transaction-popup">
        <form onSubmit={onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Enter the name"
            value={transactionObj.name}
            onChange={(e) =>
              setTransactions({ ...transactionObj, name: e.target.value })
            }
            required
          />
          <input
            name="date"
            type="date"
            placeholder="yyyy-mm-dd"
            value={transaction.date}
            onChange={(e) =>
              setTransaction({ ...transaction, date: e.target.value })
            }
            required
          />
          <input
            name="amount"
            type="number"
            min="0"
            placeholder="Amount"
            value={transaction.amount}
            onChange={(e) =>
              setTransaction({ ...transaction, amount: e.target.value })
            }
            required
          />
          <input className="submit-btn" type="submit" value="submit" />
        </form>
      </div>
    </Popupbg>
  );
}

export default AddTransaction;
