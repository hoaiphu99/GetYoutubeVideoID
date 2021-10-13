import "./styles.css";

const getVideoID = (videoLink) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = videoLink.match(regExp);
  return match && match[2].length === 11 ? match[2] : false;
};

const inputElement = document.getElementById("link");
const btnElement = document.getElementById("submit");
const resultElement = document.getElementById("result");

btnElement.addEventListener("click", () => {
  const videoID = getVideoID(inputElement.value);
  resultElement.innerText = `${videoID}`;
});
