import { useRef, useState, useEffect } from 'react';
import classes from './bookform.module.css';
export default function ReturnLate(){
    const [searchVal, setSearchVal] = useState("");
    const [customer, setCustomer] = useState();
    const customerId = useRef();
    const [borrowNote, setBorrowNote] = useState();
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
        const enteredPhysicalBookIdList = physicalBookIdList.current.value;

        var arrOfStr = enteredPhysicalBookIdList.split(',');
        const arrOfNum = arrOfStr.map(el => {
            return Number(el)
        }
        );
        const BorrowNote = {
            customerId: enteredCustomerId,
            physicalBookIds : arrOfNum,
        }
        function createBorrowNote() {
            fetch('http://localhost:8080/auth/orderDetails/fine_fee', {
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
    return(
        <div className='dashboard-content'>
            <h1> Late Return Book Form </h1>
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
                    <label htmlFor="physicalbookidlist">Book Code List</label>
                    <input type="text" required id="physicalbookidlist" ref={physicalBookIdList} />
                </div>
                <div className={classes.actions}>
                    <button>Confirm</button>
                </div>
            </form>
        </div>
    );
}