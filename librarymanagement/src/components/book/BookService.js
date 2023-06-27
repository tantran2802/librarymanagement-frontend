import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
export default function BookService() {
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
   function saveBookId(id){
        localStorage.setItem('id', JSON.stringify(id))
   }
  return (
    <div className="dashboard-content">
        <div className="dashboard-content-container">
            {books ? books.map((book,index) => {
                return (
                    <div key={book.id}>
                        <Link className='hyperlink' to='/borrownote/ImportPhysicalBook' onClick={() => saveBookId(book.id)} > <h1>{index + 1}. {book.name}</h1></Link>
                        <img style={{height: "500px", width: "400px"}} src={book.bookImage}></img>
                        <p>{book.contentSummary}</p>
                    </div>
                );
            })
            : "loading..."}
        
        </div>
    </div>
  );
}
