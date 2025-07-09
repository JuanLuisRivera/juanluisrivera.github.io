function paginateList(listId, itemClass, paginationId, itemsPerPage = 3) {
  const items = document.querySelectorAll(`#${listId} .${itemClass}`);
  const pagination = document.getElementById(paginationId);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let currentPage = 1;

  function showPage(page) {
    items.forEach((item, i) => {
      item.style.display =
        i >= (page - 1) * itemsPerPage && i < page * itemsPerPage
          ? "list-item"
          : "none";
    });

    // Reset pagination controls
    pagination.innerHTML = "";
    for (let p = 1; p <= totalPages; p++) {
      const button = document.createElement("button");
      button.textContent = p;
      button.disabled = p === page;
      button.onclick = () => showPage(p);
      pagination.appendChild(button);
    }
  }

  showPage(currentPage);
}



document.addEventListener("DOMContentLoaded", () => {
  paginateList("ejercicios-list", "ejercicio-item", "ejercicios-pagination", 3);
});

document.addEventListener("DOMContentLoaded", () => {
  paginateList("posts-list", "post-item", "posts-pagination", 3);
});

document.addEventListener("DOMContentLoaded", () => {
  paginateList("proyectos-list", "proyecto-item", "proyectos-pagination", 3);
});

document.addEventListener("DOMContentLoaded", () => {
  paginateList("cursos-list", "curso-item", "cursos-pagination", 3);
});