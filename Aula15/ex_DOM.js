
let click = document.querySelector("#click");

click.addEventListener("click", () => {
    let currentCount = parseInt(document.getElementById("numeroDEclick").textContent); // Obtendo o valor atual do contador
    document.getElementById("numeroDEclick").textContent = currentCount + 1; // Atualizando o valor do contador
});


