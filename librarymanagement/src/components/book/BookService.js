import Option from "./ServiceOption";
import { Outlet } from "react-router-dom";
export default function BookService(props) {
  return (
    <div>
      <Option />
      <div>
        <Outlet />
        {/* <main>{props.children}</main> */}
      </div>
    </div>
  );
}
