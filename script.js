const quote = "https://api.quotable.io/random";
const button = document.querySelector("#fetchQuote");
const author = document.querySelector(".author");
const phrase = document.querySelector(".phrase");
const colors = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1",
];

const getQuote = async () => {
  const res = await fetch(quote);
  if (res.ok) {
    const data = await res.json();
    phrase.innerText = data.content;
    author.innerText = `- ${data.author}`;
    changeColor();
  } else {
    phrase.innerText = "Error, no quotes available";
    author.innerText = "- ):";
  }
};

const changeColor = () => {
  let color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
  button.style.backgroundColor = color;
};

button.addEventListener("click", getQuote);
document.onload = getQuote();
