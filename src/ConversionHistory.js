import react, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

const ConversionHistory = ({ conversionHistory, onDelete }) => {
  // const [conversionHistory, setConversionHistory] = useState(conversionHistory);

  console.log("props conversionHistory", conversionHistory);

  // const handleDelete = (index) => {
  //     setConversionHistory((prevHistory) =>
  //       prevHistory.filter((_, i) => i !== index)
  //     );
  //   };

  return (
    <div className="currencyConversion">
      <h1> ConversionHistory </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="left">Event</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {conversionHistory.map((conversion, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {conversion.date}
                </TableCell>
                <TableCell>
                  converted an {conversion.amount} from {conversion.fromCurrency} to {conversion.toCurrency}
                </TableCell>
                <TableCell className="tableRow">
                  <Button>
                    <VisibilityIcon className="iconColor" /> View
                  </Button>
                  <Button
                    style={{
                      color: "red",
                      fontSize: "14px",
                    }}
                  >
                    <DeleteIcon /> Delete From History
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ConversionHistory;
