import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 21,
      donor: "Mostak Mohosin",
      date: "1 March",
      amount: 785,
      method: "Nagad",
      status: "Approved",
    },
    {
      id: 20,
      donor: "Shohan",
      date: "1 March",
      amount: 900,
      method: "Bkash",
      status: "Approved",
    },
    {
      id: 19,
      donor: "John Smith",
      date: "10 March",
      amount: 350,
      method: "Rocket",
      status: "Approved",
    },
    {
      id: 18,
      donor: "Pavel",
      date: "1 March",
      amount: 920,
      method: "Sonali Bank LTD",
      status: "Approved",
    },
    {
      id: 17,
      donor: "Shehab",
      date: "1 March",
      amount: 2000,
      method: "Asia Bank",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Donor Name</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.donor}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

