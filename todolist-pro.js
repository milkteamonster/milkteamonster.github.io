const list = document.querySelector(".box");
list.addEventListener("click", function(e){
    // console.log(e.target.nodeName);
    if(e.target.getAttribute("class") == "view"){
    // or   if(e.target.nodeName == "INPUT"){
        console.log(e.target.getAttribute("value"))
    }

});
console.log(list);
