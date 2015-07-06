---
layout: internal/text_page
title: Sitemap
permalink: /sitemap/
hero_image: "/img/content/banners/banner-canola-field.jpg"
---

<!--- This child document initializes the page in Jekyll. -->

<div class="row">
	<div class="columns">
		<h2>All Available Pages for Enterprise Wide</h2>

		<ul class="triangle-list">
			{% for item in site.pages %}
				<li><a href="{{ item.url }}">{{ item.layout }}</a> <small>({{ item.title }})</small></li>
			{% endfor %}
		</ul>

		<h2>Breakpoints</h2>

		<table style="width: 300px;">
			<tr>
				<td>Small</td>
				<td>640</td>
			</tr>
			<tr>
				<td>Medium</td>
				<td>1024</td>
			</tr>
			<tr>
				<td>Large</td>
				<td>1140</td>
			</tr>
			<tr>
				<td>xLarge</td>
				<td>1300</td>
			</tr>
			<tr>
				<td>xxLarge</td>
				<td>N/A</td>
			</tr>
		</table>
	</div>
</div>

<h3>Notes</h3>

<p class="panel">Remove <b>'.dev-mode-enabled'</b> class near the body to disable the responsive helper widget.</p>
