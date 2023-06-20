import { Link } from "react-router-dom";
export default function Option(){
    return(
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <ul className="menu">
                        <li><Link className='hyperlink' to='/bookservice/importphysicalbook' >Import Book</Link></li>
                        <li><Link className='hyperlink' to='/bookservice/borrownote' >Borrow Note</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}