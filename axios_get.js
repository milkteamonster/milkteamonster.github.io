
//抓一個json資料,在將資料內容放到html上

axios.get('https://hexschool.github.io/ajaxHomework/data.json') //抓取json資料
  .then(function (response) {
    let ary = response.data; //設一個array為那個json回傳的資料
    // console.log(ary[0].name);
    let title = document.querySelector(".title"); //選取html上的class
    title.textContent = ary[0].name; //將抓取到的部分顯示為json資料上的第一筆
    // console.log(response);
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  });
