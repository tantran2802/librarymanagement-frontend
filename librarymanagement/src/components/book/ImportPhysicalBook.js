import { useNavigate} from "react-router-dom"
import {useRef} from 'react';
import classes from './bookform.module.css'
export default function ImportPhysicalBook(){
    const history = useNavigate();
    const price = useRef();
    const date = useRef();
    const bookId = useRef();
    const publishingHouseId = useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredPrice = price.current.value;
        const enteredDate = date.current.value;
        const enteredBooId = bookId.current.value;
        const enteredPublishingHouseId = publishingHouseId.current.value;
        
        const physicalBook = {
            importPrice : enteredPrice,
            importDate : enteredDate,
            bookId : enteredBooId,
            publishingHouseId : enteredPublishingHouseId
        }
        function addPhysicalBook(){
            fetch('http://localhost:8080/auth/physicalBooks',{
                method: 'POST',
                body: JSON.stringify(physicalBook),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(async res => {
                const data = await res.json();
                console.log(data);
            })
            .then(() => {
                history('/home');
            })
            .catch(err => console.log(err));
        }
        addPhysicalBook();
    }
    return(
        <div>
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
                    <label htmlFor="bookid">Book Id</label>
                    <input type="number" required id="bookid" ref={bookId}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="publishinghouseid">Publishing House Id</label>
                    <input type="number" required id="publishinghouseid" ref={publishingHouseId}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Physical Book</button>
                </div>
            </form>
        </div>

    );
}
