
// console.log(axios);
let ary =[];
axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) {
    ary = response.data;
    
    console.log(ary);
    console.log("321")
    // console.log(ary);
    // let ary = response.data;
    // console.log(ary[0].name);
    // const title = document.querySelector(".title");
    // title.textContent = ary[0].name;
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
    // console.log('資料有回傳了');
    // ary = response.data;
  });
  console.log("123");
  // function renderData(){
  //   console.log(ary);
  // }
  // console.log(ary);
