export async function signUp (email, password, role) {
  const url = 'https://lab-api-bq.herokuapp.com/users';
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password,
      role: role,
      restaurant: "astroBurger"
    })
  })
  const response = await resp.json();
  return response;
}

export const signInWithEmailAndPassword = (email, password) => {
  const url = 'https://lab-api-bq.herokuapp.com/auth';
  return (
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
  )
}