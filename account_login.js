//https://hex-escape-room.herokuapp.com/api/user/signup

const account = document.querySelector(".account");
const password = document.querySelector(".password");
const send = document.querySelector(".send");
const message = document.querySelector(".message");
send.addEventListener("click", function(e){
    console.log("been clicked")
    console.log(account.value)
    console.log(password.value)

    callSignUp()
});

function callSignUp(){
    // email: 'lovef2e@hexschool.com',
    // password: '12345678'
    if(account.value == "" || password.value == ""){
        alert("請填寫正確資訊");
        return;
    };
    let obj = {}
    obj.email = account.value;
    obj.password = password.value;
    axios.post('https://hex-escape-room.herokuapp.com/api/user/signup', obj)
    .then(function (response) {
        // message.textContent = "*" + response.data.message;
        if(response.data.message == "帳號註冊成功"){
            message.textContent = "恭喜註冊成功！"
        } else{
            message.textContent = "*" + response.data.message;
        }
        account.value = "";
        password.value = "";
      })
      .catch(function (error) {
        console.log(error);
      });
}