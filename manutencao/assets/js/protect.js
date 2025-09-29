document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  if (!user) {
    alert("Você precisa estar logado!");
    window.location.href = "index.html";
  }
});
