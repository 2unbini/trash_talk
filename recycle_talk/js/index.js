const form = document.querySelector(".login-form"),
      name = document.querySelector(".tbName"),
      word = document.querySelector(".tbWord");

function saveThings(text1, text2){
    localStorage.setItem('userName', text1);
    localStorage.setItem('userWord', text2);
}

function handleSubmit(event){
    const nameValue = name.value;
    const wordValue = word.value;
    saveThings(nameValue, wordValue);
}

function askName(){
    form.addEventListener("submit", handleSubmit);
}

function init(){
    askName();
    handleSubmit();
}

init();