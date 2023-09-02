const apikey = "SeT7vfMLkvNrL8IB515A68MBsLG2HFxu";
const termino = document.querySelector(".termino");
const buscador = document.querySelector(".buscador");
const resultados = document.querySelector(".resultados");


buscador.addEventListener("click", () => {
    resultados.innerHTML = "";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${termino.value}&limit=9`;
    const peticion = fetch(url);
    peticion
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            response.data.forEach(element => {
                const urlImg = element.images.original.url;
                const img = document.createElement("img");
                const div = document.createElement("div");
                div.className = "gif-card";
                img.src = urlImg;
                resultados.appendChild(div);
                div.appendChild(img); 
                
            });
                
            })
        })