import api from "../../api/api";

export const loginWithDiscord = async () => {
    try {
      await api.loginWithDiscord();
    } catch(error) {
      console.log(error.message);
    }
}