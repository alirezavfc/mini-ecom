import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "../../context/SearchProvider";

function Layout() {
  return (
    <>
      <SearchProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </SearchProvider>
      <Footer />
    </>
  );
}

export default Layout;
