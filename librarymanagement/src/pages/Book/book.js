import React, { useState, useEffect, useCallback } from "react";
import DashboardHeader from "../../components/DashboardHeader";

import all_orders from "../../constants/orders";
import { calculateRange, sliceData } from "../../utils/table-pagination";

import "./styles.css";
import axios from "axios";

function Book() {
  // const [customerID, setCustomerID] = useState(0);
  // const [customerFirstName, setCustomerFirstName] = useState("");
  // const [customerLastName, setCustomerLastName] = useState("");
  // const [customerEmail, setCustomerEmail] = useState("");
  // const [customerPhoneNumber, setcustomerPhoneNumber] = useState("");
  // const [customerActive, setcustomerActive] = useState(true);
  const [bookList, setBookList] = useState([]);

  const fetchBookList = useCallback(async () => {
    try {
      const result = await axios.get("http://localhost:8080/auth/books");
      console.log(result);
      setBookList(result.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchBookList();
  }, [fetchBookList]);

  const renderBook = bookList?.map((book) => {
    return (
      // <tr key={customer.customerID}>
      //   <td>{customer.customerID}</td>
      //   <td>{customer.customerFirstName}</td>
      //   <td>{customer.customerLastName}</td>
      //   <td>{customer.customerPhoneNumber}</td>
      //   <td>{customer.customerEmail}</td>
      //   <td>{customer.customerActive}</td>
      // </tr>
      <tr key={book.id}>
        <td style={{width:"10%"}}>
          <span>{book.id}</span>
        </td>
        <td style={{width:"10%"}}>
          <div>
            <span>{book.name}</span>
          </div>
        </td>
        <td  style={{width:"20%"}}>
          <span>
            <img src={book.bookImage} width="220px" height="250px"/>
          </span>
        </td>
        <td style={{width:"40%"}}>
          <div>
            <span>{book.contentSummary } </span> 
          </div>
        </td>
        <td style={{textAlign: "left", width:"40%"}}>
          <span >{book.datePublish}</span>
        </td>
      </tr>
    );
  });

  return (
    <div className="dashboard-content">
      <DashboardHeader  btnText="New Arrival" />

      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2 >Book List</h2>
          <div className="dashboard-content-search">
            <input
              type="text"
              // value={search}
              placeholder="Search.."
              className="dashboard-content-input"
              // onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <table>
          <thead>
            <th textAlign="center"> ID</th>
            <th textAlign="center"> Name</th>
            <th textAlign="center"> Image </th>
            <th> Content Summary </th>
            <th> Date Publish </th>
          </thead>

          {bookList.length !== 0 ? (
            <tbody>
              {/* {renderCustomer.map((customer, index) => (
                <tr key={customer.customerID}>
                  <td>
                    <span>{customer.customerID}</span>
                  </td>
                  <td>
                    <div>
                      <span>
                        {customer.customerFirstName} {customer.customerLastName}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>{customer.customerEmail}</span>
                  </td>
                  <td>
                    <div>
                      <span>{customer.customerPhoneNumber}</span>
                    </div>
                  </td>
                  <td>
                    <span>{customer.customerActive}</span>
                  </td>
                </tr>
              ))} */}
              {renderBook}
            </tbody>
          ) : null}
        </table>

        {/* {orders.length !== 0 ? (
          <div className="dashboard-content-footer">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
                onClick={() => __handleChangePage(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="dashboard-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Book;
