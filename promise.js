const checkScore = new Promise((resolve, reject)=>{
    console.log("正在批改中");
    setTimeout(()=>{
        const score = Math.round(Math.random()*100);
    if(score>=60){
        resoleve(score);
    } else{
        reject("不及格")
    }
    }, 2000)
})

checkScore
    .then(data => console.log(data))
    .catch(error => console.log(error));