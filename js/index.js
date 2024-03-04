function logar(){
    const login = document.getElementById('inputNome').value;
    const senha = document.getElementById('inputSenha').value;

    if (login == 'admin' && senha == 'admin') {
        alert('Login efetuado com sucesso!');
        location.href = "./pages/pokemon.html";
    } else {
        alert('Usúario ou senha incorreto')
    }
}