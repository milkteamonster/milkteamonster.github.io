//https://hex-escape-room.herokuapp.com/api/user/signup
//https://hex-escape-room.herokuapp.com/api/user/signin

//註冊功能定義
const account = document.querySelector(".account");
const password = document.querySelector(".password");
const send = document.querySelector(".send");
const signupStatus = document.querySelector(".signup-status");

//登入功能定義
const loginAccount = document.querySelector(".loginAccount");
const loginPassword = document.querySelector(".loginPassword");
const login = document.querySelector(".login");
const loginStatus = document.querySelector(".login-status");

//註冊功能執行
send.addEventListener("click", function(e){
    console.log("been clicked")
    console.log(account.value)
    console.log(password.value)
    callSignUp()
});
//登入功能執行
login.addEventListener("click", function(e){
    console.log("been send")
    console.log(loginAccount.value)
    console.log(loginPassword.value)
    callLogin()
});

//註冊功能邏輯
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
        // signupStatus.textContent = "*" + response.data.message;
        if(response.data.message == "帳號註冊成功"){
            signupStatus.textContent = "恭喜註冊成功！"
        } else{
            signupStatus.textContent = "*" + response.data.message;
        }
        account.value = "";
        password.value = "";
        loginStatus.textContent = ""
      })
      .catch(function (error) {
        console.log(error);
      });
}
//登入功能邏輯
function callLogin(){
    // if(loginAccount.value == "" || loginPassword.value == ""){
    //     alert("請填寫正確資訊");
    //     return;
    // };
    let obj = {}
    obj.email = loginAccount.value;
    obj.password = loginPassword.value;
    axios.post('https://hex-escape-room.herokuapp.com/api/user/signin', obj)
    .then(function (response) {
        if(response.data.message == "登入成功"){
            signupStatus.textContent = "" //先使用註冊功能，紅色文字顯示「＊此帳號已被使用」→用註冊的帳密登入，若登入成功後希望先取消「＊此帳號已被使用」再跳alert視窗的話該如何寫？
            alert("恭喜登入成功！");
        } else{
            loginStatus.textContent = response.data.message + "!";
        }
        loginAccount.value = "";
        loginPassword.value = ""
      })
      .catch(function (error) {
        console.log(error);
      });
}