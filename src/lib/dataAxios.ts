import { $axiosConf } from "./axios";

export const dataApi = async () => {
  return await $axiosConf.get("/api.php?amount=10&type=multiple");
};
