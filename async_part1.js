/////////////////Async 33.2.12 Homework: Part I/////////////

////// Problem #1///////////////////////
///w/Axios

//The below does not make sense because it doesn't seem to be working.

let url = "http://numbersapi.com"
let favNumber = 13;
// let ourFirstPromise = axios.get(url);
// console.log(ourFirstPromise);
// 
//This did not work either using above variable with below function


// ourFirstPromise
// .then(data => console.log(data))
// let number_test;
// 
// ourFirstPromise
// .then(data2 => {
// console.log(data2.text)
// return axios.get(url)
// }
// )
// $.ajax("http://numbersapi.com/1?json").then(response => {
// console.log(response.text);
// });
// 
// axios.get("http://numbersapi.com/1?json").then(response => {
// console.log(response);
// });

// $.getJSON(url).then(data3 => {
// console.log(data3.text);
// });

////Problem #2////////

let favNumList = [7, 13, 19, 21, 42];
$.getJSON(`${url}/${favNumList}?json`).then(data4 => {
    let newLi = document.createElement("li");
    newLi.innerText = data4;
    console.log(data4);
});

let new4_about42 = [];
for (let i = 1; i < 5; i++) {
    let data;

    $.getJSON(`${url}/42?json`).then(data => {
        let newLi = document.createElement("li");
        newLi.innerText = data.text + data.number;
        $("div").append(newLi);
        console.log(data);
    });



};

////Problem #3////

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${url}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});

/////Part II:///////

//// Problem # 1///////
const cardURL = "https://deckofcardsapi.com/api/deck"
let currentDeckId;
// $.getJSON(`${cardURL}/new/shuffle/?deck_count=1`)
// .then(newDeck => {
// console.log(newDeck);
// console.log(newDeck.deck_id);
// let currentDeck = newDeck.deck_id;
// return $.getJSON(`${cardURL}/${currentDeck}/draw/?count=2`);
// })
// .then(newCard => {
// console.log(newCard);
// let newCard1Value = newCard.cards[0].value;
// let newCard1Suit = newCard.cards[0].suit;
// console.log(`${newCard1Value} of ${newCard1Suit}`);
// });


////Problem #2//////
let currentDeck = null;
$.getJSON(`${cardURL}/new/shuffle/?deck_count=1`)
    .then(newDeck => {
        console.log(newDeck);
        console.log(newDeck.deck_id);
        let currentDeck = newDeck.deck_id;
        return $.getJSON(`${cardURL}/${currentDeck}/draw/?count=2`);
    })
    .then(newCard => {
        // newCard.forEach(data => $("body").append(`<p>${newCard.cards[0].value} of${newCard.cards[0].suit}`))
        let newCard1Value = newCard.cards[0].value;
        let newCard1Suit = newCard.cards[0].suit;
        let newCard2Value = newCard.cards[1].value;
        let newCard2Suit = newCard.cards[1].suit;
        console.log(`${newCard1Value} of ${newCard1Suit}`);
        console.log(`${newCard2Value} of ${newCard2Suit}`);
    });




