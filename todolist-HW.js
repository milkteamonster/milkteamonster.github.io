let data = [];

// 組出下面字串
function renderData() {
  let str = "";
  data.forEach(function (item, index) {
    let content = `<li>
      <label class="checkbox" for="">
        <input type="checkbox"/>
        <span>${item.content}</span>
      </label>
      <a href="#" class="delete" data-num="${index}"></a>
    </li>`;
    str += content;
  });
  const list = document.querySelector(".list");
  list.innerHTML = str;
  updateTab();
}

function updateTab() {
  const allTab = document.querySelector(".all");
  const undoneTab = document.querySelector(".undone");
  const doneTab = document.querySelector(".done");
  const checkboxList = document.querySelectorAll(".list input[type='checkbox']");

  // add: 各个tab点击之后current判断
  if (undoneTab.classList.contains("active")) {
    checkboxList.forEach(function (checkbox) {
      const listItem = checkbox.closest("li");
      listItem.style.display = checkbox.checked ? "none" : "block";
    });
  } else if (doneTab.classList.contains("active")) {
    checkboxList.forEach(function (checkbox) {
      const listItem = checkbox.closest("li");
      listItem.style.display = checkbox.checked ? "block" : "none";
    });
  } else {
    checkboxList.forEach(function (checkbox) {
      const listItem = checkbox.closest("li");
      listItem.style.display = "block";
    });
  }
}

// 寫入代辦
const txt = document.querySelector(".txt");
const btnAdd = document.querySelector(".btn_add");
btnAdd.addEventListener("click", function (e) {
  if (txt.value == "") {
    alert("pls enter your todothings");
    return;
  }
  let obj = {};
  obj.content = txt.value;
  data.push(obj);
  renderData();
  txt.value = "";
});

// 刪除代辦
const list = document.querySelector(".list");
list.addEventListener("click", function (e) {
  if (e.target.nodeName !== "A") {
    return;
  }
  let num = e.target.getAttribute("data-num");
  data.splice(num, 1);
  renderData();
});

// 篩選器
const filter = document.querySelector(".tab");
const all = document.querySelector(".all");
const undone = document.querySelector(".undone");
const done = document.querySelector(".done");

// 全部的tab
all.addEventListener("click", function (e) {
  all.classList.add("active");
  undone.classList.remove("active");
  done.classList.remove("active");
  renderData();
});

// 待完成的tab
undone.addEventListener("click", function (e) {
  undone.classList.add("active");
  all.classList.remove("active");
  done.classList.remove("active");
  updateTab();
});

// 已完成的tab
done.addEventListener("click", function (e) {
  done.classList.add("active");
  all.classList.remove("active");
  undone.classList.remove("active");
  updateTab();
});

// add: checkbox的处理
list.addEventListener("change", function (e) {
  if (e.target.nodeName === "INPUT") {
    updateTab();
  }
});

renderData();
