export const API_BASE = "https://dogsapi.origamid.dev/json";
export const URLDois = "https://dogsapi.origamid.dev/json";

export const Token_Post = (body) => {
  return {
    url: URLDois + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};
export const Token_Validate_Post = (token) => {
  return {
    url: URLDois + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        authorization: "Bearer" + token,
      },
    },
  };
};

export const Get_User = (token) => {
  return {
    url: URLDois + "/api/user",
    options: {
      method: "GET",
      headers: {
        authorization: "Bearer" + token,
      },
    },
  };
};
export const User_POST = (body) => {
  return {
    url: URLDois + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};
