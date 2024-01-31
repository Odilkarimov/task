import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Group.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-between max-w-[1440px] mx-auto py-[20px] px-[15px] container-box">
      <div className="flex items-center justify-center gap-[24px]">
        <h2 className="font-semibold">SHOP</h2>
        <h2 className="font-semibold">EXPLORE</h2>
      </div>
      <img className="max-md:hidden" src={logo} alt="GROVEMADE" />
      <div>
        {localStorage.getItem("token") ? (
          <div className="flex items-center justify-center px-[15px] gap-[10px]">
            <h2>My Cart</h2>
            <Button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="text-red-500"
            >
              Log out
            </Button>
          </div>
        ) : (
          <div className="flex gap-[20px] px-[15px]">
            <Button onClick={() => navigate("/sign-in")}>Sign in</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
