export const signUpAdm = () => {
  const url = 'lab-api-bq.herokuapp.com/users';
  return (
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: "adm",
        email: "astroburger@mail.com",
        password: "sample",
        role: "adm",
        restaurant: "astroBurger"
      })
    })
  )
}

// export const signUp = () => {
//   const url = 'lab-api-bq.herokuapp.com/users';
//   return (
//     fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: "adm",
//         email: "astroburger@mail.com",
//         password: "sample",
//         role: "adm",
//         restaurant: "astroBurger"
//       })
//     })
//   )
// }

export const signInWithEmailAndPassword = (email, password) => {
  const url = 'lab-api-bq.herokuapp.com/auth';
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