let rememberMe = false;

export function toggleButtonAnimation() {

    let buttonsParent = <HTMLDivElement>document.querySelector(".login .remember-me div");
    let button = <HTMLDivElement>document.querySelector(".login .remember-me div div");

    if (!rememberMe) {
        button.style.marginLeft = buttonsParent.offsetWidth - button.offsetWidth + "px";
        rememberMe = true;
        return;
    } if (rememberMe) {
        button.style.marginLeft = 0 + "px";
        rememberMe = false;
        return;
    }

}