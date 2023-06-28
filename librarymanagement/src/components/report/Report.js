import {useState} from 'react';
function Report() {
    const [bookAnalytic, setBookAnalytic] = useState([]);
    function getNumberOfBookCopies(){
        fetch('http://localhost:8080/auth/books/book_analytic',
        {method: 'GET'}
        )
        .then(res => res.json())
        .then(res => setBookAnalytic(res))
        .catch(err => console.log(err))
    }
    getNumberOfBookCopies();
    return (
        <div className='dashboard-content'>
            <div className="dashboard-content-container">
            {bookAnalytic && bookAnalytic.map((item,index) => {
                return(
                    <p key={index + 1}>Book Name: {item.name} <br/>
                    Number Of Copies: {item.numberOfPhysicalCopies}
                    </p>
                )
            })}
           
           
            </div>
        </div>
    );
}
export default Report;