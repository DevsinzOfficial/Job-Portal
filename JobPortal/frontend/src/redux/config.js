export const authHeader = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

export const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};
