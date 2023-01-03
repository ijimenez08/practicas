const img = document.querySelector(".img")
const buttonBlue = document.querySelector(".blue")
const active = document.querySelector(".active")
const phragraph = document.querySelector(".phragraph")
const msn = document.querySelector(".msn")
const btn = document.querySelector(".btn")
const btnActive = document.querySelector(".btnActive")
let textareaView = document.querySelector(".textareaView")
let btnWhite = document.querySelector(".white")

buttonBlue.onclick = () => {
  img.classList.toggle("active")
  phragraph.classList.toggle("active")
  msn.classList.toggle("active")
  btn.classList.toggle("btnActive")
  textareaView.classList.toggle("btnActive")
  show(encrypter())
}

function show(text) {
  document.getElementById("view").innerHTML = text
}

function encrypter() {
  let text = document.querySelector(".text").value.toLowerCase()

  let phrase = ""
  let phrase2 = ""

  console.log(text)

  phrase = text
    .toLowerCase()
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")

  phrase2 = phrase
  if (phrase2 == "") {
    alert("por favor ingrese una frase")
    location.href = location.href
  } else {
    return phrase2
  }
}
function desencrypter() {
  let text = document.querySelector(".text").value.toLowerCase()

  let phrase2 = ""
  let phrase = text
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")

  phrase2 = phrase
  console.log(phrase2)
  buttonBlue.addEventListener("click", function () {
    document.querySelector(".text").value = ""
  })

  return phrase2
}

btnWhite.onclick = () => {
  show(desencrypter())
}
btn.addEventListener("click", function () {
  copytext = navigator.clipboard.writeText(textareaView.value).then(() => {
    text = document.querySelector(".text").value = textareaView.value
  })
})