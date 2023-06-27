import {useRef, useState} from 'react';
import classes from './bookform.module.css'
export default function ImportPhysicalBook(){
    const id = JSON.parse(localStorage.getItem("id"));
    const [publishHouse, setPublishHouse] = useState([]);
    const [PhyBook, setPhyBook] = useState();
    const price = useRef();
    const date = useRef();
    const bookId = id;
    const publishingHouseId = useRef();
    function getPublishingHouse(){
        fetch('http://localhost:8080/auth/publishingHouses',{method: 'GET'})
        .then(res => res.json())
        .then(data => setPublishHouse(data))
        .catch(err => console.log(err));
    }
    getPublishingHouse();
    function submitHandler(event){
        event.preventDefault();
        const enteredPrice = price.current.value;
        const enteredDate = date.current.value;
        const enteredPublishingHouse = publishingHouseId.current.value
        
        const physicalBook = {
            importPrice : enteredPrice,
            importDate : enteredDate,
            bookId : bookId,
            publishingHouseId : enteredPublishingHouse
        }
        function addPhysicalBook(){
            fetch('http://localhost:8080/auth/physicalBooks',{
                method: 'POST',
                body: JSON.stringify(physicalBook),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => setPhyBook(res))
            .catch(err => console.log(err));
        }
        addPhysicalBook();
    }
    return(
        <div className="dashboard-content">
            <h1>Physical Book Import</h1>
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="price">Price</label>
                    <input type="number" required id="price" ref={price}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="date">Date</label>
                    <input type="date" required id="date" ref={date}/>
                </div>
                <div className={classes.control}>
                    <label for="publishinghouse">Choose Publishing House:</label>
                    <select id="publishinghouse" ref={publishingHouseId}>
                        {publishHouse && publishHouse.map((item) => {
                            return (<option value={item.id}  key={item.id}> {item.name}</option>)
                        })}
                    </select>
                </div>
                <div className={classes.actions}>
                    <button>Add Physical Book</button>
                </div>
            </form>
            <div >
                {PhyBook && (<p key={PhyBook.id} style={{backgroundColor : "skyblue", borderColor : 'black', width: '300px', borderRadius: '10px'}}>
            Book Name: {PhyBook.bookName}<br/>
            Book Code: {PhyBook.id} <br/>
            Publish Date: {PhyBook.datePublish} <br/>
            Immport Price: {PhyBook.importPrice} <br/>
            Import Date: {PhyBook.importDate}
            </p>)}</div>
          
        </div>

    );
}
