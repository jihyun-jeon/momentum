let imgs = ['1.jpeg', '2.jpeg', '0.jpeg'];
let imgNumber = Math.floor(Math.random() * imgs.length); // random 정수로???????

const imgEl = document.createElement('img');

imgEl.src = `img/${imgNumber}.jpeg`;
imgEl.setAttribute('class', 'img');

document.body.append(imgEl); // ★★★★★

/*
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random() * (max - min)) + min);
}

getRandomInt(1, 5); //1~4
*/
