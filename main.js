
function createCard(niceImg, nameSurname, numberAge, fullNickname, fullPortrayed) {

    let newImg = document.createElement("img");
    newImg.className = "img";
    newImg.src = niceImg;

    let newName = document.createElement("name");
    newName.textContent = nameSurname;

    let newAge = document.createElement("age");
    newAge.textContent = numberAge;

    let newNickname = document.createElement("nickname");
    newNickname.textContent = fullNickname;

    let newPortrayed = document.createElement("portrayed");
    newPortrayed.textContent = fullPortrayed;

    let newCard = document.createElement("div");
    newCard.className = "item";

    newCard.append(newImg, newName, newAge, newNickname, newPortrayed);

    return newCard;
};

function appendCard(card) {
    let parent = document.getElementById("main");
    parent.append(card);
}
async function getRandomCharacter() {
    const requestURL = 'https://breakingbadapi.com/api/character/random';
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    getRandomCharacter().then(data => {
        let { img, name, birthday, nickname, portrayed } = data[0];
        img = `${img}`;
        name = `${name}`;
        birthday = `${birthday}`;
        nickname = `${nickname}`;
        portrayed = `${portrayed}`;
        let card = createCard(img, name, birthday, nickname, portrayed);
        appendCard(card);
    }).catch(error => {
        console.log(error);
    });
})


let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", function () {
    let reset = document.querySelector("main")
    reset.innerHTML = '';
});

async function getCharacter(id) {
    const requestURL = 'https://breakingbadapi.com/api/characters/' + id;
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
    let input = +prompt("Įvesk ID: ");
    getCharacter(input).then(data => {
        let { img, name, birthday, nickname, portrayed } = data[0];
        img = `${img}`;
        name = `${name}`;
        birthday = `${birthday}`;
        nickname = `${nickname}`;
        portrayed = `${portrayed}`;
        let card = createCard(img, name, birthday, nickname, portrayed);
        appendCard(card);
    }).catch(error => {
        console.log(error);
    });
})

async function allCharacter() {
    const requestURL = 'https://breakingbadapi.com/api/characters';
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
    allCharacter().then(data => {
        data.forEach(item => {
            let { img, name, birthday, nickname, portrayed } = item;
            img = `${img}`;
            name = `${name}`;
            birthday = `${birthday}`;
            nickname = `${nickname}`;
            portrayed = `${portrayed}`;
            let card = createCard(img, name, birthday, nickname, portrayed);
            appendCard(card);
        })
    }).catch(error => {
        console.log(error);
    });
})
