import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});
export const api = {

  registerDonation: async (values) => {
    const res = await instance.post("/donation/donation", null , {params: values})
    return res
  },

  totalDonations: async () => {
    const res = await axios.get("http://localhost:3000/api/donation/total")
    return res
  },
};
