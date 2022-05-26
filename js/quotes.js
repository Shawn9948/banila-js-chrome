const quotes = [
    {
        quote: "유행은 유행에 뒤떨어질 수 밖에 없게 만들어진다.",
        author:"Gabriel Coco Chanel",
    },
    {
        quote: "부를 견딜 수 없다는 것은 의지박약의 증거이다.",
        author:"Seneca",
    },
    {
        quote: "죽을 힘을 다해 진실을 추구하다 보면, 비록 진실의 옷자락조차 잡지 못하겠지만, 스스로를 자유롭게 할 것이다.",
        author:"Clarence Darrow",
    },
    {
        quote: "자신을 화나게 했던 행동을 다른 이에게 행하지 말라.",
        author: "Socrates",

    },
    {
        quote: "시의적절한 침묵은 말보다 설득력 있다.",
        author: "Martin Farquhar Tupper",

    },
    {
        quote: "계산된 위험은 감수하라. 이는 단순히 무모한 것과는 완전히 다른 것이다.",
        author:"George S. Patton",
    },
    {
        quote: "숙고할 시간을 가져라, 그러나 행동할 때가 오면 생각을 멈추고 뛰어들어라.",
        author: "Napoleon Bonaparte",
    },
    {
        quote: "같은 것을 좋아하고 싫어하는 것이 바로 진정한 우정이다.",
        author: "Sallust",
    },
    {
        quote: "모든 문제에는 인내가 최고의 해법이다.",
        author: "Titus Maccius Plautus",
    },
    {
        quote: "야구는 90%가 정신력이다. 나머지는 신체적인 것이다.",
        author: "Yogi Berra",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
