export const signUp = (user) => {
  const url = 'https://lab-api-bq.herokuapp.com/users';
  return (
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
        restaurant: 'AstroBurger'
      })
    })
  )
}

export const loginWithEmailAndPassword = async (email, password) => {
  const url = 'https://lab-api-bq.herokuapp.com/auth';
  const response = await (
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
  return response;
}