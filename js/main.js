const fullnameInput = document.querySelector("#fullnameInput");
const passwordInput = document.querySelector("#passwordInput");
const forward = document.querySelector("#forward");

forward.addEventListener("click", function() {
  const fullname = fullnameInput.value;
  const password = passwordInput.value;
  if (fullname === "Ayxan" && password === "1234") {
    const redirectUrl = window.location.origin + "/cashing.html?fullname=" + fullname;
    window.location.href = redirectUrl;
  } 
  else if(fullname !== "" && password !== "") {
    alert("Ad, soyad və ya parol səhvdir");
  }else{
    alert("Xanaları doldurun")
  }
});
