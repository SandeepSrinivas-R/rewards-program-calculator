import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

function Table({ data, columns }) {
  return (
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={data.length > 10 ? 10 : data.length}
      pageSizeOptions={[10, 20, 30, 50, 100]}
      className="-highlight"
    ></ReactTable>
  );
}

export default Table;
