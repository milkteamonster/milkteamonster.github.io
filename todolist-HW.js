let data = [
  
];
// let content = `<li>
//         <label class="checkbox" for="">
//           <input type="checkbox"/>
//           <span>${item.content}</span>
//         </label>
//         <a href="#" class="delete" data-num="${index}"></a>
//       </li>`;

//組出下面字串
function renderData(){
    let str = "";
    data.forEach(function(item, index){
        let content = `<li>
        <label class="checkbox" for="">
          <input type="checkbox"/>
          <span>${item.content}</span>
        </label>
        <a href="#" class="delete" data-num="${index}"></a>
      </li>`
        str += content
        // `<li>${item.content} <input type="button" data-num="${index}" value="刪除待辦" class="remove"></li>`
        

    })
    const list = document.querySelector(".list");
    list.innerHTML = str;
    }
    
    renderData();


//寫入代辦
const txt = document.querySelector(".txt")
const btnAdd = document.querySelector(".btn_add")
btnAdd.addEventListener("click", function(e){
    if(txt.value == ""){
        alert("pls enter your todothings");
        return
    }
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderData();
    txt.value = "";
})

//刪除代辦
const list = document.querySelector(".list");
list.addEventListener("click", function(e){
    if(e.target.nodeName !== "A"){
        return
    };
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    renderData();
})

//篩選器
const filter = document.querySelector(".tab");
const all = document.querySelector(".all");
const undone = document.querySelector(".undone");
const done = document.querySelector(".done");

undone.addEventListener("click", function(e){
    undone.setAttribute("class", "active");
    all.removeAttribute("class", "active");
    done.removeAttribute("class", "active");

})

done.addEventListener("click", function(e){
    done.setAttribute("class", "active");
    all.removeAttribute("class", "active");
    undone.removeAttribute("class", "active");
    renderDone();
})

all.addEventListener("click", function(e){
    all.setAttribute("class", "active");
    undone.removeAttribute("class", "active");
    done.removeAttribute("class", "active");
})


function renderDone(){
  let checked = document.querySelectorAll("input[type=checkbox]:checked");
  console.log(checked) //因為是querySelectAll,回傳的是nodelist



  // total=0;
  // let str = "";
  // checked.forEach(function(item, index){
  //   let content = `<li>
  //       <label class="checkbox" for="">
  //         <input type="checkbox"/>
  //         <span>${item.content}</span>
  //       </label>
  //       <a href="#" class="delete" data-num="${index}"></a>
  //     </li>`
  //     str += content;
  // })
  // const list = document.querySelector(".list");
  // list.innerHTML = str;


  // let total = 0;
  // let newdone =[];
  // let str = "";
  // data.forEach(function(item, index){
  //   if(item == checked){
  //     total+=1;
  //     newdone.push(item);
  //   }
  // })

  // list.innerHTML = str;
  }
  
  


// let content = `<li>
//         <label class="checkbox" for="">
//           <input type="checkbox"/>
//           <span>${item.content}</span>
//         </label>
//         <a href="#" class="delete" data-num="${index}" data-check="checked"></a>
//       </li>`;






//====================================================以下還沒想通先忽略
// let content = `<li>
//         <label class="checkbox" for="">
//           <input type="checkbox"/>
//           <span>${item.content}</span>
//         </label>
//         <a href="#" class="delete" data-num="${index}"></a>
//       </li>`;

// filter.addEventListener("click", function(e){
//     console.log("clicked");
//     if(e.target.value == undefined){
//         console.log("you clicked the wrong place");
//         return; 
//     };
//     if(e.target.value == all){
//         console.log("you clicked all");
//     };
//     let checkBox = document.querySelectorAll("input[type=checkbox]");
//     console.log("checked");
//     let str = "";
//     data.forEach(function(item, index){
//         console.log(e.target.value == item.Charge); 
//         if(e.target.value == all){
//             str += `<li>
//             <label class="checkbox" for="">
//               <input type="checkbox"/>
//               <span>${item.content}</span>
//             </label>
//             <a href="#" class="delete" data-num="${index}"></a>
//           </li>`;
//         } else if(e.target.value == undone){
//             str += `<li>
//             <label class="checkbox" for="">
//               <input type="checkbox"/>
//               <span>${item.content}</span>
//             </label>
//             <a href="#" class="delete" data-num="${index}"></a>
//           </li>`;
//         } else{
//             str += `<li>
//             <label class="checkbox" for="">
//               <input type="checkbox"/>
//               <span>${item.content}</span>
//             </label>
//             <a href="#" class="delete" data-num="${index}"></a>
//           </li>`;
//         }
//     })

//     renderData();
// })