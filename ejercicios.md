---
title: Ejercicios
---
<h1>Ejercicios: </h1>

<ul>
  {% for ejercicio in site.ejercicios %}
    <li>
      <h2>Ejercicio: <a href="{{ ejercicio.url }}">{{ ejercicio.title }}</a></h2>
      <p>{{ ejercicio.excerpt | markdownify }}</p>
    </li>
  {% endfor %}
</ul>