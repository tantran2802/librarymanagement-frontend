import React, { useState, useEffect, useCallback } from "react";
import DashboardHeader from "../../components/DashboardHeader";

import all_orders from "../../constants/orders";
import { calculateRange, sliceData } from "../../utils/table-pagination";

import axios from "axios";

function Orders() {
  // const [customerID, setCustomerID] = useState(0);
  // const [customerFirstName, setCustomerFirstName] = useState("");
  // const [customerLastName, setCustomerLastName] = useState("");
  // const [customerEmail, setCustomerEmail] = useState("");
  // const [customerPhoneNumber, setcustomerPhoneNumber] = useState("");
  // const [customerActive, setcustomerActive] = useState(true);
  const [customerList, setCustomerList] = useState([]);

  const fetchCustomerList = useCallback(async () => {
    try {
      const result = await axios.get("http://localhost:8080/auth/customers");
      console.log(result);
      setCustomerList(result.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchCustomerList();
  }, [fetchCustomerList]);

  const renderCustomer = customerList?.map((customer) => {
    return (
      // <tr key={customer.customerID}>
      //   <td>{customer.customerID}</td>
      //   <td>{customer.customerFirstName}</td>
      //   <td>{customer.customerLastName}</td>
      //   <td>{customer.customerPhoneNumber}</td>
      //   <td>{customer.customerEmail}</td>
      //   <td>{customer.customerActive}</td>
      // </tr>
      <tr key={customer.id}>
        <td>
          <span>{customer.id}</span>
        </td>
        <td>
          <div>
            <span>
              {customer.firstName} {customer.lastName}
            </span>
          </div>
        </td>
        <td>
          <span>{customer.address}</span>
        </td>
        <td>
          <div>
            <span>{customer.phoneNumber}</span>
          </div>
        </td>
        <td>
          <span>{customer.active ? "Active" : "Ban"}</span>
        </td>
      </tr>
    );
  });

  return (
    <div className="dashboard-content">
      <DashboardHeader btnText="New Customer" />

      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Customer List</h2>
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
            <th>Customer ID</th>
            <th>Customer name</th>
            <th>Customer address</th>
            <th>Phone number</th>
            <th>Status</th>
          </thead>

          {customerList.length !== 0 ? (
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
              {renderCustomer}
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

export default Orders;
