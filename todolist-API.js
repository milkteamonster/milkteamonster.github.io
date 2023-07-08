const apiUrl = `https://todoo.5xcamp.us`

function signUp(email,nickname,password){
    axios.post(`${apiUrl}/users`,{
        "user": {
            "email": email,
            "nickname": nickname,
            "password": password
          }
    })
    .then(res=>console.log(res))
    .catch(error=>console.log(error.response))
}

function logIn(email,password){
    axios.post(`${apiUrl}/users/sign_in`,{
        "user": {
            "email": email,
            "password": password
          }
    })
    .then(res=>console.log(res))
    .catch(error=>console.log(error.response))
}
