const buttonEl = document.querySelector('button');
// 定義了一個常量 inputEl，它選取了文檔中的第一個 <input> 元素
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

// 定義了一個名為 addGoal 的函數，用於在用戶觸發某些事件時（稍後將看到具體觸發方式）調用
function addGoal() {
    // 定義了一個常量 enteredValue，用於儲存 inputEl（輸入框）當前的值（即用戶輸入的文本）
    const enteredValue = inputEl.value;
    // 創建了一個新的 <li> 元素（列表項目），並將其存儲在 listItemEl 變量中
    const listItemEl=document.createElement('li');
    listItemEl.textContent=enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value='';
}

// 之前選取的按鈕元素（buttonEl）添加了一個事件監聽器，當按鈕被點擊時，將調用 addGoal 函數。這是整個代碼交互的觸發點，用戶點擊按鈕時，將輸入的內容添加到列表中
buttonEl.addEventListener('click', addGoal)