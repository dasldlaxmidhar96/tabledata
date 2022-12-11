import './App.css';
import Table from './components/Table';
import { tableData } from './data';

function App() {
  const columns = [
    {field:"id", header: "ID"},
    {field: "date", header:"Start Date"},
    {field: "state", header:"State"},
    {field: "time", header:"State Age"},
    {field: "customer", header:"Customer"}
  ]
  return (
    <div>
      <h2>Invoices</h2>
        <Table data={tableData} columns={columns} />
    </div>
  );
}

export default App;
