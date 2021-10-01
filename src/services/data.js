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

export const postOrders = async (order) => {
  const url = "https://lab-api-bq.herokuapp.com/orders";
  const token = localStorage.getItem("userToken");
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({
      client: order.client,
      table: order.table,
      products: order.products
    }),
  });
  const response = await resp.json();
  return response;
};

export const getOrders = async () => {
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
