import SideBar from '../Sidebar/index';
import sidebar_menu from '../../constants/sidebar-menu'
export default function Layout(props){
    return(
        <div className="dashboard-container">
            <SideBar menu={sidebar_menu} />
            <div className='dashboard-body'>{props.children}</div>
        </div>
    );
}