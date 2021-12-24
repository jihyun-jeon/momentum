const weatherEl = document.querySelector('#weather span:first-child'); // span요소의 형제 요소 중 젤 위에 span요소
const cityEl = document.querySelector('#weather span:last-child');

function ok(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const APIkey = '91143b3c888751ffcd5ce4c95b4a11ba';
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      cityEl.innerHTML = data.name;
      weatherEl.innerHTML = `${data.weather[0].main}/${data.main.temp}`;
    });
}
//
function err() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(ok, err);
//Navigator.geolocation: 사용자에게 알림을 보내고 권한을 허용할지 묻게됨.
//Geolocation.getCurrentPosition(허용시 실행할 함수, error시 실행할 함수)
