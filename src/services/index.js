export const signUp = async (email, password, role) => {
  const url = "https://lab-api-bq.herokuapp.com/users";
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      role: role,
      restaurant: "astroBurger",
    }),
  });
  const response = await resp.json();
  return response;
};

export const loginWithEmailAndPassword = async (email, password) => {
  const url = "https://lab-api-bq.herokuapp.com/auth";
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const response = await resp.json();
  return response;
};
