import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import useUsersApi from "../../../service/api/users";
import { useDispatch, useSelector } from "react-redux";
import loader, { endLoading, startLoading } from "../../../store/loader";

type FieldType = {
  fullName?: string;
  password?: string;
  remember?: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useUsersApi();
  const { isloading } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    dispatch(startLoading(true));
    login(values).then((data) => {
      if (data) {
        message.success("You are currently logged in")
        dispatch(endLoading(false));
        localStorage.setItem("token", data?.data.token);
        return navigate("/");
      }
    }).catch((error: any) => {
        dispatch(endLoading(false));
        message.error(error);
        
    })
  };
  return (
    <div className="flex-col flex items-center justify-center h-screen w-full leading-[50px]">
      <div className="w-full max-w-[500px]">
        <div className="flex items-start justify-start p-[15px]"></div>
        <h1 className="font-semibold text-[40px] text-center select-none">
          Sign in
        </h1>
        <p className="text-center font-extralight select-none">
          open a new account
          <Link to={"/sign-up"}>
            <span className="text-blue-600 select-none"> Sign up</span>
          </Link>
        </p>
      </div>
      <Form
        className="max-w-[500px] w-full p-[15px]"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="on"
      >
        <Form.Item<FieldType>
          name="fullName"
          rules={[{ required: true, message: "Please input your Fullname!" }]}
        >
          <Input
            size="large"
            placeholder="Enter your username"
            autoComplete="current-username"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            size="large"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
        </Form.Item>
        <Form.Item>
          <Button className="w-full h-[40px] mt-4" htmlType="submit" loading={isloading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
