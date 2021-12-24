const clockEl = document.querySelector('#clock');

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  //String() -> number에서 string으로 변함
  // padStart :길이가 2개가 되야하는데 2개가 아니라면 앞에 0을 채운다(string에 대한 메소드임)
  clockEl.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock(); //페이지를 키자마자 현재 시간이 나옴 (한번만 실행)
setInterval(getClock, 1000); //페이지 킨 후 1초 후에 나옴 (1초마다 계속 실행)
