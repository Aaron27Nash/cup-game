
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 3;

// Link
playerLivesCount.textcontent = playerLives;

//Card data
const getData = () => [
    { imgSrc: "./images/ace.png", name:"ace"},
    { imgSrc: "./images/king.jpg", name: "king"},
    { imgSrc:"./images/queen.jpg", name: 'queen'},

];

// card random
const randomize = () => {
    const cardData = getData();
    cardData.sort(()=> Math.random() -0.5)
    return cardData;
};

//card maker

const cardGenerator = () => {
    const cardData = randomize ();

    //Html generator

cardData.forEach((item) => { 
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
//attach card info
 face.src = item.imgSrc;
    //adding the cards

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
 });
};

cardGenerator ();