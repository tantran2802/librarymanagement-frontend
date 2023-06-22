// import { useNavigate} from "react-router-dom";
import {useRef, useState} from 'react';
import classes from './bookform.module.css';
export default function Borrow(){
    // const history = useNavigate();
    const [borrowNote, setBorrowNote] = useState('');
    const customerId = useRef();
    const borrowDate = useRef();
    const dueDate = useRef();
    const physicalBookIdList = useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredCustomerId = customerId.current.value;
        const enteredBorrowDate = borrowDate.current.value;
        const enteredDuDate = dueDate.current.value;
        const enteredPhysicalBookIdList = physicalBookIdList.current.value;
        
        var arrOfStr = enteredPhysicalBookIdList.split(',');
        const arrOfNum =  arrOfStr.map(el => {
                return Number(el)}
                );
        const BorrowNote = {
            customerID : enteredCustomerId,
            borrowDate : enteredBorrowDate,
            dueDate : enteredDuDate,
            physicalBookIdList : arrOfNum,
            }   
        function createBorrowNote(){
            fetch('http://localhost:8080/auth/orderBooks',{
                method: 'POST',
                body: JSON.stringify(BorrowNote),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(async (res) => {
                const data = await res.json();
                setBorrowNote(data);
                console.log(data);
                // history('/home');
            })
            
            .catch(err => console.log(err));
        }
        createBorrowNote();
    }

    return(

    <div>
        <h1>Borrow Note</h1>
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="customerid">Customer Id</label>
                <input type="number" required id="customerid" ref={customerId}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="borrowdate">Borrow Date</label>
                <input type="date" required id="borrowdate" ref={borrowDate}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="duedate">Due Date</label>
                <input type="date" required id="duedate" ref={dueDate}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="physicalbookidlist">Physical Book Id List</label>
                <input type="text" required id="physicalbookidlist" ref={physicalBookIdList}/>
            </div>
            <div className={classes.actions}>
                <button>Add Borrow Note</button>
            </div>
        </form>
        {borrowNote ? 
         (
                    <div key={borrowNote.id}>
                        <p style={{color:"#000"}}>{borrowNote.id}. Customer No. {borrowNote.customerID} - Borrow Date: {borrowNote.borrowDate} - Due Date: {borrowNote.dueDate}</p>
                    </div>
         )
             : 'Loading...'}
    </div>

    )
}