const token = localStorage.getItem("userToken");

export const getProducts = async () => {
  const url = "https://lab-api-bq.herokuapp.com/products";
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

export const postOrders = async (order, products) => {
  const url = "https://lab-api-bq.herokuapp.com/orders";
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({
      client: order.client,
      table: order.table,
      products: products
    }),
  });
  const response = await resp.json();
  return response;
};

export const getOrders = async () => {
  const url = "https://lab-api-bq.herokuapp.com/orders";
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

export const updateOrders = async (orderId, orderStatus) => {
  const url = `https://lab-api-bq.herokuapp.com/orders/${orderId}`;
  const resp = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({
     status : orderStatus
    }),
  });
  const response = await resp.json();
  return response;

};