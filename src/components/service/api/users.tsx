import api from "../axios";

const useUsersApi = () => {
  const login = async (data: any) => api.post("/user/login", { ...data });
  const create = async (data: any) => api.post("/user/create", { ...data });
  return { login, create };
};

export default useUsersApi;
