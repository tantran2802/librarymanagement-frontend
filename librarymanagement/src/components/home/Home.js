import { useState, useEffect } from "react";
function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        function getDataFromFetchingHttp() {
            fetch('http://localhost:8080/auth/authors', {
                method: 'get'
            })
                .then(async res => await res.json())
                .then(async data => setData(data))
                .catch(err => console.log(err))
        }
        getDataFromFetchingHttp();
    }, [])

    return (
        <div>
            {data ? data.map((item,index) => {
                return (
                    <div key={index + 1}>
                        <p style={{color:"grey"}}>{index + 1} - {item.firstName} {item.lastName}</p>
       
                    </div>
                )
            }) : 'Loading...'}
        </div>

    );
}
export default Home;


