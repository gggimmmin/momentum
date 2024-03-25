const quotes = [
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
    author: "나폴레옹",
  },
  {
    quote: "계단을 밟아야 계단 위에 올라설 수 있다.",
    author: "터키속담",
  },
  {
    quote:
      "고난의 시기에 동요하지 않는 것, 이것이 진정 칭찬 받을만한 뛰어난 인물의 증거다.",
    author: "베토벤",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author: "괴테",
  },
  {
    quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라.",
    author: "호라티우스",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "괴테",
  },
  {
    quote: "꿈을 이우기 위한 제일 첫 단계는 꿈에서 깨어나는 것이다.",
    author: "폴 발레리",
  },
  {
    quote: "당신이 할 수 있다고 믿든 할 수 없다고 믿든 믿는 대로 될 것이다.",
    author: "헨리 포드",
  },
  {
    quote:
      "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
    author: "헨리 포드",
  },
  {
    quote: "문제점을 찾지 말고 해결책을 찾으라.",
    author: "헨리 포드",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
