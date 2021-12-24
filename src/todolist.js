/** 실행1 */
const toDoFormEl = document.querySelector('#todo-form');
const toDoInputEl = toDoFormEl.querySelector('input');
const toDoListUl = document.querySelector('#todo-list');

const todosKey = 'todos';
let todos = []; //페이지를 새로고침하면 1번부터 아예 새로 시작되게 됨. 따라서 초기화 된 것.
//const가 아니라 let으로 바꿔줌? 왜? - 배열 안에 값을 바꿀 수는 있지만, 배열에 값을 재할당 하기위해 let으로 바꾼 것임.

/** 이벤트 실행2 */
function handleToDoSubmit(e) {
  e.preventDefault();
  let newTodo = toDoInputEl.value;
  toDoInputEl.value = '';

  let obj = { text: newTodo, id: Date.now() };
  todos.push(obj);

  saveToDos();
  paintToDo(obj);
  //console.log(todos); // 질문1).todos 배열은 페이지를 새로고침 하면 초기화 된다. 왜? todos는 전역이여서 계속 요소가 쌓여야 하는게 아닌지?
}

/** 이벤트 실행3 */
//todolist를 기억하여 새로고침해도 기존 데이터가 바뀌지 않도록 저장해줌.
function saveToDos() {
  localStorage.setItem(todosKey, JSON.stringify(todos));
  // ★★★★★localStorage는 텍스트만 추가할 수 있어서 stringify()를 이용해 배열 자체를 텍스트로 만듦
}

/** 이벤트 실행4 */
function paintToDo(obj) {
  const liEl = document.createElement('li');
  liEl.id = obj.id;
  const spanEl = document.createElement('span');
  spanEl.innerHTML = obj.text;

  const btnEl = document.createElement('button');
  btnEl.innerHTML = '❌';

  toDoListUl.appendChild(liEl);
  liEl.appendChild(spanEl);
  liEl.appendChild(btnEl);

  btnEl.addEventListener('click', (e) => {
    const removeLe = e.target.parentElement; // ★★★★★ button 의 부모요소인 li를 찾게 됨.
    removeLe.remove();

    let newTodos = todos.filter((el) => el.id !== +removeLe.id);
    // ★★★★★ removeLe.id가 string인 이유: html에 속성들은 다 string임 (but data-set처럼 "data-**" 이런건 넣었을때의 값이 그대로 나옴)
    todos = newTodos;
    saveToDos();

    // const removeLe = e.target.parentElement; // ★★★★★ button 의 부모요소인 li를 찾게 됨.
    // console.log(removeLe.id);
    // removeLe.remove();
  });
}

/** 실행2 */ /** 이벤트 실행1 */
toDoFormEl.addEventListener('submit', handleToDoSubmit);

/** 실행3 */
/* localStorag로 저장되어 있는 리스트 값을 가져옴 */
// 새로고침 하면 todos 배열이 초기화 된 상태로 다시 localStorage되기 때문에 이전에 저장되어 있는 값들을 미리 todos 배열에 넣어 준 후,
//submit 이벤트로 인해 다른 list들이 중첩되어 저장되는 것임.
const savedTodos = localStorage.getItem(todosKey);
//savedTodos은 배열 자체가 string임. 따라서 JSON.parse()를 통해 문자를 실제 js 객체로 바꿔줌
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos); // 저장되 있는 리스트가 배열로 나옴[list1,list2,...]
  todos = parsedToDos; // 질문2) 잘 이해x ★★★★★ 이전에 로컬에 저장된 배열을 todos에 저장해 놓고 시작하면 빈배열이 아니라 이전 내역부터 쌓이게 되는 것임.
  parsedToDos.forEach(paintToDo); // forEach안에 함수이름만 적어주면, 그 함수에 인자로 배열요소가 하나씩 들어가면서 콜백함수가 실행됨.
}
