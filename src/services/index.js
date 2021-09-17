export const signUp = (email, password, role) => {
  const url = 'https://lab-api-bq.herokuapp.com/users';
  return (
    fetch(url, {
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
  )
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