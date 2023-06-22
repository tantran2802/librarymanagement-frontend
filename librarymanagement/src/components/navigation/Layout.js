import Navi from "./navigation";
import classes from './layout.module.css';
import SideBar from '../Sidebar/index';
import sidebar_menu from '../../constants/sidebar-menu'
export default function Layout(props){
    return(
        <div className={classes.structure}>
            <SideBar menu={sidebar_menu} />
            <Navi />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}