let data = [
    {
        content: "to do first thing"
    },
    {
        content: "brush my tooth"
    }
];

// ～～～～～組出list內的文字內容～～～～～
function renderData(){
let str = "";
data.forEach(function(item, index){
    str+=`<li>${item.content} <input type="button" data-num="${index}" value="刪除待辦" class="remove"></li>`
})
const list = document.querySelector(".list");
list.innerHTML = str;
}

renderData(); //這個會把data array內原本的內容帶進來，若沒有的初始的話會是空白的

// ～～～～～新增待辦  將輸入文字帶進list內～～～～～
const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
save.addEventListener("click", function(e){
    if(txt.value == ""){
        return
    }
    let obj = {}; //做一個新陣列為了組好格式後等下放回data裡
    obj.content = txt.value;
    // txt.value = obj.push(data.content); 這個思路是錯的
    data.push(obj);
    renderData();
})

// ～～～～～刪除待辦～～～～～
const list = document.querySelector(".list");
list.addEventListener("click", function(e){
    if(e.target.nodeName !== "INPUT"){
        return
    }; //如果沒有寫這段，點到整個li而不是按鈕的話也會被消除
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    renderData();
})



