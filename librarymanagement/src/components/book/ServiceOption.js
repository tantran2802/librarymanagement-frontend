import { Link, Outlet } from "react-router-dom";
export default function Option(){
    return(
        <div>
            <header>
                <ul>
                    <li><Link className='hyperlink' to='/borrownote/bookservice' >Import Book</Link></li>
                    <li><Link className='hyperlink' to='/borrownote/customer' >List Customer</Link></li>
                    <li><Link className='hyperlink' to='/borrownote/borrow' >Borrow</Link></li>
                    <li><Link className='hyperlink' to='/borrownote/return' >Return</Link></li>
                    <li><Link className='hyperlink' to='/borrownote/returnlate' >Return Late</Link></li>
                    <li><Link className='hyperlink' to='/borrownote/borrow-notes' >BorrowNote</Link></li>
                </ul>
            </header>
            <Outlet/>
        </div>
    );
}