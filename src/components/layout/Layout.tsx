import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout (){
    return(
        <>
                <Header />
                <Aside />
                <main>
                    <Outlet />
                </main>
                <Footer />
        </>

    )
}

export default Layout;