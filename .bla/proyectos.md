---
title: Proyectos
---

<h1>Ultimos proyectos.</h1>

<ul>
  {% for post in site.proyectos %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>