const quotes = [
    {
        quote: "배움은 죽을 때까지 끝나지 않는다.",
        author: "로버트 E. 리"
    },
    {
        quote: "삶은 스스로 발견하는 것이다.",
        author: "아나이스 닌"
    },
    {
        quote: "배우는 것을 멈춘 사람은 죽은 사람과 다름없다.",
        author: "알버트 아인슈타인"
    },
    {
        quote: "삶은 10%가 당신이 겪는 일이고, 90%는 그것에 어떻게 반응하는가이다.",
        author: "찰스 R. 스윈돌"
    },
    {
        quote: "배움은 우리를 무한히 자유롭게 만든다.",
        author: "레나토 코멘도라"
    },
    {
        quote: "삶은 내가 직접 만드는 것이며, 그것이 바로 삶의 의미이다.",
        author: "조지 버나드 쇼"
    },
    {
        quote: "배움의 목적은 성장이며, 우리의 마음과 정신을 확장시키는 것이다.",
        author: "머리 하퍼트"
    },
    {
        quote: "삶은 스스로를 발견하는 여행이다.",
        author: "안토니 드 멜로"
    },
    {
        quote: "배움은 모든 사람에게 평등한 기회를 제공하는 힘이다.",
        author: "넬슨 만델라"
    },
    {
        quote: "삶은 우리가 매일 내리는 선택의 결과이다.",
        author: "엘리너 루즈벨트"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
