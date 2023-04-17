import axios from "axios";

export const getToken = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_TOKEN_URL}/api/v3/clients/accesstoken`,
      {
        idClient: import.meta.env.VITE_ClientID,
        paramValue: import.meta.env.VITE_DeviceID,
      },
      {
        headers: {
          "Content-Type": "application/json",
          AccessKey: import.meta.env.VITE_AccessKey,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getBonus = async (accessToken: string) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_USER_BONUS
      }/api/v3/ibonus/generalinfo/${accessToken}`,
      {
        headers: {
          "Content-Type": "application/json",
          AccessKey: import.meta.env.VITE_AccessKey,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
