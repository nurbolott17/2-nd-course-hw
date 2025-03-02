function flipText() {
    let userText = prompt('Введите текст, которую нужно перевернуть');
    userText = userText.split("").reverse(" ").join("")
    alert(userText)
}