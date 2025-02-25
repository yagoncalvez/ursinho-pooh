
function verificarLogin(email, senha) {
   
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

   
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    
    return usuario;
}


document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    

    const usuarioValido = verificarLogin(email, senha);
    
    if (usuarioValido) {

        alert("Login bem-sucedido!");
        window.location.href = "index.html"; 
    } else {
        
        const erroLogin = document.getElementById("erroLogin");
        erroLogin.textContent = "Email ou senha inválidos. Tente novamente.";
    }
});
