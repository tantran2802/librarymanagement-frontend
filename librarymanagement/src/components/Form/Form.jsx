import React, { Fragment, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Form() {
  const [customerID, setCustomerID] = useState(0);
  const [borrowDate, setBorrowDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [listOfBooks, setListOfBooks] = useState("");
  const [listOfBorrowNotes, setListOfBorrowNotes] = useState([]);
  const [listOfBorrowNoteDetail, setListOfBorrowNoteDetails] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get("http://localhost:8080/auth/orderBooks");
      setListOfBorrowNotes(result.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleCreateBorrowNote = async (data) => {
    try {
      const result = await axios.post(
        "http://localhost:8080/auth/orderBooks",
        data
      );
      // const result2 = await axios.get(
      //   `http://localhost:8080/auth/orderDetails/br_id?customerID=${customerID}`
      // );
      console.log(result);
      setListOfBorrowNoteDetails(result.data.borrowNoteDetailDTOList);
    } catch (error) {
      console.error(error);
    }
  };

  //   const handleGetBorrowNoteDetailOfCustomer = async (id) => {
  //     try {
  //       const result = await axios.get(
  //         `localhost:8080/auth/orderDetails/br_id?customerID=${id}`
  //       );
  //       console.log(result);
  //       setListOfBorrowNoteDetails(result.data);
  //     } catch (error) {
  //       //   console.error(error);
  //     }
  //   };

  //   const handleGetBorrowNoteDetailByBorrowNoteID = async (borrowID) => {
  //     try {
  //       const result = await axios.get(
  //         `localhost:8080/auth/orderDetails/borrowNote?borrowID=${borrowID}`
  //       );
  //       console.log(result);
  //     } catch (error) {}
  //   };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCustomerIDChange = (event) => {
    setCustomerID(event.target.value);
  };

  const handleBorrowDateChange = (event) => {
    setBorrowDate(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleListOfBookChange = (event) => {
    setListOfBooks(event.target.value);
  };

  var arrayOfPhysicalBookIDString = listOfBooks.split(",");
  const arrayOfPhysicalID = arrayOfPhysicalBookIDString.map((element) => {
    return Number(element);
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const borrowNoteSubmitData = {
      customerID: customerID,
      borrowDate: borrowDate,
      dueDate: dueDate,
      physicalBookIdList: arrayOfPhysicalID,
    };

    console.log(borrowNoteSubmitData);

    handleCreateBorrowNote(borrowNoteSubmitData);

    console.log(listOfBorrowNoteDetail);
  };

  const renderBorrowNoteDetails = listOfBorrowNoteDetail?.map((brnDetail) => {
    return (
      <tr key={brnDetail.borrowNoteID}>
        <td>{brnDetail.borrowNoteID}</td>
        <td>{brnDetail.customerFirstName}</td>
        <td>{brnDetail.customerLastName}</td>
        <td>{brnDetail.physicalBookName}</td>
      </tr>
    );
  });

  //MUI Table
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.red,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createBorrowNoteDetailsData(
    borrowNoteID,
    customerFirstName,
    customerLastName,
    physicalBookName
  ) {
    return {
      borrowNoteID,
      customerFirstName,
      customerLastName,
      physicalBookName,
    };
  }

  const borrowNoteDetailsRows = listOfBorrowNoteDetail.map((item) => {
    return createBorrowNoteDetailsData(
      item.borrowNoteID,
      item.customerFirstName,
      item.customerLastName,
      item.physicalBookName
    );
  });

  console.log(borrowNoteDetailsRows);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="Form">
        <header className="Form-header">
          <form
            id="form-borrow"
            onSubmit={handleSubmit}
            style={{ borderRadius: "30px", backgroundColor: "transparent", color:"white" }}
          >
            <label>Customer ID: </label>
            <input
              type="number"
              value={customerID}
              required
              onChange={handleCustomerIDChange}
            />
            <br />
            <label>Borrow Date: </label>
            <input
              type="date"
              value={borrowDate}
              required
              onChange={handleBorrowDateChange}
            />
            <br />
            <label>Due Date: </label>
            <input
              type="date"
              value={dueDate}
              required
              onChange={handleDueDateChange}
            />
            <br />
            <label>List Of Books: </label>
            <input
              type="text"
              // value={listOfBooks}
              required
              onChange={handleListOfBookChange}
            />
            <br />

            <button>Submit</button>
          </form>
        </header>
      </div>
      {/* <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid blueviolet",
          color: "blueviolet",
        }}
      >
        <thead>
          <th
            style={{
              padding: "10px",
              border: "1px solid blueviolet",
              color: "blueviolet",
            }}
          >
            Borrow Note ID
          </th>
          <th
            style={{
              padding: "10px",
              border: "1px solid blueviolet",
              color: "blueviolet",
            }}
          >
            Customer First Name
          </th>
          <th
            style={{
              padding: "10px",
              border: "1px solid blueviolet",
              color: "blueviolet",
            }}
          >
            Customer Last Name
          </th>
          <th
            style={{
              padding: "10px",
              border: "1px solid blueviolet",
              color: "blueviolet",
            }}
          >
            Physical Book Name
          </th>
        </thead>
        <tbody>{renderBorrowNoteDetails}</tbody>
      </table> */}
      <TableContainer
        sx={{
          width: "50%",
  
          backgroundColor: "pink",
          boxShadow: "none",
          marginX: "auto",
          marginTop: "30px",
        }}
        component={Paper}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Borrow Note Id</StyledTableCell>
              <StyledTableCell align="left">
                Customer First Name
              </StyledTableCell>
              <StyledTableCell align="left">
                Customer Last Name
              </StyledTableCell>
              <StyledTableCell align="left">
                Physical Book Name
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {borrowNoteDetailsRows?.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.borrowNoteID}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.customerFirstName}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.customerLastName}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.physicalBookName}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Form;
