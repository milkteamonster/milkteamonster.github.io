const apiUrl = `https://todoo.5xcamp.us`
// let token ="";
//Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0NjcwIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjg4OTExMjg1LCJleHAiOjE2OTAyMDcyODUsImp0aSI6IjhhMGFkN2UzLTk0OTUtNDNjOS1iYWRmLTIyOGEyZjRlOGNlMiJ9.6LqnmBrE15WA9U02Tez1_T96oAmHzdJJLjcD-zc6d9k
//Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Njc4Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjg4OTk2MTAzLCJleHAiOjE2OTAyOTIxMDMsImp0aSI6ImVjMmY5ODcyLWQ1ZjYtNGJkYy05NzE3LWNjZGU5YTM2YzQ3MSJ9.wi6W4sWNfPG6YcOCXkx_nk0ivACagI8acsVjC0nEcOA
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
        axios.defaults.headers.common['Authorization'] = res.headers.authorization; //可以把token放在全域，這樣就不用下面每個function都夾header token
        // token = res.headers.authorization;
    })
    .catch(error=>console.log(error.response))
}

function getTodo(){
    axios.get(`${apiUrl}/todos`)
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

function deleteTodo(todoId){
    axios.delete(`${apiUrl}/todos/${todoId}`,{
        headers:{
            'Authorization': token
        }
    })
    .then(res=>console.log(res))
    .catch(error=>console.log(error.response))
}

function toggleTodo(todoId){ 
    axios.patch(`${apiUrl}/todos/${todoId}/toggle`,{},{ //patch預設是要帶值得但這個API沒有帶值，所以還是需要帶一個大{}
        headers:{
            'Authorization': token
        }
    }) 
    .then(res=>console.log(res))
    .catch(error=>console.log(error.response))
}