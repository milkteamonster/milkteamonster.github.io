const apiUrl = `https://todoo.5xcamp.us`
let token ="";
//Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0NjcwIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjg4OTExMjg1LCJleHAiOjE2OTAyMDcyODUsImp0aSI6IjhhMGFkN2UzLTk0OTUtNDNjOS1iYWRmLTIyOGEyZjRlOGNlMiJ9.6LqnmBrE15WA9U02Tez1_T96oAmHzdJJLjcD-zc6d9k
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
    .then(res=>{
        token = res.headers.authorization;
    })
    .catch(error=>console.log(error.response))
}

function getTodo(){
    axios.get(`${apiUrl}/todos`,{
        headers:{
            'Authorization': token
        }
    })
    .then(res=>console.log(res))
    .catch(error=>console.log(error.response))
}

function addTodo(todo){
    axios.post(`${apiUrl}/todos`,{
        "todo": {
          "content": todo
        }
    },{
        headers:{
            'Authorization': token
        }
    })
    .then(res=>console.log(res))
    .catch(error=>console.log(error.response))
}

function edditTodo(todo, todoId){
    axios.put(`${apiUrl}/todos/${todoId}`,{
        "todo": {
          "content": todo
        }
    },{
        headers:{
            'Authorization': token
        }
    })
    .then(res=>console.log(res))
    .catch(error=>console.log(error.response))
}