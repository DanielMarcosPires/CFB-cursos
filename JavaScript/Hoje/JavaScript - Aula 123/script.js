
fetch("http://127.0.0.1:5502/JavaScript%20-%20Aula%20123/pokemon.json")
    .then(response=> response.json())
    .then(lista => pokedex(lista.pokemons));

    
function pokedex(pokemon) {
    let display = document.querySelector("p")
    let proximo = document.querySelector("#prox");
    let ant = document.querySelector("#ant");
    let res = 0
    proximo.addEventListener("click",()=>{
            console.log(res+=1);
            display.innerHTML =`
            
            <h1><span>${pokemon[res].zukan_id}</span> | ${pokemon[res].pokemon_name}</h1>
            <h3>${pokemon[res].pokemon_type_name}</h3>
            <p>${res}</p>
            `
    })
    ant.addEventListener("click",()=>{
        if(res > 0){
            console.log(res-=1);
            display.innerHTML =`
            <h1><span>${pokemon[res].zukan_id}</span> | ${pokemon[res].pokemon_name}</h1>

             <h2>${pokemon[res].pokemon_type_name}</h2>
             <p>${res}</p>
            `
        }
    })
    display.innerHTML =`
    <h1><span>${pokemon[res].zukan_id}</span> | ${pokemon[res].pokemon_name}</h1>
    <h3>${pokemon[res].pokemon_type_name}</h3>
    <p>${res}</p>
    `

    console.log(pokemon);

}