---
layout: internal/text_page
title: Sitemap
permalink: /sitemap/
hero_image: /img/content/heroes/hero-1.jpg
---

<h2>All Available Pages for {{ site.data.settings.title }}</h2>

<ul class="triangle-list check-list">
	{% for item in site.pages %}
		<li><a href="{{ item.url }}">{{ item.layout }}</a> <small>({{ item.title }})</small></li>
	{% endfor %}
</ul>

<h2>Breakpoints (pxs)</h2>

<table style="width: 300px;">
	<tr>
		<td>Small</td>
		<td>640</td>
	</tr>
	<tr>
		<td>Medium</td>
		<td>641 - 768</td>
	</tr>
	<tr>
		<td>Large</td>
		<td>769 - 1024</td>
	</tr>
	<tr>
		<td>xLarge</td>
		<td>1025 - 1170</td>
	</tr>
	<tr>
		<td>xxLarge</td>
		<td>1171+</td>
	</tr>
</table>

<br>

<h2>Modes</h2>

<h3>Dev Mode</h3>
<p class="panel">The <b>'.dev-mode-enabled'</b> class on the div <b><i>'.lv-super'</i></b> will enable the responsive helper widget. Clicking on this widget will also highlight parts of containers to aid with distinguishing layouts.</p>

<h2>Font Icons</h2>

<p>This site uses font icons in some places including the side nav, you can change the icons by using classes shown here:</p>

<p><a href="http://fontawesome.io/cheatsheet/">http://fontawesome.io/cheatsheet/</a></p>