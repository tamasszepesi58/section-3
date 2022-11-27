let rememberMe = false;

export function toggleButtonAnimation() {

    let buttonsParent = <HTMLDivElement>document.querySelector(".login .remember-me div");
    let button = <HTMLDivElement>document.querySelector(".login .remember-me div div");

    if (!rememberMe) {
        button.style.marginLeft = buttonsParent.offsetWidth - button.offsetWidth + "px";
        button.setAttribute("class", "remember")
        rememberMe = true;
        return;
    } if (rememberMe) {
        button.style.marginLeft = 0 + "px";
        button.setAttribute("class", "noRemember")
        rememberMe = false;
        return;
    }

}