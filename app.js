var dropdown = document.querySelector("#dropdown");

var hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    dropdown.classList.toggle("height-60");
})