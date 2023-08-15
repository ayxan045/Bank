const money = document.querySelector("#money");
const howMuchBtns = document.querySelectorAll(".howMuchBtn");


window.onload = function () {
  const storedMoney = localStorage.getItem("money");
  if (storedMoney !== null && !isNaN(storedMoney)) {
    money.innerText = Number(storedMoney);
  }
};


howMuchBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const currentURL = window.location.href;
    const thisBtn = btn.innerText.replace("Azn", "");
    if (currentURL.includes("/howMuch.html?Balans_art")) {
      if (btn.innerText === "Digər") {
        const otherMoney = prompt("yükləmək istədiyiniz məbləği girin:");
        if (otherMoney !== null && !isNaN(otherMoney)) {
          money.innerText = Number(money.innerText) + Number(otherMoney);
          localStorage.setItem("money", money.innerText);
          return;
        }
        return;
      }
      money.innerText = Number(money.innerText) + Number(thisBtn);
      localStorage.setItem("money", money.innerText);
    } else if (currentURL.includes("/howMuch.html?Balansdan_")) {
      if (btn.innerText === "Digər") {
        const otherMoney = prompt("çıxarış etmək istədiyiniz məbləği girin:");
        if (otherMoney !== null && !isNaN(otherMoney)) {
          money.innerText = Number(money.innerText) - Number(otherMoney);
          localStorage.setItem("money", money.innerText);

          return;
        }
        return;
      }
      money.innerText = Number(money.innerText) - Number(thisBtn);
      localStorage.setItem("money", money.innerText);
    }
  });
});
