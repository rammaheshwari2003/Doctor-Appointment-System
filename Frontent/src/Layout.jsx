import { Outlet } from "react-router-dom";
import TopMenu from "./Component/TopMenu";
const Layout=()=>{
    return(
        <>
            <TopMenu />
            <Outlet />
        </>
    )
}
export default Layout;