import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-between max-w-[1200px] mx-auto py-[20px] px-[15px]">
      <h2>Navbar</h2>
      <div>
        {localStorage.getItem("token") ? (
          <div className="flex px-[15px]">
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
            <Button onClick={() => navigate("/sign-up")}>Sign up</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
