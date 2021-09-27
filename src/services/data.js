export const getProducts = async () => {
  const url = "https://lab-api-bq.herokuapp.com/products";
  const token = localStorage.getItem("userToken");
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${token}`,
    },
  });

  const response = await resp.json();
  return response;
};
