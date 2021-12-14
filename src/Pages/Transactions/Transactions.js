import React, { useEffect, useState, useContext } from "react";
import Table from "../../Components/Table/Table";
import { Context } from "../../Store/Store";
import { data as getTransactions } from "../../utils/RewardsCalcUtils";
import "./Transactions.css";

function Transactions() {
  const [data, setData] = useState(null);
  const [store, dispatch] = useContext(Context);

  useEffect(() => {
    getTransactions().then((data) => {
      setData(data);
      dispatch({ type: "dataUpdated", payload: false });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.isDataUpdated]);

  let columns = [
    {
      Header: () => (
        <span>
          <i className="fa-tasks" /> NAME
        </span>
      ),
      accessor: "name",
      Cell: (row) => <div className="name-column"> {row.value}</div>,
    },
    {
      Header: () => (
        <span>
          <i className="fa-tasks" /> DATE
        </span>
      ),
      accessor: "transactions",
      Cell: (row) => (
        <div className="text-center">
          {row?.value?.map((each, index) => {
            return <div key={index}>{each.date}</div>;
          })}
        </div>
      ),
    },
    {
      Header: () => (
        <span>
          <i className="fa-tasks" /> TRANSACTION
        </span>
      ),
      accessor: "transactions",
      Cell: (row) => (
        <div className="text-center">
          {row?.value?.map((each, index) => {
            return <div key={index}>{each.amount}</div>;
          })}
        </div>
      ),
    },
  ];
  return (
    <>
      {data && data.length > 0 && (
        <div>
          <div>
            <Table data={data} columns={columns} />
          </div>
        </div>
      )}
    </>
  );
}

export default Transactions;
