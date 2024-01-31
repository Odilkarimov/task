import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <div>
        <header>
            <nav className="py-[30px]">
                <Navbar />
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        </div>
  )
}

export default Layout;