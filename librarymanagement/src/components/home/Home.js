import { useState, useEffect } from "react";
function Home() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        function getDataFromFetchingHttp() {
            fetch('http://localhost:8080/auth/orderDetails/null3', {
                method: 'get'
            })
                .then(res => res.json())
                .then(data => setCustomers(data))
                .catch(err => console.log(err))
        }
        getDataFromFetchingHttp();
    }, [])

    return (
        <div className="dashboard-content">
    
          <div className="dashboard-content-container">
            <div className="dashboard-content-header">
              <h2>Customers List Return Late</h2>
            </div>
    
            <table>
              <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th>Return Late Number</th>
              </thead>
    
              {customers.length !== 0 ? (
                <tbody>
                  {customers.map((item, index) => (
                    <tr key={item.id}>
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
export default Home;


