import { Link } from 'react-router-dom'
import './navigation.css'
function Navi() {
    return (
    <header className='header'>
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <ul className="menu">
                        <li><Link className='hyperlink' to='/home' >Home</Link></li>
                        <li><Link className='hyperlink' to='/bookservice' >Book</Link></li>
                        <li><Link className='hyperlink' to='/history'>History</Link></li>
                        <li><Link className='hyperlink' to='/report'>Report</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    );
}
export default Navi;