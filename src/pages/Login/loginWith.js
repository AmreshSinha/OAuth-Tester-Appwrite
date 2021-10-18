import api from "../../api/api";

export const loginWith = async (provider) => {
    try {
      await api.loginWith(provider);
    } catch(error) {
      console.log(error.message);
    }
}