import React, { useState, useEffect, useCallback } from "react";
import DashboardHeader from "../../components/DashboardHeader";

import all_orders from "../../constants/orders";
import { calculateRange, sliceData } from "../../utils/table-pagination";

import "./styles.css";
import axios from "axios";

function Responses() {
  // const [customerID, setCustomerID] = useState(0);
  // const [customerFirstName, setCustomerFirstName] = useState("");
  // const [customerLastName, setCustomerLastName] = useState("");
  // const [customerEmail, setCustomerEmail] = useState("");
  // const [customerPhoneNumber, setcustomerPhoneNumber] = useState("");
  // const [customerActive, setcustomerActive] = useState(true);
  const [responseList, setResponseList] = useState([]);

  const fetchResponseList = useCallback(async () => {
    try {
      const result = await axios.get("http://localhost:8080/auth/responses");
      console.log(result);
      setResponseList(result.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchResponseList();
  }, [fetchResponseList]);

  const renderResponse = responseList?.map((response) => {
    return (
      // <tr key={customer.customerID}>
      //   <td>{customer.customerID}</td>
      //   <td>{customer.customerFirstName}</td>
      //   <td>{customer.customerLastName}</td>
      //   <td>{customer.customerPhoneNumber}</td>
      //   <td>{customer.customerEmail}</td>
      //   <td>{customer.customerActive}</td>
      // </tr>
      <tr key={response.id}>
        <td style={{ width: "10%" }}>
          <span>{response.id}</span>
        </td>
        <td style={{ width: "90%" }}>
          <div>
            <span>{response.responseContent}</span>
          </div>
        </td>
        {/* <td>
          <span>{response.address}</span>
        </td> */}
        {/* <td>
          <div>
            <span>{response.customer}</span>
          </div>
        </td>
        <td>
          <span>{response.book}</span>
        </td> */}
      </tr>
    );
  });

  return (
    <div className="dashboard-content">
      <DashboardHeader btnText="New Customer" />

      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Response List</h2>
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
            <th>Response ID</th>
            <th>Response Content</th>
            {/* <th>Customer address</th> */}
            {/* <th>Book</th>
            <th>Customer</th> */}
          </thead>

          {responseList.length !== 0 ? (
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
              {renderResponse}
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

export default Responses;
