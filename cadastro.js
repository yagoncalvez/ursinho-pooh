
function salvarUsuario(nome, email, senha) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = { nome, email, senha };
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}


function exibirUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const listaUsuarios = document.getElementById("listaUsuarios");
    listaUsuarios.innerHTML = ""; 

    usuarios.forEach((usuario, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${usuario.nome}</strong> - ${usuario.email} 
            <button onclick="deletarUsuario(${index})">Deletar</button>
            <button onclick="editarUsuario(${index})">Editar</button>
        `;
        listaUsuarios.appendChild(li);
    });
}


function deletarUsuario(index) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    exibirUsuarios(); 
}


function editarUsuario(index) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios[index];
    
    document.getElementById("nome").value = usuario.nome;
    document.getElementById("email").value = usuario.email;
    document.getElementById("senha").value = usuario.senha;
    
    
    deletarUsuario(index);
}


document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    salvarUsuario(nome, email, senha);
    exibirUsuarios(); 

    
    document.getElementById("formCadastro").reset();
});


document.addEventListener("DOMContentLoaded", exibirUsuarios);
