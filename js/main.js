let input = document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list");


/*
const marvel = {
    render: () => {
        const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}`;
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then(json =>{
                console.log(json, 'RES.JSON')
            })
    }
}


marvel.render();
*/
let date = new Date();
console.log(date.getTime());
const[timestamp, apiKey, hashValue] = [ts,publicKey, hashVal];

button.addEventListener("click", (getRsult = async () => {
    if (input.value.trim().length < 1){
        alert("input cannot be blank");
    }
    showContainer.innerHTML = "";
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

    const response = await fetch(url);
    const jsonData =  await response.json();
    jsonData.data["results"].forEach((element) => {
        showContainer.innerHTML =`<div class="card-container">
        <div class ="container-character-image">
        <img src = " ${element.thumbnail["path"] + " ." + element.thumbnail["extension"]
    }"/></div>
    <div class="character-name"> ${element.name}</div>
    <div class="character.description"> ${element.description}</div>
    </div>`;
    });


})

);
window.onload = () => {
    getRsult();
}




