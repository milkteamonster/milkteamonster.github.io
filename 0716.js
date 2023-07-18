
// function printEvery3(){
//     for(let i =1; i<=88; i+=3){
//         console.log(i)
//     }
// }
// printEvery3();

function numA(x){
    return x*x;
}
console.log(numA(4));

const newB = function(x){
    return x*x;
}

const newC = (x) => {
    return x*x;
}

const newD = x => `數字相乘 ${x*x}`;

const data = [1,2,3,4,]
const newData = data.map(function(item){
    return item +2;
})
console.log(newData)

const array = [1,2,3,4,]
const arrowData = array.map (item=>item+3);
console.log(arrowData)