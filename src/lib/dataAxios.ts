import { $axiosConf } from "./axios";

export const dataApi = async () => {
  return await $axiosConf.get("/api.php?amount=30&type=multiple");
};
