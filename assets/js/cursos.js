document.addEventListener("DOMContentLoaded", () => {
  const listId = "cursos-list";
  const itemClass = "curso-item";
  const paginationId = "cursos-pagination";
  const toggleButton = document.querySelector(".orden-toggle-cursos");

  if (!toggleButton) return;

  let ordenAscendente = true;

  function ordenarLista() {
    const lista = document.getElementById(listId);
    if (!lista) return;

    const items = Array.from(lista.querySelectorAll(`.${itemClass}`));

    const ordenados = items.sort((a, b) => {
      const fechaA = new Date(a.dataset.fecha);
      const fechaB = new Date(b.dataset.fecha);
      return ordenAscendente ? fechaA - fechaB : fechaB - fechaA;
    });

    lista.innerHTML = "";
    ordenados.forEach(item => lista.appendChild(item));
  }

  toggleButton.addEventListener("click", () => {
    ordenAscendente = !ordenAscendente;
    toggleButton.textContent = `Orden: ${ordenAscendente ? "Mas antiguo" : "Mas reciente"}`;
    ordenarLista();
    paginateList(listId, itemClass, paginationId, 3);
  });

  ordenarLista();
  paginateList(listId, itemClass, paginationId, 3);
});