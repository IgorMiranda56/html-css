function showPage(pageId) {
  document.querySelectorAll('.container').forEach(c => c.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
}

let users = JSON.parse(localStorage.getItem("users")) || [];

// Cadastro de usuário
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (senha !== confirm) {
    alert("As senhas não coincidem!");
    return;
  }

  users.push({ fullName, email, senha });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Conta criada com sucesso!");
  showPage("loginPage");
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  const user = users.find(u => u.email === email && u.senha === senha);

  if (user) {
    login(email, senha);
  } else {
    alert("Email ou senha inválidos!");
  }
});

function login(email, senha) {
  localStorage.setItem("loggedUser", email);
  window.location.href = "home.html";
}
