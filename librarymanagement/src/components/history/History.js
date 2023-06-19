import {useState, useEffect} from 'react'
function History() {
   const [books, setBooks] = useState([]);
   useEffect(() => {
    function getHttp(){
        fetch('http://localhost:8080/auth/books',{
            method: 'get'
        })
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(err => console.log(err))
    }
    getHttp();
   }, []);
    return (
        <div>
            {books ? books.map((book,index) => {
                return (
                    <div key={book.id}>
                        <h1>{index + 1}. {book.name}</h1>
                        <img style={{height: "500px", width: "400px"}} src={book.bookImage}></img>
                        <p>{book.contentSummary}</p>
                    </div>
                );
            })
            : "loading..."}
        </div>
       );
}
export default History;


