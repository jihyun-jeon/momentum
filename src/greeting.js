let loginForm = document.querySelector('#login-form');
let loginInput = document.querySelector('#login-form input');
let btnEl = document.querySelector('#login-form button'); //
let greetingEl = document.querySelector('#greeting');

/** 변수 값이 "스트링만"으로 된 "어떤 정보를 담은" 변수는 대문자로 하기 */
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

/** form이 보여지고 입력값을 저장해, h1 출력 */
function onLoginSubmit(e) {
  if (loginInput.value === '') {
    alert('이름을 입력하시오');
    return;
  }
  //원래 엔터나 버튼 클릭 할 떄마다, submit되서 새로고침이 되어 input의 값이 저장되지 않는데,
  //default를 함으로써 클릭되도 양식이 submit되지 않고 값이 저장되어 기억되게 됨.
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem('username', username);
  //localStorage:브라우져에 뭔가 저장하고, 나중에 다시 갖다 쓸 수 있게됨.
  //localStorage.setItem(키:저장할 값의 이름, 값:저장할 값);
  //localStorage.getItem(이름)
  //localStorage.removeItem(이름)

  paintGreetings(username);
}

/** h1이 보여지는 함수*/
function paintGreetings(username) {
  greetingEl.innerHTML = `Hello, ${username}!`;
  greetingEl.classList.remove(HIDDEN_CLASSNAME);
}

/* 처음엔 form과 h1(greeting) 둘다 숨긴 채 시작 하고
localStorage에 이미 이름이 저장되 있는지 확인 후, 있으면 form을 보여주지x */
let savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
