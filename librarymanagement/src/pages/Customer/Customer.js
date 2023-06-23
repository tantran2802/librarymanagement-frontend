import { useState} from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

function Customer() {
  const [customers, setCustomers] = useState([]);

  function getFetchingCustomer(){
    fetch('http://localhost:8080/auth/customers',{
      method : "GET"
    }).then(async (res) => {
      const data = await res.json();
      setCustomers(data);
    }).catch(err => console.log(err));
  }
  getFetchingCustomer();
  return (
    <div className="dashboard-content">
      <DashboardHeader btnText="New Customer" />

      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Customers List</h2>
        </div>

        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Return Late</th>
          </thead>

          {customers.length !== 0 ? (
            <tbody>
              {customers.map((item, index) => (
                <tr key={index}>
                  <td>
                    <span>{item.firstName}</span>
                  </td>
                  <td>
                    <div>
                      <span>
                        {item.lastName}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>{item.address}</span>
                  </td>
                  <td>
                    <div>
                    <span>{item.phoneNumber}</span>
                    </div>
                  </td>
                  <td>
                    <span>{item.active}</span>
                  </td>
                  <td>
                    <span>{item.numberOfTimeReturnLate}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </div>
    </div>
  );
}

export default Customer;
