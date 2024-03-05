const btnPesquisa = document.getElementById("btnPesquisa");
const inputPkmn = document.getElementById("inputPkmn");

btnPesquisa.addEventListener("click", function(){
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url + inputPkmn.value.trim())
    .then((response) => {
        if(!response.ok){
            alert(`Não foi possível encontrar este pokémon`)
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
    });
});