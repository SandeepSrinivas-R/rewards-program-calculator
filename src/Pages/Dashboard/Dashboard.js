import React, { useEffect, useState, useContext } from "react";
import "./Dashboard.css";
import Table from "../../Components/Table/Table";
import { Context } from "../../Store/Store";
import { getRewardsTransactions } from "../../utils/RewardsCalcUtils";
import "../Transactions/Transactions.css";

function Dashboard() {
  const [data, setData] = useState(null);
  const [store, dispatch] = useContext(Context);

  useEffect(() => {
    getRewardsTransactions().then((data) => {
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
          <i className="fa-tasks" /> REWARDS
        </span>
      ),
      accessor: "rewardsPerMonth",
      Cell: (row) => (
        <div className="text-center">
          {row.value.map((each, index) => {
            return <div key={index}>{each}</div>;
          })}
        </div>
      ),
    },
    {
      Header: () => (
        <span>
          <i className="fa-tasks" /> TOTAL
        </span>
      ),
      accessor: "totalRewards",
      Cell: (row) => <div className="text-center"> {row.value}</div>,
    },
  ];
  return (
    data &&
    data.length > 0 && (
      <div>
        <div>
          <Table data={data} columns={columns} />
        </div>
      </div>
    )
  );
}

export default Dashboard;
