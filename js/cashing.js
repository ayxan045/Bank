const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");

plusBtn.addEventListener("click", function(){
    const redirectUrl = window.location.origin + "/howMuch.html?Balans_artımı";
    window.location.href = redirectUrl;
})
minusBtn.addEventListener("click", function(){
    const redirectUrl = window.location.origin + "/howMuch.html?Balansdan_çıxarış";
    window.location.href = redirectUrl;
})