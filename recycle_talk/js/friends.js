const name = document.querySelector(".friends-userName"),
      word = document.querySelector(".friends-userWord");

function changeProfile(){
    const userName = localStorage.getItem("userName");
    const userWord = localStorage.getItem("userWord");
    name.innerHTML = userName;
    word.innerHTML = userWord;

}

function init(){
    changeProfile();
}

init();