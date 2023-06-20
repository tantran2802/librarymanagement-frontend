import Navi from "./navigation";
import classes from './layout.module.css'
export default function Layout(props){
    return(
        <div>
            <Navi />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}