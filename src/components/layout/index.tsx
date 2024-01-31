import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Layout = () => {
    if (!localStorage.getItem("token")) return <Navigate to={"/sign-in"} />;
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