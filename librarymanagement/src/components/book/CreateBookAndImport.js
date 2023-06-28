import {useRef, useState} from 'react';
import classes from './bookform.module.css'
export default function CreateAndImportBook(){
    const [publishHouse, setPublishHouse] = useState([]);
    const [author, setAuthor] = useState([])
    const bookName = useRef();
    const bookImage = useRef();
    const contentSummary = useRef();
    const datePublish = useRef();
    const price = useRef();
    const date = useRef();
    const authorId = useRef();
    const numberOfBook = useRef();
    const publishingHouseId = useRef();
    function getPublishingHouse(){
        fetch('http://localhost:8080/auth/publishingHouses',{method: 'GET'})
        .then(res => res.json())
        .then(data => setPublishHouse(data))
        .catch(err => console.log(err));
    }
    getPublishingHouse();
    function getAuthor() {
        fetch('http://localhost:8080/auth/authors',{method: 'GET'})
        .then(res => res.json())
        .then(re => setAuthor(re))
        .catch(err => console.log(err));
    }
    getAuthor();
    function submitHandler(event){
        event.preventDefault();
        const enteredBookName = bookName.current.value;
        const enteredBookImage = bookImage.current.value;
        const enteredContentSummary = contentSummary.current.value;
        const enteredDatePublish = datePublish.current.value;
        const enteredPrice = price.current.value;
        const enteredDate = date.current.value;
        const enteredPublishingHouse = publishingHouseId.current.value;
        const enteredAuthor = authorId.current.value;
        const enteredNumberOfBook = numberOfBook.current.value;
        const physicalBook = {
            name : enteredBookName,
            bookImage : enteredBookImage,
            contentSummary : enteredContentSummary,
            datePublish : enteredDatePublish,
            authorID : enteredAuthor,
            publishingHouseId : enteredPublishingHouse,
            numberOfPhysicalBook : enteredNumberOfBook,
            importDate : enteredDate,
            importPrice : enteredPrice,
        }
        function addPhysicalBook(){
            fetch('http://localhost:8080/auth/books',{
                method: 'POST',
                body: JSON.stringify(physicalBook),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(res => res.json())
            .catch(err => console.log(err));
        }
        addPhysicalBook();
    }
    return(
        <div className="dashboard-content">
            <h1>Physical Book Import</h1>
            <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.control}>
                    <label htmlFor="name">Book Name</label>
                    <input type="text" required id="name" ref={bookName}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="text" required id="image" ref={bookImage}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="content">Conten Summary</label>
                    <input type="text" required id="content" ref={contentSummary}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="datepublish">Date Publish</label>
                    <input type="date" required id="datepublish" ref={datePublish}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="numberofbook">Number Of Book</label>
                    <input type="number" required id="numberofbook" ref={numberOfBook}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="price">Price</label>
                    <input type="number" required id="price" ref={price}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="dateimport">Date Import</label>
                    <input type="date" required id="dateimport" ref={date}/>
                </div>
                <div className={classes.control}>
                    <label for="publishinghouse">Choose Publishing House:</label>
                    <select id="publishinghouse" ref={publishingHouseId}>
                        {publishHouse && publishHouse.map((item) => {
                            return (<option value={item.id} key={item.id}> {item.name}</option>)
                        })}
                    </select>
                </div>
                {/* <div className={classes.control}>
                    <label htmlFor="authorid">Author Code</label>
                    <input type="number" required id="authorid" ref={authorId}/>
                </div> */}
                <div className={classes.control}>
                    <label for="author">Choose Author:</label>
                    <select id="author" ref={authorId}>
                        {author && author.map((it) => {
                            return (<option value={it.id} key={it.id}> {it.firstName} </option>)
                        })}
                    </select>
                </div>
                <div className={classes.actions}>
                    <button>Add Physical Book</button>
                </div>
            </form>
        
          
        </div>

    );
}