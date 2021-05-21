import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});
export const api = {

  registerDonation: async (values) => {
    const res = await instance.post("/donation/donation", null , {params: values})
    return res
  },

  fetchDonations: async () => {
    const res = await instance.get("/donation/donation?_limit='20'")
    return res
  },

  totalDonations: async () => {
    const res = await instance.get("/donation/total")
    return res
  },

  registerSignature: async (values) => {
    const res = await instance.post("signature/signature", null, {params: values})
    return res
  },

  fetchSignatures: async () => {
    const res = await axios.get("/signature/signature?_limit='20'")
    return res
  },

  totalSignatures: async () => {
    const res = await axios.get("/signature/total")
    return res
  },


};
