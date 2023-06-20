import { useState, useEffect } from "react";
function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        function getDataFromFetchingHttp() {
            fetch('http://localhost:8080/auth/authors', {
                method: 'get'
            })
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err))
        }
        getDataFromFetchingHttp();
    }, [])

    return (
        <div>
            <h1 style={{color: "navy"}}>List Of Authors</h1>
            {data ? data.map((item,index) => {
                return (
                    <div key={index + 1}>
                        <p style={{color:"#000"}}>{index + 1} - {item.firstName} {item.lastName}</p>
       
                    </div>
                )
            }) : 'Loading...'}
        </div>

    );
}
export default Home;


