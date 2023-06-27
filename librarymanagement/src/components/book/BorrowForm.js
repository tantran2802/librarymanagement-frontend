import { useRef, useState, useEffect } from 'react';
import classes from './bookform.module.css';
export default function Borrow() {

    const [searchVal, setSearchVal] = useState("");
    const [customer, setCustomer] = useState();
    const [borrowNoteId, setBorrowNoteId] = useState([]);
    const [borrowNote, setBorrowNote] = useState(); 
    const customerId = useRef();
    const dueDate = useRef();
    const physicalBookIdList = useRef();
    const handleChange = (e) => {
        setSearchVal(e.target.value);
    }
    useEffect(() => {
        function searchCustId() {
            fetch(`http://localhost:8080/auth/customers/${searchVal}`, {
                method: 'GET'
            }).then(async res => {
                const data = await res.json();
                setCustomer(data);
            })
                .catch(err => console.log(err));
        }
        const timer = setTimeout(() => {
            searchCustId();
        }, 1000);
        return () => clearTimeout(timer);
    }, [searchVal]);

    function submitHandler(event) {
        event.preventDefault();
        const enteredCustomerId = customerId.current.value;
        const enteredDuDate = dueDate.current.value;
        const enteredPhysicalBookIdList = physicalBookIdList.current.value;

        var arrOfStr = enteredPhysicalBookIdList.split(',');
        const arrOfNum = arrOfStr.map(el => {
            return Number(el)
        }
        );
        const BorrowNote = {
            customerID: enteredCustomerId,
            dueDate: enteredDuDate,
            physicalBookIdList: arrOfNum,
        }
        function createBorrowNote() {
            fetch('http://localhost:8080/auth/orderBooks', {
                method: 'POST',
                body: JSON.stringify(BorrowNote),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(async (res) => {
                    const data = await res.json();
                    setBorrowNote(data);
                })
                .catch(err => console.log(err));
        }
        createBorrowNote();
    }
    function getBorrowNoteDetail(id) {
        fetch(`http://localhost:8080/auth/orderDetails/borrownote/${id}`, { method: 'GET' })
            .then(async res => {
                const da = await res.json();
                setBorrowNoteId(da);
            }).catch(err => console.log(err));
    }
    return (
        <div className='dashboard-content'>
            <h1>Borrow Note</h1>
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="customerid">Customer Code</label>
                    <input type="number" required id="customerid" ref={customerId}
                        onChange={handleChange} />
                </div>
                <div key={1}>
                    {customer && (<p style={{backgroundColor : "skyblue", borderColor : 'black', width: '300px', borderRadius: '10px'}}>First name: {customer.firstName} <br />
                        Last name: {customer.lastName}  <br />
                        Address: {customer.address}  <br />
                        Status: {customer.active}  <br />
                        Number of Return late: {customer.numberOfTimeReturnLate}
                    </p>)}
                </div>
                <div className={classes.control}>
                    <label htmlFor="duedate">Due Date</label>
                    <input type="date" required id="duedate" ref={dueDate} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="physicalbookidlist">Book Code List</label>
                    <input type="text" required id="physicalbookidlist" ref={physicalBookIdList} />
                </div>
                <div className={classes.actions}>
                    <button>Create Borrow Note</button>
                </div>
            </form>

            {borrowNote && (
                <div key={borrowNote.id}>
                    <p style={{backgroundColor : "#99ff99", borderColor : 'black', width: '300px', borderRadius: '10px'}}>{borrowNote.id}. Customer No. {borrowNote.customerID} - Borrow Date: {borrowNote.borrowDate} - Due Date: {borrowNote.dueDate}</p>
                    <button onClick={() => getBorrowNoteDetail(borrowNote.id)}>View Detail</button>
                    {borrowNoteId ? borrowNoteId.map((item) => {
                        return (
                            <div key={item.id}>
                                <p style={{backgroundColor : "#99ff99", borderColor : 'black', width: '300px', borderRadius: '10px'}}>
                                Borrow Note No. {item.borrowNoteID} <br/>
                                Customer Code {item.customerID} <br/>
                                Name: {item.customerFirstName} {item.customerLastName} <br/>
                                Phone Number: {item.customerPhoneNumber} <br/>
                                Book Code: {item.physicalBookID} <br/>
                                Book Name: {item.physicalBookName} <br/></p>
                                <br/>
                            </div>
                        )
                    }) : 'Loading...'}
                </div>
            )}
        </div>

    )
}