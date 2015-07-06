---
layout: internal/news_item
title: News Item
permalink: /news/news-item/
hero_image: /img/content/banners/banner-globe.jpg
---

<!--- This child document initializes the page in Jekyll. -->

{% assign article = site.data.articles[0].body %}

{{ article | markdownify }}