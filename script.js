var button = document.getElementsByClassName("sign");
var user = document.getElementsByClassName("username");
var pass = document.getElementsByClassName("password");

button.addEventListener(onmouseover, change_bord);

const change_bord = () => {
    user.style.color = red;
    pass.style.color = red;
}