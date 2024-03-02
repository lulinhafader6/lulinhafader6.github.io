const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/cara-lindo-e-alegre-recebendo-massagem-e-relaxamento-luz-baixa (3).jpg") {
    myImage.setAttribute("src", "imagens/LuizInacioLulaDaSilva-Lula-CamiloSantana-Brasil-58-848x477-Copia.png");
  } else {
    myImage.setAttribute("src", "imagens/cara-lindo-e-alegre-recebendo-massagem-e-relaxamento-luz-baixa (3).jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `PRIVATEPINK é maravilhoso, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `PRIVATEPINK é maravilhoso, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
