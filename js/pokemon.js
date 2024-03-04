const btnPesquisa = document.getElementById("btnPesquisa");
const inputPkmn = document.getElementById("inputPkmn");

btnPesquisa.addEventListener("click", function(){
    let url = 'https://pokeapi.co/api/v2/pokemon/99/';
    fetch(url + inputPoke.value.trim())
    .then((response) => {
        if(!responde.ok){
            throw new Error(`Não foi possível encontrar este pokémon`)
        }
        return response.json();
    })
    .then((data) => {
        console.clear();
        console.log(data);
        document.getElementById('nome').innerHTML = data['name'];
        document.getElementById('idPokemon').innerHTML = data['id'];
        let img = data['sprites']['front_default'];
        document.getElementById('pic').setAttribute('src', img);
    })
    
    .catch((erro) => {
        console.log("Erro: " + erro);
    })
});

//document.getElementById('btn').onclick = carregarPokemon;