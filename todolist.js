const title = document.querySelector(".title");
title.addEventListener("click", function(e){
    // console.log(e.target.textContent);
    // console.log(e.target.getAttribute("class"))
    // console.log(e.target.nodeName)
    //要讓只點擊到「檢視」才有作用的方法有下面兩種，①是非等於，②是抓到value這個值讓他等於「檢視」
    if(e.target.nodeName !== "INPUT"){ //①只要不是INPUT就return沒反應，即點到h2,span就無效
        return;
    } 
    // if(e.target.getAttribute("class") == "view"){
    //     console.log("OK")
    // }　②抓到class這個屬性讓他等於「view」
    console.log(e.target.getAttribute("value")) //抓取「檢視」這個值
});

// const target = document.querySelector(".view")
// target.addEventListener("click", function(e){
//     console.log(target);
//     if(target.value=="檢視"){
//         console.log("OK")
//     }
// })