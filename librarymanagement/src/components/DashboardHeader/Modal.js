import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './NewCustomerForm.module.css';
function Modal(props) {
    const history = useNavigate();
    const [customerReturn, setCustomerReturn] = useState();
    const firstName = useRef();
    const lastName = useRef();
    const address = useRef();
    const phoneNumber = useRef();
    const active = true;
    function submitHandler(event) {
        event.preventDefault();
        const enteredFirstName = firstName.current.value;
        const enteredLastName = lastName.current.value;
        const enteredAddress = address.current.value;
        const enteredPhoneNumber = phoneNumber.current.value;
        const customerInfo = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            address: enteredAddress,
            phoneNumber: enteredPhoneNumber,
            active: active,
            numberOfTimeReturnLate: 0
        }
        function createNewCustomer() {
            fetch('http://localhost:8080/auth/customers', {
                method: 'POST',
                body: JSON.stringify(customerInfo),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => res.json())
                .then(() => history('/home'))
                .catch(err => console.log(err));
        }
        createNewCustomer();
    }
    function cancelHandler() {
        props.onCancel();
    }
    return (<div className='modal'>
        <p>New Customer?</p>
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="firstname">First Name</label>
                <input type="text" required id="firstname" ref={firstName} />
            </div>
            <div className={classes.control}>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" required id="lastname" ref={lastName} />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" ref={address} />
            </div>
            <div className={classes.control}>
                <label htmlFor="phonenumber">Phone Number</label>
                <input type="text" required id="phonenumer" ref={phoneNumber} />
            </div>
            <div className={classes.actions}>
                <button type='submit' className='btn'>Confirm</button>
            </div>
            <div className={classes.actions}>
                <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            </div>
        </form>
    </div>
    );
}
export default Modal;