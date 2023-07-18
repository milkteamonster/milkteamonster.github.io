// let data = [1,3,5,7,9,"10","13"];
// let newData = [];
// data.forEach(function(item, index){
//     console.log(item)
//     if(typeof item === "number"){
//         newData.push(item)
//          console.log(item)
//     }
// });
// let title = document.querySelector(".title");
// title.textContent = newData;

let data = [1,2,3,4,5,6,7];
let number = {
    oddNum: [],
    evenNum: []
};

data.forEach(function(item, index){
    if(item%2 === 0){
        number.evenNum.push(item);
        console.log(item)
    } else{
        number.oddNum.push(item)
        console.log(item)
    }
})
let title = document.querySelector(".title"); 
    title.textContent = `奇數為${number.oddNum}` + `偶數為${number.evenNum}`;

