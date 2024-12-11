const perguntas = document.querySelectorAll(".container__perguntas");

perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        pergunta.classList.toggle("active");
    });
})