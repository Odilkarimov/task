import api from "../axios";

const useUsersApi = () => {
  const login = async (data: any) => api.post("/user/login", { ...data });
  return { login };
};

export default useUsersApi;
