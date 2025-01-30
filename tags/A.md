---
layout: templates/default
title: A Tag
pagination: 
  enabled: true
  collections: proyectos
  permalink: /:num/
  per_page: 2
---

{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

<div class="pagination">
    <div class="page-numbers">
        {% if paginator.page_trail %}
            {% for trail in paginator.page_trail %}
                {% if page.url == trail.path %}{% endif %}
                    <a href="{{ trail.path | prepend: site.baseurl }}" title="{{trail.title}}">{{ trail.num }}</a>
                {% endfor %}
            {% endif %}
    </div>

  <div class="navigation-links">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}">Mas recientes</a>
    {% endif %}
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}">Mas antiguos</a>
    {% endif %}
  </div>
</div>