// Criar função de ao clicar no h5(elemento) copie para o clipboard o texto do h5
// e exiba um alerta de de copiado

const h5Elements = document.getElementsByTagName("h5");
for (let h5 of h5Elements) {
  h5.addEventListener("click", () => {
    navigator.clipboard
      .writeText(h5.innerText)
      .then(() => {
        alert("Texto copiado para o clipboard!");
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
  });
}
