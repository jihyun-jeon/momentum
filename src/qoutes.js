const qoutes = [
  { qoute: '삶이 있는 한 희망은 있다', author: '키케로' },
  { qoute: '산다는것 그것은 치열한 전투이다', author: '로망로랑 ' },
  {
    qoute: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. ',
    author: '사무엘존슨 ',
  },
  {
    qoute: '언제나 현재에 집중할수 있다면 행복할것이다.',
    author: '파울로 코엘료 ',
  },
  { qoute: '신은 용기있는자를 결코 버리지 않는다', author: '켄러 ' },
  { qoute: '피할수 없으면 즐겨라', author: '로버트 엘리엇' },
  {
    qoute: '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에 ',
    author: '엘사 맥스웰 ',
  },
  { qoute: '내일은 내일의 태양이 뜬다 ', author: '로버트 엘리엇' },
  { qoute: '계단을 밟아야 계단 위에 올라설수 있다', author: '터키속담' },
  { qoute: '행복은 습관이다,그것을 몸에 지니라', author: '허버드' },
];

// ***** #quote 아래있는 모든 하위 span 중, 그 span 형제 요소 중 제일 첫 요소 *****
const qouteEl = document.querySelector('#quote span:first-child');
const authorEl = document.querySelector('#quote span:last-child');

const todaysQoutes = qoutes[Math.floor(Math.random() * qoutes.length)];
// 0~특정 수까지 random하려면 :mdn - 두 값 사이의 정수 난수 생성하기 참조하기
// 무조건 자름

qouteEl.innerHTML = todaysQoutes.qoute;
authorEl.innerHTML = ` - ${todaysQoutes.author}`;
