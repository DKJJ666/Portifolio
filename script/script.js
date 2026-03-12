let header = document.querySelector("header");
let mIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

menubar.onclick = () => {
    navBar.classList.toggle("active");
};

menubar.onclick = () => {
    navBar.classList.remove("active");
};

let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
}};
