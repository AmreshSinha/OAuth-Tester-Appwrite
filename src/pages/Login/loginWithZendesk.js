import api from "../../api/api";

export const loginWithZendesk = async () => {
    try {
      await api.loginWithZendesk();
    } catch(error) {
      console.log(error.message);
    }
}