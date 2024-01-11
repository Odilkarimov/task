import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import useUsersApi from "../../../service/api/users";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../../../store/loader";

type FieldType = {
  fullName?: string;
  flowType?: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const { create } = useUsersApi();
  const { isloading } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    dispatch(startLoading(true));
    create(values)
      .then((data) => {
        if (data) {
          message.success("You are currently logged in");
          dispatch(endLoading(false));
          localStorage.setItem("token", data?.data.token);
          console.log(data);
          
          return navigate("/");
        }
      })
      .catch((error: any) => {
        dispatch(endLoading(false));
        message.error(error);
      });
  };
  return (
    <div className="flex-col flex items-center justify-center h-screen w-full leading-[50px]">
      <div className="w-full max-w-[500px]">
        <div className="flex items-start justify-start p-[15px]"></div>
        <h1 className="font-semibold text-[40px] text-center select-none">
          Sign up
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
            placeholder="Enter your fullName"
            autoComplete="current-fullName"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="flowType"
          rules={[{ required: true, message: "Please input your flowType!" }]}
        >
          <Input.Password
            size="large"
            placeholder="Enter your flowType"
            autoComplete="current-flowType"
          />
        </Form.Item>
        <Form.Item>
          <Button
            className="w-full h-[40px] mt-4"
            htmlType="submit"
            loading={isloading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;

// import React from "react";
// import { Button, Form, Input, message } from "antd";
// import { Link, useHistory } from "react-router-dom";
// import useUsersApi from "../../../service/api/users";
// import { useDispatch, useSelector } from "react-redux";
// import { endLoading, startLoading } from "../../../store/loader";

// const SignUp = () => {
//   const history = useHistory();
//   const { create } = useUsersApi();
//   const { isLoading } = useSelector((state) => state);
//   const dispatch = useDispatch();

//   const onFinish = (values) => {
//     dispatch(startLoading(true));
//     create(values)
//       .then((data) => {
//         if (data) {
//           message.success("Siz ro'yxatdan o'tdingiz");
//           dispatch(endLoading(false));
//           localStorage.setItem("token", data?.data.token);
//           console.log(data);
//           history.push("/");
//         }
//       })
//       .catch((error) => {
//         dispatch(endLoading(false));
//         message.error(error.message);
//       });
//   };

//   return (
//     <div className="flex-col flex items-center justify-center h-screen w-full leading-[50px]">
//       <div className="w-full max-w-[500px]">
//         <div className="flex items-start justify-start p-[15px]"></div>
//         <h1 className="font-semibold text-[40px] text-center select-none">
//           Ro'yxatdan o'tish
//         </h1>
//         <p className="text-center font-extralight select-none">
//           Yangi akkauntni oching{" "}
//           <Link to={"/sign-up"} className="text-blue-600 select-none">
//             Ro'yxatdan o'tish
//           </Link>
//         </p>
//       </div>
//       <Form
//         className="max-w-[500px] w-full p-[15px]"
//         name="basic"
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         autoComplete="on"
//       >
//         <Form.Item
//           name="fullName"
//           rules={[{ required: true, message: "Iltimos, ismingizni kiriting!" }]}
//         >
//           <Input
//             size="large"
//             placeholder="Ismingizni kiriting"
//             autoComplete="current-fullName"
//           />
//         </Form.Item>
//         <Form.Item
//           name="flowType"
//           rules={[{ required: true, message: "Iltimos, flowType ni kiriting!" }]}
//         >
//           <Input.Password
//             size="large"
//             placeholder="flowType ni kiriting"
//             autoComplete="current-flowType"
//           />
//         </Form.Item>
//         <Form.Item>
//           <Button
//             className="w-full h-[40px] mt-4"
//             htmlType="submit"
//             loading={isLoading}
//           >
//             Yuborish
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default SignUp;