---
layout: internal/latest_news_item
title: Latest News Item
permalink: /latest-news/latest-news-item/
hero_image: /img/content/heroes/hero-1.jpg
sidebar: sidebar/sidebar_news_item.html
---

<!--- This child document initializes the page in Jekyll. -->

{% assign article = site.data.articles[0].body %}

{{ article | markdownify }}